import { AccountBase } from './src/Account/Base';
import { AccountCompany } from './src/Company/Account'
import { AccountPeople } from './src/People/Account'
import { ProfitableAccountPeople } from './src/People/ProfitableAccount';

const peopleAccount: AccountPeople = new AccountPeople(1, 'Lucas', 1);

const companyAccount: AccountCompany = new AccountCompany('Company', 2);

const profitableAccount: ProfitableAccountPeople = new ProfitableAccountPeople('Account PROFITABLE', 3);

const accounts:Array<AccountBase> = [
    peopleAccount,
    companyAccount,
]

const processTransaction = (account: AccountBase) => {
    account.deposit(100);
    account.withdraw(10);
        
    account.showBankStatement();

}

accounts.forEach(processTransaction);

companyAccount.getLoan(1000);


profitableAccount.depositWithGrowthFees(1000);

profitableAccount.showBankStatement();

