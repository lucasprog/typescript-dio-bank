import { AccountBase } from "../Account/Base"

export class AccountCompany extends AccountBase {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  getLoan = (valueToLoan: number): void => {
    const { status, message, totalBalance } = this.deposit(valueToLoan);

    this.setBankStatement('Loan', {status, message, totalBalance});
  }
}