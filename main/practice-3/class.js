// Write your code here

class Class {
  constructor (number) {
    this.number = number;
    this.studentMembers = [];
  }

  appendMember (student) {
    this.studentMembers.push(student);    
  }

  assignLeader (student) {
    if (this.studentMembers.indexOf(student) != -1) {
      this.leader = student;
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