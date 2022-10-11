const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'
const input =  document.querySelector("#pesquisar")
const nameEl = document.querySelector('#name')
const img = document.querySelector('#pic')
const desc = document.querySelector('#desc')

async function pesquisar (){
    let name= input.value.toLowerCase()

    const res = await fetch(pokeApi+name)

    const data = await res.json()

    img.setAttribute('src',data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])

    nameEl.innerHTML = `<h4>${data.id} - ${data.name.charAt(0).toUpperCase()+data.name.slice(1)}</h4>`

    changeBgColor(data['types']['0']['type']['name'])

    input.value = ''

}


function changeBgColor(type) {
    switch (type) {
        case 'fire':
            document.body.style.backgroundColor = 'red'
            break
        case 'electric':
            document.body.style.backgroundColor = 'yellow'
            break   
        case 'water':
            document.body.style.backgroundColor = 'blue'
            break   
        case 'grass':
            document.body.style.backgroundColor = 'green'
            break  
        case 'ghost':
            document.body.style.backgroundColor = 'purple'
            break  
        case 'psychic':
            document.body.style.backgroundColor = 'pink'
            break      
            case 'ground':
                document.body.style.backgroundColor = 'brown'
                break            
    }
}