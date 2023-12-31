function Buttons(){
this.Button1       = document.querySelector('.Fire-button');
this.Button2       = document.querySelector('.Fire-2-button');
this.ProgressDaddy = document.querySelector('.progress-bar');
this.remove        = document.querySelectorAll('.Remove');
}

Buttons.prototype.MapButton = function(){

this.Button1.addEventListener('click', () => {

this.Animation = document.querySelector('.img-new-design');

this.Animation.classList.add('Animation');
this.Animation.classList.add('AnimationSlowDown');

this.CreateBlockDark = document.querySelector('.Fire');
this.CreateBlockDark.classList.add('T1');
this.CreateBlockDark.classList.remove('T2');
this.Button1.classList.add('Disabled');
this.Button2.disabled = 'disabled';
})    
    
}

Buttons.prototype.ArrowRight = function(){

this.Arrow = document.querySelector('.Arrow-right')
this.Arrow.addEventListener('click', () => {
this.CreateBlockDark.classList.add('T2');
this.CreateBlockDark.classList.remove('T1');
this.Button1.classList.remove('Disabled');
this.Button2.disabled = '';
})
}

Buttons.prototype.MapButtonTwo = function(){

this.repeatCreateBlockDark2 = document.querySelector('.Fire-2');

this.Button2.addEventListener('click', () => {

this.repeatCreateBlockDark2.classList.add('T');
this.repeatCreateBlockDark2.classList.remove('T3');
this.Button2.classList.add('Disabled');
this.Button1.disabled = 'disabled';
this.ProgressDaddy.classList.add('Progress-Animation');

})

}

Buttons.prototype.ArrowLeft = function () {

this.Arrow2 = document.querySelector('.Arrow-left');
this.Arrow2.addEventListener('click', () => {
this.Button2.classList.remove('Disabled');
this.repeatCreateBlockDark2.classList.add('T3');
this.Button1.disabled = '';


});


}

Buttons.prototype.Remove = function(){
this.remove.forEach((valor) => {
valor.classList.add('RemoveContent');
})
}

const AnimationButton = new Buttons();

AnimationButton.MapButton();
AnimationButton.ArrowRight();

AnimationButton.MapButtonTwo();
AnimationButton.ArrowLeft();

AnimationButton.Remove();

