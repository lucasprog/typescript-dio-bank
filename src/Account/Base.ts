import { StatusTransaction } from "../Types/StatusTransactions";

export abstract class AccountBase {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true
    bankStatement: string = '';
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
      this.name = name
      console.log('Nome alterado com sucesso!')
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = (balance: number): StatusTransaction => {
      const statusTransaction = {
        status: false, 
        message: 'Invalid account', 
        totalBalance: this.balance
      };

      if(this.validateStatus()){
        this.balance += balance;
        statusTransaction.status = true;
        statusTransaction.message = 'Deposit done!';
        statusTransaction.totalBalance = this.balance;
      }

      this.setBankStatement('Deposit',statusTransaction);

      return statusTransaction;
    }
  
    withdraw = (valueToWithdraw: number): StatusTransaction => {
      const statusTransaction = {
        status: false, 
        message: 'Invalid account', 
        totalBalance: this.balance
      };

      if(this.validateStatus()){

        if( this.balance >= valueToWithdraw ){
          this.balance -= valueToWithdraw;
          statusTransaction.status = true;
          statusTransaction.message = 'Withdraw done!';
          statusTransaction.totalBalance = this.balance;
        } else {
          statusTransaction.message = 'Insufficient funds';
          statusTransaction.totalBalance = this.balance;
        }

      }

      this.setBankStatement('Withdraw',statusTransaction);

      return statusTransaction;
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }
  
    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }

    setBankStatement = (type: string, { status, message, totalBalance}: StatusTransaction): void => {
      this.bankStatement += `${type}::\nStatus: ${status} \nMessage:: ${message}\nTotal Current: ${totalBalance}\n_____________________\n\n`;
    }

    showBankStatement = (): void => {
      console.log('Account Name: ', this.getName());
      console.log('*********************\n');    
      console.log(this.bankStatement);
      console.log("\n---------------------\n");
    }
    
  }