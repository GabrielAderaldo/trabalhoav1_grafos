
/// Representação computacional do grafo -> Lista de adjacencia
let grafo = {
    "A": ["B","E"],
    "B": ["A","C"],
    "C": ["B","G"],
    "D": [],
    "E": ["A","I"],
    "F": [],
    "G": ["C","K"], 
    "H": [],
    "I": ["E", "J"],
    "J": ["I","K","N"],
    "K": ["G","J","L"],
    "L": ["K"],
    "M": [],
    "N": ["J"],
    "O": [],
    "P": []
}

//Objetivo chegar do B -> L

function busca_largura(grafo,seed,whoFind){
    let list = [...grafo[seed]]
    let verify_list = []
    let listQ = []

    while(list.length > 0){
        let isWhoISeach = list.shift()
        listQ.push(isWhoISeach)
        if(verify_list.includes(isWhoISeach) || (isWhoISeach == whoFind)){
         if(isWhoISeach == whoFind){
            listQ.push(";")
         }
        }else{
            for(let i=0; i < grafo[isWhoISeach].length; i++){
                list.push(grafo[isWhoISeach][i])
            }
            verify_list.push(isWhoISeach) 
         }
        
    }
    console.log(listQ)
    return 404
}

console.log(busca_largura(grafo,"B","L")) // TRUE
// console.log(busca_largura(grafo,"E","L")) // TRUE
// console.log(busca_largura(grafo,"G","L")) // TRUE
// console.log(busca_largura(grafo,"N","L")) // TRUE 
// console.log(busca_largura(grafo,"B","H")) // FALSE
// console.log(busca_largura(grafo,"B","P")) // FALSE
// console.log(busca_largura(grafo,"B","O")) // FALSE
// console.log(busca_largura(grafo,"B","M")) // FALSE
// console.log(busca_largura(grafo,"B","F")) // FALSE
// console.log(busca_largura(grafo,"B","N")) // TRUE



