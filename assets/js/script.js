//console.log('hello');

/*
Campo minato
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//Metto in variabile il bottone
const playButton = document.querySelector('.generate');


//Aggiungo eventlistener al bottone per farlo funzionare
playButton.addEventListener('click', function () {
    playButton.classList.toggle('d-none')

    //Creo la griglia 10x10
    for (let i = 1; i <= 100; i++) {
        //creo il perimetro
        const createCell = document.createElement('div');
        //metto i numeri nelle celle
        createCell.append(i);
        //creo la cella
        createCell.className = 'cell';
        //collego il div al contenitore
        document.querySelector('.container').append(createCell);


        createCell.addEventListener('click', function () {
            //console.log('Type on cell');
            this.classList.toggle('bg-purple')
            console.log(i);
        })
    }
})
   

