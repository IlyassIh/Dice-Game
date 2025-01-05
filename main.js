


let change1 = document.querySelector('.change1');
let change2 = document.querySelector('.change2');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');

let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');

let img1 = document.querySelector('.img1');


let img2 = document.querySelector('.img2');

let go = document.querySelector('.go');

let win = document.querySelector('.win');

go.addEventListener('click', ()=> {

    let randomNum1 = (Math.floor(Math.random() * 6) + 1);
    let randomImg1 = "dice" + randomNum1+ ".png";
    let imgSrc1= "./images/" + randomImg1;

    let randomNum2 = (Math.floor(Math.random() * 6) + 1);
    let randomImg2 = "dice" + randomNum2 + ".png";
    let imgSrc2= "./images/" + randomImg2;

    img1.setAttribute('src', imgSrc1);
    img2.setAttribute('src', imgSrc2);

    console.log("clicked")

    if (randomNum1 > randomNum2) {
        win.innerHTML = p1.innerHTML + " Win";
    }
    
    else if (randomNum1 < randomNum2) {
        win.innerHTML = `${p2.innerHTML} win`;
    }
    else {
        win.innerHTML = 'Draw';
    };
});

change1.addEventListener('click', () => {
    if (inp1.value == ""){
        p1.innerHTML = "Player One";
    }
    else {

        p1.innerHTML = inp1.value;
    }
});

change2.addEventListener('click', () => {

    if (inp2.value == "") {
        p2.innerHTML = "Player Two";
    }
    else {
        p2.innerHTML = inp2.value;
    }
});





