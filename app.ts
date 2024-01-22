import { AccountCompany } from './src/Company/Account'
import { AccountPeople } from './src/People/Account'

const peopleAccount: AccountPeople = new AccountPeople(1, 'Lucas', 10);
console.log(peopleAccount)

peopleAccount.deposit()

const companyAccount: AccountCompany = new AccountCompany('Company', 20)
companyAccount.deposit()

console.log(companyAccount)