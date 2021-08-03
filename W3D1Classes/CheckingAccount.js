"use strict"
class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this.overdraft = overdraft;
    }
    getOverdraft() {
        return this._overdraft;
    }
    setOverdraft(overdraft){
        this.overdraft = overdraft;
    }

    withdraw(amount){
        if(amount<=0)
             throw new RangeError("Withdraw amount has to be greater than zero");
        if (amount > this._balance + this._overdraft) {
            throw Error(`you cant withdrow ${this._overdraft} amount`)
        }
         this._balance -= amount;
    }

    toString() {
          return super.toString() + `overdraft: ${this._overdraft}`;
        }
    endOfMonth() {
           //Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500
           if (this._balance < 0) {
               return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this.overdraft}`;
           }

           return "";
       }}