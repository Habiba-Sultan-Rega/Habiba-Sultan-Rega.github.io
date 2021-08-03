describe("Get Account Number", function() {
    it("gets account number of account", function() {
        let accounts = new Account(1);
        assert.equal(accounts.getNumber(), 1);
    })
});

describe("toString", function() {
    it("string representation of an account", function() {
        let accounts = new Account(1);
        assert.equal(accounts.toString(), "Account " + accounts.getNumber() + ": balance " + accounts.getBalance());
    })
});

describe("deposit", function() {
    it("deposits money and update balance from account", function() {
        let accounts = new Account(123);
        accounts.deposit(100);
        accounts.deposit(100);
        assert.equal(accounts.getBalance(), 200);
        assert.throws(() => accounts.deposit(-1), Error);
    })
});

describe("withdraw", function() {
    it("withdraw money and update balance from account", function() {
        let accounts = new Account(123);
        accounts.deposit(100);
        accounts.deposit(100);
        accounts.withdraw(50);
        assert.equal(accounts.getBalance(), 150);
        assert.throws(function() { accounts.withdraw(200) }, Error);
    })
});

describe("getInterest", function() {
    it("returns the interest of a saving account", function() {
        let acct = new SavingsAccount(123);
        acct.setInterest(10);
        assert.equal(acct.getInterest(), 10);
    });
});

describe("toString", function() {
    it("string representation of a Saving account", function() {
        let acc = new SavingsAccount(123, 10);
        assert.equal(acc.toString(), "Savings Account " + acc.getNumber() + ": balance " + acc.getBalance() + `: interest ${acc.getInterest()}`);
    })
});

describe("adding Interest", function() {
    it("returns the interest of a saving account", function() {
        let sacct = new SavingsAccount(123, 10);
        sacct.deposit(100);
        sacct.addInterest();
        assert.equal(sacct.getBalance(), 110);
    });
});

describe("withdra", function() {
    it("withdraw money from a checking account", function() {
        let sacct = new CheckingAccount(1, 100);
        sacct.deposit(100);
        sacct.withdraw(50);
        assert.equal(sacct.getBalance(), 50);
    });
});

describe("Withdrawing accounts", function() {
    it("withdraw money from a checking account below balance", function() {
        let sacct = new CheckingAccount(1, 100);
        sacct.deposit(100);
        sacct.withdraw(150);
        assert.equal(sacct.getBalance(), -50);
        assert.throws(function() { withdraw(100) }, Error);

    });
});

describe("toString", function() {
    it("string representation of a Checking account", function() {
        let account = new CheckingAccount(123, 100);
        assert.equal(account.toString(), "Account " + account.getNumber() + ": balance " + account.getBalance() + `overdraft: ${account.getOverdraft()}`);
    })
});

describe("adding Account", function() {
    it("adds account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addAccount(), 1);
        assert.equal(bank.addAccount(), 2);

    })
});

describe("adding Saving Accounts", function() {
    it("adds saving account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addSavingsAccount(10), 1);
        assert.equal(bank.addSavingsAccount(10), 2);

    })
});

describe("Add Checking Accounts", function() {
    it("adds checking account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addCheckingAccount(10), 1);
        assert.equal(bank.addCheckingAccount(10), 2);

    })
});

describe("Closing Accounts", function() {
    it("removed an account from list", function() {
        let bank = new Bank();
        bank.addCheckingAccount(10);
        bank.addCheckingAccount(10);
        bank.closeAccount(bank.accounts[0].getNumber());

        assert.equal(bank.accounts.length, 1);
        bank.closeAccount(10);

        assert.equal(bank.accounts.length, 1);
        bank.closeAccount(bank.accounts[0].getNumber());
        assert.equal(bank.accounts.length, 0);
    })
});

describe("Account Report", function() {
    it("returns a String with each account on its own line", function() {
        let bank = new Bank();
        bank.addAccount();
        assert.equal(bank.accountReport(), bank.accountReport());

    })
});


describe("End of Month", function() {
    it("return empty endOfMonth report for account", function() {
        let acc = new Account(10);
        assert.equal(acc.endOfMonth(), '');
    })
});

describe("End of Month", function() {
    it("return formatted endOfMonth report for saving account", function() {
        let acc = new SavingsAccount(1, 10);
        acc.deposit(100);
        assert.equal(acc.endOfMonth(), 'Interest added SavingsAccount 1: balance: 110 interest: 10');
    })
});

describe("End of Month", function() {
    it("return formatted endOfMonth report for checking account", function() {
        let acc = new CheckingAccount(1, 100);
        acc.deposit(50);
        acc.withdraw(100);
        assert.equal(acc.endOfMonth(), 'Warning, low balance CheckingAccount 1: balance: -50 overdraft limit: 100');
    })
});