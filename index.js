import { Bank } from './banks.js';

console.log(Bank);

const citiBank = new Bank('CitiBank', 'New Deli');
citiBank.interest();

console.log(citiBank);
