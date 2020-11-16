class Renderer {
    renderPerson(person){
        $(".user-container").empty()
        const pp = person.data.pp
        const fname = person.data.fname
        const lname = person.data.lname
        const city = person.data.city
        const country = person.data.country
        $(".user-container").append(`<img id='profile-pic' src=${pp}>
        <span class=user-info> ${fname} ${lname} <br> ${city} ${country} </span>`)
    }
    renderPeople(people){
        $(".friends-container").empty()
        $(".friends-container").append("<br>")
        for(let p of people){
            $(".friends-container").append(`<ul>${p.fname} ${p.lname}</ul><br>`)
        }
    }
    renderQuoute(quote){
        $(".quote-container").empty()
        $(".quote-container").append(`Favorite quote:<br> <p>${quote}</p>- Kanye East`)
    }
    renderPokemon(pname,pokepic){
        $(".pokemon-container").empty()
        $(".pokemon-container").append(`<img id='pokemon-image' src=${pokepic}>
        <span id='pokemon-text'>Favorite Pokemon: ${pname}<span>`)
    }
    renderMeat(meatArr){
        $(".meat-container").empty()
        $(".meat-container").append("<p>About Me:</p>")
        for(let m in meatArr){
            $(".meat-container").append(`<h5 class='meat-text'>${meatArr[m]}</h5>`)
        }
    }
}