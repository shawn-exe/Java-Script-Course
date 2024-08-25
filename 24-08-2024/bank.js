class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
            } else {
                console.log('Insufficient funds.');
            }
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount('123456', 500);
const account2 = new BankAccount('789012', 1000);

account1.deposit(200);  
account2.deposit(500); 

account1.withdraw(100);  
account2.withdraw(1600); 
account2.withdraw(300); 

console.log(`Account 1 balanc: ${account1.getBalance()}`);
console.log(`Acountt 2 balance: ${account2.getBalance()}`);
