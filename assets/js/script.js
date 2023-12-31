//console.log('hello');

/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/
const submit = document.querySelector('button');

//creo delle array vuote per mettere i click 
let userClicks = [];

submit.addEventListener('click', function(){

    const grid = document.querySelector('.grid');
    let width = 10;
    let bombAmount = 16;
    let squares = [];

    //create board
    function createBoard() {
        //add random bombs
        const bombArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width * width - bombAmount).fill('valid');
        //console.log(bombArray, emptyArray);
        const gameArray = emptyArray.concat(bombArray);
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5);
        console.log(shuffledArray);

        for (let i = 1; i <= width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', 1);
            square.classList.add(shuffledArray[i]);
            square.append(i);
            grid.append(square);
            squares.push(square);

            square.addEventListener('click', function () {
                //console.log('ho cliccato');
                this.classList.toggle('bg-purple');
                console.log(i);
                if(square.classList.contains('bg-purple')){
                    userClicks.push(i);
                    console.log(userClicks);
                };

                let total = 0;
                userClicks.forEach(click => {
                    total += click
                })
                console.log(total);

                if (square.classList.contains('bomb')) {
                    //console.log('Game over');
                    square.classList.add('bg-red');
                    const newMsg = document.createElement('span');
                    const contentMsg = document.createTextNode("Game over!");
                    newMsg.appendChild(contentMsg);
                    const currentDiv = document.querySelector('.container');
                    document.body.insertBefore(newMsg, currentDiv);
                    grid.innerHTML += `<h1>Hai vinto! Il tuo punteggio è:  ${total}</h1>`
                };
            })
        }
    }

    const gameBoard = createBoard()
});