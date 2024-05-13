
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



//Mail

//Chiedi all’utente la sua email:
   //1)Incomicio creando una lista email registrate;

   const registrati = [
    'v.lembo1396@gmail.com',
    'giggettaf@libero.it',
    'franchino-1@virgilio.it',
    'lellabella@gmail.com'
   ];

   //2)creo una stringa email dove l'utente può digitare l'email;

   const userEmail = prompt('Scrivi la tua eamil');

//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo:

   //se l'email utente è registrata nella lista, potrà giocare al gioco dei dadi sopra descritto e, uscirà stampato 'Gioca!':
   if(registrati.includes(userEmail)){
    console.log('Gioca!');
   }

   //se l'email utente  non è registrata nella lista, uscirà stampato 'Non Registrato!':
   else{
    console.log('Non Registrato!');
   }