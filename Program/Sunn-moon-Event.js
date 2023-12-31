(() => {

let number = 1;    


function TransformColor(){
const Sunn  = document.querySelector('.sun-moon');
const Sunn2 = document.querySelector('.sun-moon2')
const App   = document.querySelector('.App');
const Ball  = document.querySelector('.ball');
const Form  = document.querySelector(".Form-For-Works");
const one   = document.querySelector('.one-pice')
const goldStar = document.querySelector('.one');
const goldStar2 = document.querySelector('.two');
const goldStar3 = document.querySelector('.three');

Sunn.addEventListener('click', () => {
if(number === 0){
Sunn.setAttribute('class', 'bx bx-sun');
Sunn.classList.add('sun-moon');
Sunn2.setAttribute('class', 'bx bx-sun');
Sunn2.classList.add('sun-moon2');
App.classList.remove('Black');
Ball.classList.remove('Black');
Form.classList.remove('Black');
goldStar.classList.remove('Black');
goldStar2.classList.remove('Black');
goldStar3.classList.remove('Black');
one.src = 'Img/one-piece.png';
number =1;
}else{
number = 0; 
Sunn.setAttribute('class', 'bx bx-moon');
Sunn.classList.add('sun-moon');
Sunn2.setAttribute('class', 'bx bx-moon');
Sunn2.classList.add('sun-moon2');
goldStar.classList.toggle('Black');
goldStar2.classList.toggle('Black');
goldStar3.classList.toggle('Black');
App.classList.toggle('Black');
Ball.classList.toggle('Black');
Form.classList.toggle('Black');
one.src = 'Img/one-piece-two.png'
}   
});

Sunn2.addEventListener('click', () => {
if(number === 0){
Sunn2.setAttribute('class', 'bx bx-sun');
Sunn2.classList.add('sun-moon2');
Sunn.setAttribute('class', 'bx bx-sun');
Sunn.classList.add('sun-moon');
App.classList.remove('Black');
Ball.classList.remove('Black');
Form.classList.remove('Black');
one.src = 'Img/one-piece.png';
number = 1;    
}else{
Sunn2.setAttribute('class', 'bx bx-moon');
Sunn2.classList.add('sun-moon2');
Sunn.setAttribute('class', 'bx bx-moon');
Sunn.classList.add('sun-moon');    
App.classList.toggle('Black');
Ball.classList.toggle('Black');
Form.classList.toggle('Black');    
one.src = 'Img/one-piece-two.png';
number = 0;
}    
})

}

TransformColor();
})();