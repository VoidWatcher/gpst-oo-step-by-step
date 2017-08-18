// Write your code here

class Class {
  constructor (number) {
    this.number = number;
    this.studentMembers = [];
    this.teacherMembers = [];
  }

  appendMember (student) {
    this.studentMembers.push(student);
    for (let value of this.teacherMembers) {
      value.notifyStudentAppended(`${student.name} has joined Class ${this.number}`);    
    }
  }

  assignLeader (student) {
    if (this.studentMembers.indexOf(student) != -1) {
      this.leader = student;
      for (let value of this.teacherMembers) {
        value.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`);        
      }
      return `Assign team leader successfully.`;
    }
    else {
      return `It is not one of us.`;
    }
  }

  hasStudent (student) {
    if (this.studentMembers.includes(student)) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Class;