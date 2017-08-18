const Person = require('./person');

class Student extends Person {
  constructor (name, age, clazz, id) {
    super(name, age);
    this.clazz = clazz;
    this.id = id;
  }

  introduce () {
    if (!this.clazz.hasStudent(this)) {
      return super.introduce() + ` ` + `I am a Student. I haven't been allowed to join Class.`;
    }
    else if (this.clazz.hasStudent(this) && this.clazz.leader != this) {
      return super.introduce() + ` ` + `I am a Student. I am at Class ${this.clazz.number}.`;
    }
    else if (this.clazz.hasStudent(this) && this.clazz.leader == this) {
      return super.introduce() + ` ` + `I am a Student. I am Leader of Class ${this.clazz.number}.`;
    }
  }
}
module.exports = Student;