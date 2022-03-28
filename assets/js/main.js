// creare colonne che avranno i seguenti passaggi multipili di 3 avranno come nome fizz per i multipli di 5 buzz per i numeri sia di 3 che di 5 avranno fizzbuzz
// il tutto sara messo tramite javascrip
// iniziare con for e dare una costante

//indicare in una costante il container e assegnare l'id riga e fare un console log per vedere se prende la stringa richiesta
const container = document.getElementById('rigaId')
console.log(container)


//inizio calcoli 
alert('⚙️ sto calcolando ⚙️')

for(let i = 1; i <= 100; i++){
    
    if ( i % 3 == 0 && i % 5 ==0){
        console.log('FizzBuzz')
        container.innerHTML += `<div class="p-2 m-2 col-2 colonne d-flex align-items-center fw-bold justify-content-center bg-danger">FizzBuzz</div>`
    }
    else if( i % 3 == 0){
        console.log('Fizz')
        container.innerHTML += `<div class="p-2 m-2 col-2 colonne d-flex align-items-center fw-bold justify-content-center bg-success">Fizz</div>`
    }
    else if( i % 5 == 0){
        console.log('Buzz')
        container.innerHTML += `<div class="p-2 m-2 col-2 colonne d-flex align-items-center fw-bold justify-content-center bg-warning">Buzz</div>`
    }
    else{
        console.log(i)
        container.innerHTML += `<div class="p-2 m-2 col-2 colonne d-flex align-items-center fw-bold justify-content-center fs-3">${i}</div>`
    }

   

}