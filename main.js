/**
 * ICS4U - Mr. Brash
 *  
 * 2.8 - Inheritance & Super! 🦸🏻
 * 
 * Read the README.md file (right-click it and select Open Preview)
 * 
 * Author: Kate Boyd
 */

'use strict';

// The lib.round() function is available
const lib = require("./library.js");

class BankAccount{
    nickname = "My Account"
    #type = "Account"
    #balance = 0.0

    constructor(type, nickname, balance){
        this.#type = type;
        this.nickname = nickname;
        this.#balance = balance;
    }

    get type() { return this.#type }
    get balance() { return this.#balance }

    debit(amt){
        if(amt > 0 && this.#balance - amt >= 0){
            lib.round(this.#balance -= amt, 2);
            return true;
        }
        return false;
    }

    credit(amt){
        if (amt > 0){
            lib.round(this.#balance -= amt, 2);
            return true;
        }
        return false;
    }
}


class SavingsAcount extends BankAccount{
    #interest_rate = 0.03;

    constructor(interest_rate){
        nickname = "Basic Savings";
        type = "Savings Account";
        this.#interest_rate = interest_rate;
    }

    get interest_rate() { return this.#interest_rate }
    //how do i set 
}