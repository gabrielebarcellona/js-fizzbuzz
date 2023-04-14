const elecontainer = document.querySelector('.container')


for (let i = 0 ; i <= 100 ; i++) {
console.log(i);
elecontainer.innerHTML = elecontainer.innerHTML + ` <div class="quadrato">${i}</div> `

if(i% 3 == 0){
elecontainer.innerHTML = elecontainer.innerHTML +  ` <div class="quadrato-rosso">${i}</div> `
}

}
