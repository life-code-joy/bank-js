import { Bank } from './banks.js';

console.log(Bank);

const citiBank = new Bank('CitiBank', 'New Deli', 1200, 'May 2 2010');
citiBank.interest();

// bankHeadquartersMsg();
console.log(citiBank);
