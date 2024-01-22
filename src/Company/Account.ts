import { AccountBase } from "../Account/Base"

export class AccountCompany extends AccountBase {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}