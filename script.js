const elecontainer = document.querySelector('.container')


for (let i = 0 ; i <= 100 ; i++) {
console.log(i);
elecontainer.innerHTML = elecontainer.innerHTML + ` <div class="quadrato">${i}</div> `

}
