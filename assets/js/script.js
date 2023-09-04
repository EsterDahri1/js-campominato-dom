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

//metto in variabile le opzioni e il select
const select = document.getElementById('difficulty');
const easyGame = document.getElementById('easy');
const normalGame = document.getElementById('normal');
const hardGame = document.getElementById('hard');
console.log(select, easyGame, normalGame, hardGame);

//Metto in variabile il bottone
const playButton = document.querySelector('.generate');

//metto condizione se scelgo questo allora genero diversa grandezza gioco
if (easyGame) {
    //Aggiungo eventlistener al bottone per farlo funzionare
    playButton.addEventListener('click', function () {


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
} else if (normalGame) {
    playButton.addEventListener('click', function () {


        //Creo la griglia 9x9
        for (let i = 1; i <= 81; i++) {
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
} else { //hardGame
    playButton.addEventListener('click', function () {


        //Creo la griglia 7x7
        for (let i = 1; i <= 49; i++) {
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
}





   



