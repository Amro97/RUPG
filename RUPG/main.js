const person = new APIManager()
const renderer = new Renderer()

$('.container').on('click', '#load', function () {

    person.peopleAPI()
    person.qouteAPI()
    person.pokemonAPI()
    person.meatAPI()

})

$('.container').on('click', '#display', function () {

    renderer.renderPerson(person)
    renderer.renderPeople(person.data.people)
    renderer.renderQuoute(person.data.quote)
    renderer.renderPokemon(person.data.pname, person.data.pokepic)
    renderer.renderMeat(person.data.meat)
    person.data.people.splice(0, person.data.people.length)

})

