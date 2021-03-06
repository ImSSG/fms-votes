export class AdditionalScoreModel {
  flow;
  skills;
  scene;

  getTotal(): number {
    const result = parseFloat(this.getFlow().toString()) + parseFloat(this.getSkills().toString())  + parseFloat(this.getScene().toString());
    console.log(result !== undefined ? result : 0);
    return result !== undefined ? result : 0;
  }

  getFlow(): number {
    return this.flow === undefined ? 0 : this.flow
  }

  getSkills(): number {
    return this.skills === undefined ? 0 : this.skills
  }

  getScene(): number {
    return this.scene === undefined ? 0 : this.scene
  }
}
