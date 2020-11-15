class APIManager {
    constructor() {
        this.data = {}
    }
    peopleAPI() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (data) => {
                let people = []
                for (let i = 1; i < 7; i++) {
                    const fname = data.results[i].name.first
                    const lname = data.results[i].name.last
                    const newPerson = { fname, lname }
                    people.push(newPerson)
                }
                this.data.pp = data.results[0].picture.large
                this.data.fname = data.results[0].name.first
                this.data.lname = data.results[0].name.last
                this.data.city = data.results[0].location.city
                this.data.country = data.results[0].location.country
                this.data.people = people
            }
        })
    }
    qouteAPI() {
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: (data) => {
                this.data.quote = data.quote
            }
        })
    }
    pokemonAPI() {
        const rInt = Math.floor(Math.random() * 894)
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${rInt}`,
            dataType: 'json',
            success: (data) => {
                this.data.pname = data.name
                this.data.pokepic = data.sprites.front_shiny
            }
        })
    }
    meatAPI() {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat',
            dataType: 'json',
            success: (data) => {
                this.data.meat = data
            }
        })
    }
}