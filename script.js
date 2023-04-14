const elecontainer = document.querySelector('.container')


for (let i = 1 ; i <= 100 ; i++) {
    console.log(i);

     if(i% 15 == 0){
        elecontainer.innerHTML = elecontainer.innerHTML +  ` <div class="quadrato-rosso">fizzbuzz</div> `
    }


     else if(i% 3 == 0){
         elecontainer.innerHTML = elecontainer.innerHTML +  ` <div class="quadrato-verde">fizz</div> `
        }

    else if(i% 5 == 0){
        elecontainer.innerHTML = elecontainer.innerHTML +  ' <div class="quadrato-giallo">buzz</div> '
    }
    

    else {
        elecontainer.innerHTML = elecontainer.innerHTML +  ' <div class="quadrato">' + i + '</div> '
    }
}




