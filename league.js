"use strict"

class League {
    constructor(country, ceo, clubs) {
        this.country = country;
        this.ceo = ceo;
        this.clubs = clubs;
    }
}

class PremierLeague extends League {
    constructor() {
        super('United Kingdom', 'Richard Scudamore', []);
    }

    addClub(obj) {
        this.clubs.push(obj);
    }

    members() {
        console.log('List club in this League:')
        this.clubs.forEach((club, i) => {
            console.log(`${i + 1}. ${club.name}, ${club.stadium}`)
        });
    }
}

class LaLiga extends League {
    constructor() {
        super('Spain', 'Javier Gomez', []);
    }

    addClub(obj) {
        this.clubs.push(obj);
    }

    members() {
        console.log('List club in this League:')
        this.clubs.forEach((club, i) => {
            console.log(`${i + 1}. ${club.name}, ${club.stadium}`)
        });
    }
}

module.exports = {
    PremierLeague,
    LaLiga
};