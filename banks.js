class Bank {
  constructor(bankName, location) {
    this.bankName = bankName;
    this.location = location;
  }

  interest() {
    console.log(`${this.bankName} at ${this.location} charges 2% interest.`);
  }
}

export { Bank };
