class Bank{
    static accountNumber = 1;
    constructor() {
        this.accounts = [];
    }
    addAccount() {
            let newAccount = new Account(Bank.accountNumber++);
            this.accounts.push(newAccount);
         return this.accounts.length;
        }
    addSavingsAccount(interest) {
            this.accounts.push(new SavingsAccount(Bank.accountNumber++, interest));
          }
    addCheckingAccount(overdraft) {
           this.accounts.push(new CheckingAccount(Bank.accountNumber++, overdraft));
           return this.accounts.length;
             }
    closeAccount(number) {
            for (let i in this.accounts) {
                if (this.accounts[i].getNumber() == number) {
                    this.accounts.splice(i, 1);
                    break;
                }
            }
        }
    static nextNumber() {
            const nextNumber=accountNumber;
            return ++nextNumber;
        }
    accountReport() {
            let report = "";
            for (let accounts of this.accounts) {
                report += accounts.toString() + '\n';
            }
            return report;
        }
    endOfMonth() {
            results = [];
            for (let accounts of this.accounts) {
                results.push(accounts.endOfMonth());
            }
        }
}

