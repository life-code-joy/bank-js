class Bank {
  constructor(bankName, location, numOfEmployees, dateOpened) {
    this.bankName = bankName;
    this.location = location;
    this.numOfEmployees = numOfEmployees;
    this.dateOpened = dateOpened;
  }

  interest() {
    console.log(`${this.bankName} at ${this.location} charges 2% interest.`);
  }

  static bankHeadquartersMsg() {
    console.log('Hey the meeting is tomorrow at 5:00');
  }
}

export { Bank };
