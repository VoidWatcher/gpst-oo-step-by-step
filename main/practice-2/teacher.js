const Person = require('./person');

class Teacher extends Person {
  constructor (name, age, clazzes, id) {
    super (name, age);
    this.clazzes = clazzes;
    this.id = id;
  }

  introduce () {
    if (this.clazzes.length == 0) {
      return super.introduce() + ` ` + `I am a Teacher. I teach No Class.`;
    }
    else {
      let clazzesNumber = this.clazzes.map((value) => value.number);
      return super.introduce() + ` ` + `I am a Teacher. I teach Class ${clazzesNumber}.`;
    }
  }
}

module.exports = Teacher;