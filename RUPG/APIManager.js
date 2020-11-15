class APIManager {
    constructor() {
        this.data = {}
    }
    updateData(data) {
        this.data.pp = data.picture.large
        this.data.fname = data.name.first,
        this.data.lname = data.name.last,
        this.data.city = data.location.city,
        this.data.country = data.location.country
    }
    qouting(data){
        this.data.quote = data.quote
    }
    poke(pokemon){
        this.data.pname = pokemon.name
        this.data.pokepic = pokemon.sprites.front_shiny
    }
    meat(yummy){
        this.data.food = yummy
    }
}