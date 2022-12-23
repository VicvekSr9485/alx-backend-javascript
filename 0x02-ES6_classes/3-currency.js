export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('code must be a string');
    if (typeof name !== 'string') throw TypeError('name must be a string');

    this._code = code;
    this._name = name;
  }

  set code(value) {
    if (typeof value !== 'string') throw TypeError('code must be a string');
    this._code = value;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('name must be a string');
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
