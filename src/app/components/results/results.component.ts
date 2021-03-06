import { Component, OnInit, Input, Directive } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../services/event-emmiter.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {

  scoreData: ScoreModel;
  twitterUrl: string;

  @Input() twitterButton: string;
  constructor(
    private sharingService: SharingService,
    private router: Router,
    private eventEmiiter: EventEmitterService
  ) {
    this.scoreData = sharingService.getData();
    if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
      this.router.navigate(['/McSelector']);
    }
    this.scoreData.Mc1.calculateTotal();
    this.scoreData.Mc2.calculateTotal();
  }

  getTwitterUrl(): void {
    var scoreMc1 = parseFloat(this.scoreData.Mc1.result.toString());
    var scoreMc2 = parseFloat(this.scoreData.Mc2.result.toString());
    var winnerMc = Math.abs(scoreMc1 - scoreMc2) <= 5 ? null : (scoreMc1 > scoreMc2 ? this.scoreData.Mc1 : this.scoreData.Mc2);
    var loserMc = winnerMc != null ?  (winnerMc === this.scoreData.Mc1 ? this.scoreData.Mc2 : this.scoreData.Mc1) : null;
    var concatToUrl = "";

    if(winnerMc === null && loserMc === null){
      concatToUrl = "REPLICA! " + this.scoreData.Mc1.name + " " + scoreMc1 + " puntos frente a " + this.scoreData.Mc2.name + " con " + scoreMc2  + " puntos. %0D%0D%23VotosFMS";
    }else{
      concatToUrl = "Ganador: " + winnerMc.name.toUpperCase() + " con " + winnerMc.result + " puntos frente a " + loserMc.name.toUpperCase() + " con " + loserMc.result + " puntos. %0D%0D%23VotosFMS";
    }
    concatToUrl = concatToUrl.replace(" ", "%20");

    window.open("https://twitter.com/intent/tweet?text=" + concatToUrl, "_blank");
  }

  ngOnInit() {
  }

}
