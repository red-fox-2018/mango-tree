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

    addPlayer(obj) {
        obj.currentClub = this.name;
        this.players.push(obj)
    }

    buyPlayer(player, club) {
        let playerAvailable = [];
        if (club) {
            club.players.forEach(dataPlayerClub => {
                playerAvailable.push(dataPlayerClub.playerName);
            })
        }

        if (!club && this.budgetTransfer >= player.transferFee) {
            this.budgetTransfer -= player.transferFee;
            player.currentClub = this.name;
            this.players.push(player);
        } else if (this.budgetTransfer >= player.transferFee && playerAvailable.includes(player.playerName)) {
            this.budgetTransfer -= player.transferFee;
            this.players.push(player);
            player.currentClub = this.name;
            club.budgetTransfer += player.transferFee;
            let updatePlayers = [];

            club.players.forEach(dataPlayer => {
                if (dataPlayer.playerName !== player.playerName) {
                    updatePlayers.push(dataPlayer);
                }
            });

            club.players = updatePlayers;
        } else if (this.budgetTransfer < player.transferFee) {
            console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for $${Math.abs(this.budgetTransfer - player.transferFee)} to buy this player`)
        } else {
            console.log(`There is no Player with name ${player.playerName} in ${club.name}`)
        }
    }
}

class RealMadrid extends Club {
    constructor() {
        super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000, []);
    }
}

class Barcelona extends Club {
    constructor() {
        super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000, []);
    }
}

class Liverpool extends Club {
    constructor() {
        super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000, []);
    }
}

class Arsenal extends Club {
    constructor() {
        super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000, []);
    }
}

module.exports = {
    RealMadrid,
    Barcelona,
    Arsenal,
    Liverpool
};