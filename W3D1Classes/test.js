describe("Create Account", function() {
    it("gets account number of account", function() {
        let accounts = new Account(1);
        assert.equal(accounts.getNumber(), 1);
    })
});

describe("Deposit", function() {
    it("Deposit money and update balance of an account", function() {
        let accounts = new Account(1);
        accounts.deposit(200);
        accounts.deposit(150);
        assert.equal(accounts.getBalance(), 350);
        assert.throws(() => accounts.deposit(-1), Error);
    })
});


describe("Withdraw", function() {
    it("Withdraw money and update balance of an account", function() {
        let accounts = new Account(123);
        accounts.deposit(200);
        accounts.deposit(150);
        accounts.withdraw(100);
        assert.equal(accounts.getBalance(), 250);
        assert.throws(function() { accounts.withdraw(350) }, Error);
    })
});

describe("toString", function() {
    it("string representation of a Saving account", function() {
        let accounts = new SavingsAccount(1, 0.75);
        assert.equal(accounts.toString(), "Savings Account " + accounts.getNumber() + ": balance " + accounts.getBalance() + `: interest ${accounts.getInterest()}`);
    })
});
describe("Get Interest", function() {
    it("returns the interest of a saving account", function() {
        let saving_account = new SavingsAccount(1);
        saving_account.setInterest(0.75);
        assert.equal(saving_account.getInterest(), 0.75);
    });
});
describe("toString", function() {
    it("string representation of an account", function() {
        let accounts = new Account(01);
        assert.equal(accounts.toString(), "Account " + accounts.getNumber() + ": balance " + accounts.getBalance());
    })
});

describe("Adding Interest", function() {
    it("Displays the interest of a Saving Accounts", function() {
        let saving_account = new SavingsAccount(1, 15);
        saving_account.deposit(250);
        saving_account.addInterest();
        assert.equal(saving_account.getBalance(), 287.5);
    });
});

describe("Withdrawing Money", function() {
    it("Withdraws Money from a Checking Account", function() {
        let checking_accounts = new CheckingAccount(1, 250);
        checking_accounts.deposit(250);
        checking_accounts.withdraw(50);
        assert.equal(checking_accounts.getBalance(), 200);
    });
});

describe("Withdrawing Money Below Balance", function() {
    it("withdraw money from a checking account below balance", function() {
        let checking_accounts = new CheckingAccount(1, 200);
        checking_accounts.deposit(200);
        checking_accounts.withdraw(250);
        assert.equal(checking_accounts.getBalance(), -50);
        assert.throws(function() { withdraw(200) }, Error);

    });
});

describe("toString", function() {
    it("String representation of a Checking Account", function() {
        let accounts = new CheckingAccount(2, 200);
        assert.equal(accounts.toString(), "Account " + accounts.getNumber() + ": balance " + accounts.getBalance() + `overdraft: ${accounts.getOverdraft()}`);
    })
});


/****************************** Bank ********************************/

describe("Adding Account", function() {
    it("Creates account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addAccount(), 1);
        assert.equal(bank.addAccount(), 2);
        assert.equal(bank.accounts.length, 2);
    })
});


describe("Add Saving Account", function() {
    it("adds saving account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addSavingsAccount(100));
        assert.equal(bank.addSavingsAccount(200));
         assert.equal(bank.accounts.length, 2);
    })
});

describe("addCheckingAccount", function() {
    it("adds checking account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addCheckingAccount(10), 1);
        assert.equal(bank.addCheckingAccount(10), 2);
         assert.equal(bank.accounts.length, 2);

    })
});

describe("Close Account", function() {
    it("Remove an account from array", function() {
        let bank = new Bank();
        bank.addCheckingAccount(100);
        bank.addCheckingAccount(200);
        bank.addCheckingAccount(300);
        bank.closeAccount(bank.accounts[0].getNumber());
        assert.equal(bank.accounts.length, 2);
        bank.closeAccount(bank.accounts[0].getNumber());
        assert.equal(bank.accounts.length, 1);
    })
});

describe("Accounts Report", function() {
    it("Returns a String with each account on its own line", function() {
        let bank = new Bank();
        bank.addAccount();
        assert.equal(bank.accountReport(), 'Account 10: balance 0\n');
    })
});

describe("End of Month", function() {
    it("Return empty endOfMonth report for account", function() {
        let accounts = new Account(15);
        assert.equal(accounts.endOfMonth(), '');
    })
});

describe("End of Month", function() {
    it("Return formatted endOfMonth report for saving account", function() {
        let accounts = new SavingsAccount(1, 15);
        accounts.deposit(250);
        assert.equal(accounts.endOfMonth(), 'Interest added SavingsAccount 1: balance: 287.5 interest: 37.5');
    })
});

describe("End of Month", function() {
    it("Return formatted endOfMonth report for checking account", function() {
        let accounts = new CheckingAccount(1, 100);
        accounts.deposit(50);
        accounts.withdraw(100);
        assert.equal(accounts.endOfMonth(), 'Warning, low balance CheckingAccount 1: balance: -50 overdraft limit: 100');
    })
});