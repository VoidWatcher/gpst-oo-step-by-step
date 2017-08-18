const Person = require('./person');

class Teacher extends Person {
  constructor (name, age, clazzes, id) {
    super (name, age);
    this.clazzes = clazzes;
    this.id = id;
    this.joinClazzes();
  }

  joinClazzes () {
    for (let value of this.clazzes) {
      value.teacherMembers.push(this);
    }
  }

  introduce () {
    if (this.clazzes == []) {
      return super.introduce() + ` ` + `I am a Teacher. I teach No Class.`;
    }
    else {
      let clazzesNumber = this.clazzes.map((value) => value.number);
      return super.introduce() + ` ` + `I am a Teacher. I teach Class ${clazzesNumber}.`;
    }
  }

  isTeaching (student) {
    for (let value of this.clazzes) {
      if (value.hasStudent(student)) {
        return true;
      }
    }
    return false;
  }

  notifyStudentAppended(joinedMessage) {
    console.log(`I am ${this.name}. I know ${joinedMessage}.`);
  }

  notifyLeaderAssigned(joinedMessage) {
    console.log(`I am ${this.name}. I know ${joinedMessage}.`);
  }
}

module.exports = Teacher;