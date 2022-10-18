const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'
const input =  document.querySelector("#pesquisar")
const nameEl = document.querySelector('#name')
const img = document.querySelector('#pic')
const desc = document.querySelector('#desc')
const next = document.querySelector('#btn-next')
let id = 1

async function pegar (valor){
    const res = await fetch(pokeApi+valor)
    const data = await res.json()

    img.setAttribute('src',data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])
    nameEl.innerHTML = `<h4>${data.id} - ${data.name.charAt(0).toUpperCase()+data.name.slice(1)}</h4>`
    changeBgColor(data['types']['0']['type']['name'])

    input.value = ''
    id = data.id
}

async function proximo() {
    await pegar(id+1)
}

async function anterior() {
    if(id > 1) {
        await pegar(id-1)
    }
}

async function pesquisar() {
    let name= input.value.toLowerCase()
    await pegar(name)
}

function changeBgColor(type) {
    switch (type) {
        case 'fire':
            document.body.style.backgroundColor = '#ff4500'
            break
        case 'electric':
            document.body.style.backgroundColor = '#fbd200'
            break   
        case 'water':
            document.body.style.backgroundColor = '#3393dd'
            break   
        case 'grass':
            document.body.style.backgroundColor = '#38bf4b'
            break  
        case 'ghost':
            document.body.style.backgroundColor = '#4b6ab3'
            break  
        case 'psychic':
            document.body.style.backgroundColor = '#ff6675'
            break      
        case 'ground':
            document.body.style.backgroundColor = '#e97333'
            break     
        case 'poison':
            document.body.style.backgroundColor = '#b567ce'
            break 
        case 'fighting':
            document.body.style.backgroundColor = '#d73f16'
            break 
        case 'normal':
            document.body.style.backgroundColor = '#d3d3ffff'
            break 
        case 'dragon':
            document.body.style.backgroundColor = '#0070ca'
            break 
        case 'bug':
            document.body.style.backgroundColor = '#83c300'
            break 
    }
    
}

