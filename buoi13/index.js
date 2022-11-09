// 1. callback
// function logdelay(s = 1000) {
//     console.log('Delay ${s}ms')
// }

// setTimeout(logDelay, 1000);

// const result = calculate(100, 20, add);
// console.log(result);

// const btn = document.getElementById("dropdownMenuButton");

// btn.addEventListener("click",)

const responsePro = fetch(URL)

responsePro.then(res => {
    return res.json()
}).then(data => console.log(data)).catch(err => { console.log(err) })

function renderPokemon(list) {
    let pokemonHTML =""

    for (let i = 0; i< list.length; i++) {
        const { name, url } = list[i]
        pokemonHTML +=
        
    }
}