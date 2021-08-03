"use strict";

class SavingsAccount extends Account {
    constructor(number, interest){
            super(number);
            this._interest = interest;
    }
    getInterest(){
        return this._interest;
        }
    setInterest(interest){
        this._interest = interest;
    }
    addInterest(){
         this._balance = (this._balance + (this._balance * this._interest / 100));
         //this._deposit =  (this._balance * this._interest / 100);
    }
    toString(){
       // return super.toString()+ interest:${this._interest}`;
        return "Savings Account " + this._number + ": balance " + this._balance+ ": interest " + this._interest;
    }
     endOfMonth() {
            const currentBalance = this._balance;
            this.addInterest();

            return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._balance - currentBalance}`;
        }

}