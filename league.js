class League {

    constructor(country, ceo) {

        this.country = country
        this.ceo = ceo
        this.clubs = []
    }

    addClub(club) {

        this.clubs.push(club)
    }

    members () {
        
        let counter = 1
        console.log('List club in this League:');
        console.log(('========================'));
        
        for (let i = 0; i < this.clubs.length; i++) {
            
            console.log(counter +'. '+this.clubs[i].name+', '+this.clubs[i].stadium);
            counter++
        }
        
    }
}

class PremierLeague extends League{

    constructor() {

        super('United Kingdom','Richard Scudamore')
    }
}

class LaLiga extends League{

    constructor() {

        super('Spain','Javier Gomez')
    }
}

module.exports = {

    League:League,
    PremierLeague:PremierLeague,
    LaLiga:LaLiga
}