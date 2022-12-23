export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') throw TypeError('name must be string');
    if (typeof lenght !== 'number') throw TypeError('length must be number');
    if (!Array.isArray(students)) throw TypeError('students must be an array of strings');
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('students must be an array of strings');
    });
    this._name = name;
    this._length = lenght;
    this._students = students;
  }

  set name(studentName) {
    if (typeof studentName !== 'string') throw TypeError('name must be string');
    this._name = studentName;
  }

  set length(newLenght) {
    if (typeof newLenght !== 'number') throw TypeError('length must be number');
    this._length = newLenght;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw TypeError('students must be an array of strings');
    newStudents.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('students must be an array of strings');
    });
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
