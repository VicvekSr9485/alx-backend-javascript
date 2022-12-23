export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  set sqft(newsSqft) {
    this._sqft = newsSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
