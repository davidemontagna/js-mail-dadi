alert("Lancia il tuo dado.");  //richiesta di lancio del dado

const dice1 = Math.floor(Math.random() * 6 + 1);  //creazione variabile del primo dado con valore random da 1 a 6

document.getElementById("box1").innerHTML = dice1;

alert("Fai lanciare il dado al pc.")  //nuova richiesta di lancio del dado

const dice2 = Math.floor(Math.random() * 6 + 1); //creazione variabile del secondo dado con valore random da 1 a 6

document.getElementById("box2").innerHTML = dice2;

if(dice1 > dice2){  //controllo se il dado 1 è maggiore del secondo

    document.getElementById("result").innerHTML = "CONGRATULAZIONI! HAI VINTO!";

}else if(dice1 < dice2){  //controllo se il dado 2 è maggiore del primo

    document.getElementById("result").innerHTML = "HA VINTO IL PC!"

}else{ //Altrimenti nessuno ha vinto

    document.getElementById("result").innerHTML = "NESSUNO DEI DUE HA VINTO."
}



