interface Account {
    readonly type?: 'credit' | 'debit';
    balance: number
    owner: {
        name: string
        lastName: string
    }
}

class DebitAccount implements Account {
    readonly type: "debit"
    owner: { name: string; lastName: string }
    balance: number

    constructor(account: Account) {
        this.owner = account.owner;
        this.balance = account.balance;
    }

    upBalance(value: number): void {
        this.balance += value;
    }

    downBalance(value: number): void {
        if (value > this.balance) {
            throw new Error('Not enough money!');
        }
        this.balance -= value;
    }

    getBalance(): number {
        return this.balance;
    }
}

class CreditAccount implements Account {
    readonly type: "credit"
    owner: { name: string; lastName: string }
    balance: number

    constructor(account: Account) {
        this.owner = account.owner;
        this.balance = account.balance;
    }

    upBalance(value: number): void {
        this.balance += value;
    }

    downBalance(value: number): void {
        this.balance -= value;
    }

    getBalance(): number {
        return this.balance;
    }

    getCreditValue(): number {
        return this.balance >= 0 ? 0 : -this.balance
    }
}

const balance1 = new DebitAccount({
    balance: 0,
    owner: {
        name: 'John',
        lastName: 'Smith',
    },
})

const balance2 = new CreditAccount({
    balance: 0,
    owner: {
        name: 'John',
        lastName: 'Smith',
    },
})

balance1.upBalance(1000);
balance1.downBalance(200);
console.log(balance1.getBalance());

balance2.downBalance(100);
balance2.downBalance(500);
balance2.upBalance(600);
console.log(balance2.getBalance());