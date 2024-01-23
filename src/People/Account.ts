import { AccountBase } from "../Account/Base"

export class AccountPeople extends AccountBase {
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id;
  }
  
}