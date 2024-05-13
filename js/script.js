
//Il giocatore gioca contro il computer.
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer:

for(i=1; i<=6; i++){
    const numeroUtente = Number.parseInt(prompt('Scrivi un numero da 1 a 6'), 10);
    const numeroIA = Math.floor(Math.random()*10)+1;

    //se il numero scelto dall'utente è maggiore del numero del computer, in console uscirà stampato 'Hai Vinto!':
    if(numeroUtente>numeroIA){
        console.log('Hai Vinto!');
    }

    //invece se il numero scelto dall'utente è minore o uguale rispetto al numero scelto dal computer, in console uscirà stampato 'Hai Perso Schiappa!':
    else if(numeroUtente<=numeroIA){
        console.log('Hai Perso Schiappa!');
    }
}