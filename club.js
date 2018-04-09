class Club {

    constructor(name, stadium, location, manager, budgetTransfer) {
        this.name = name
        this.stadium = stadium
        this.location = location
        this.manager = manager
        this.budgetTransfer = budgetTransfer
        this.players = []
    }

    addPlayer(player) {
        this.players.push(player)
        player.currentClub = this.name;
    }

    buyPlayer(player,club) {

        // console.log(player.transferFee);
        // console.log(this.budgetTransfer)
        
        if(player.currentClub !== null) {

            if(player.currentClub === club.name) {

                if(this.budgetTransfer >= player.transferFee) {

                    player.currentClub == this.name
                    this.players.push(player)
                    this.budgetTransfer -= player.transferFee

                    console.log(`You buy ${player.name} with transfer fee $ ${player.transferFee}, remaining budget: $ ${this.budgetTransfer}`)
                } else {

                    console.log(`Budget not sufficient to buy ${player.name}. Your club need extra money for $ ${player.transferFee -= this.budgetTransfer} to buy this player`)
                }

            } else {
    
                console.log(`There is no Player with name `)
            }
        }
    }
}

class RealMadrid extends Club{

    constructor(){
        
        super('Real Madrid F.C','Santiago Bernabeu','Madrid','Zinedine Zidane',10000000000)
    }
}

class Barcelona extends Club{

    constructor(){
        
        super('F.C Barcelona','Camp Nou','Barcelona','Ernesto Valverde',20000000)
    }
}

class Liverpool extends Club{

    constructor(){
        
        super('Liverpool F.C','Anfield','Liverpool','Jurgen Klopp',50000000)
    }
}

class Arsenal extends Club{

    constructor(){
        
        super('Arsenal F.C','Emirates Stadium','London','Arsene Wenger',35000000)
    }
}

module.exports = {

    Club : Club,
    RealMadrid : RealMadrid,
    Barcelona : Barcelona,
    Liverpool : Liverpool,
    Arsenal : Arsenal
}