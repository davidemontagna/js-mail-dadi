const indirizziMail = [];   //dichiarazione variabile array

indirizziMail.push("davidemontagna@gmail.com");  //Inserimento stringhe nell'array
indirizziMail.push("indirizzo@hotmail.it");
indirizziMail.push("indirizzomail@tiscali.it");
indirizziMail.push("montagna-d@gmail.com");
indirizziMail.push("emailaddress@gmail.com");
indirizziMail.push("boolean@gmail.com");

const search = prompt("Inserisci il tuo indirizzo email:");  //richiesta all'utente tramite prompt
let control = false;  //variabile false

for(let index = 0; index < indirizziMail.length; index++){
    console.log(indirizziMail[index]);

    if(search == indirizziMail[index]){  //ricerca indirizzo mail uguale a quello inserito dall'utente

        control = true;  //indirizzo trovato e cambio variabile in true
    }
    
}

if(control){
    document.writeln("Indirizzo email trovato, è possibile effettuare l'accesso:")
}else{
    document.writeln("Indirizzo email non trovato.")
}