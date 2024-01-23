import { AccountBase } from "../Account/Base"

export class ProfitableAccountPeople extends AccountBase {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  depositWithGrowthFees = (balance: number): Boolean => {
    const { status: statusBalance } = this.deposit(balance);

    if( statusBalance ){
        const {status: statusGrowthFees} = this.deposit(10);
        return statusGrowthFees;
    }
    return false;
  }
}