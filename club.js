"use strict"

class Club {
    constructor(name, stadium, location, manager, budgetTransfer, players) {
        this.name = name;
        this.stadium = stadium;
        this.location = location;
        this.manager = manager;
        this.budgetTransfer = budgetTransfer;
        this.players = players;
    }
}

class RealMadrid extends Club {
    constructor() {
        super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000, []);
    }

    addPlayer(obj) {
        obj.currentClub = this.name;
        this.players.push(obj)
    }
}

class Barcelona extends Club {
    constructor() {
        super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000, []);
    }

    addPlayer(obj) {
        obj.currentClub = this.name;
        this.players.push(obj)
    }
}

class Liverpool extends Club {
    constructor() {
        super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000, []);
    }

    addPlayer(obj) {
        obj.currentClub = this.name;
        this.players.push(obj)
    }
}

class Arsenal extends Club {
    constructor() {
        super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000, []);
    }

    addPlayer(obj) {
        obj.currentClub = this.name;
        this.players.push(obj)
    }
}

module.exports = {
    RealMadrid,
    Barcelona,
    Arsenal,
    Liverpool
};