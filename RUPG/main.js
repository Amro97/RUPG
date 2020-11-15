const person = new APIManager()
const renderer = new Renderer()
let people = []

$('.container').on('click', '#load', function(){
    $.ajax({
        url: 'https://randomuser.me/api/?results=7',
        dataType: 'json',
        success: function(data) {
            person.updateData(data.results[0])
            for (let i = 1; i<7; i++){
                const fname = data.results[i].name.first
                const lname = data.results[i].name.last
                const newPerson = {fname, lname}
                people.push(newPerson)
            }
        }
    })
    $.ajax({
        url: 'https://api.kanye.rest',
        dataType: 'json',
        success: function(data){
            person.qouting(data)
        }
    })
    const rInt =  Math.floor(Math.random() * 894)
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${rInt}`,
        dataType: 'json',
        success: function(data){
            person.poke(data)
        }
    })
    $.ajax({
        url: 'https://baconipsum.com/api/?type=all-meat',
        dataType: 'json',
        success: function(data){
            person.meat(data)
        }
    })
})

$('.container').on('click', '#display', function(){
    renderer.renderPerson(person)
    renderer.renderPeople(people)
    renderer.renderQuoute(person.data.quote)
    renderer.renderPokemon(person.data.pname, person.data.pokepic)
    renderer.renderMeat(person.data.food)

    people.splice(0,people.length)
})

