(() => {

let img1 = document.querySelector('.img-new-design');
let img2 = document.querySelector('.img-new-design2');
let img3 = document.querySelector('.img-new-design3');
let img4 = document.querySelector('.img-new-design4');

let back = document.querySelector('.back')
let back2 = document.querySelector('.back2')
let back3 = document.querySelector('.back3')
let back4 = document.querySelector('.back4')
class imgLinearBackground{

static getImgRight(){

const arrowRight = document.querySelector('.right-arrow');
const arrowLeft = document.querySelector('.left-arrow');
let Zero = 0


arrowRight.addEventListener('click', (e) => {

e.preventDefault();

    
    setTimeout(() => {
    
    Zero++
    if(Zero === 1){
    img2.classList.remove('d-none');
    img1.classList.add('d-none');
    img3.classList.add('d-none');
    img4.classList.add('d-none');

    back2.classList.remove('d-none');
    back.classList.add('d-none');
    back3.classList.add('d-none');
    back4.classList.add('d-none');
    }else if(Zero === 2 ){
    back3.classList.remove('d-none');
    back2.classList.add('d-none');
    back.classList.add('d-none')
    back4.classList.add('d-none')

    img3.classList.remove('d-none');
    img2.classList.add('d-none');
    img1.classList.add('d-none');
    img4.classList.add('d-none');
    }else if(Zero === 3){
    back4.classList.remove('d-none');
    back.classList.add('d-none');
    back2.classList.add('d-none');
    back3.classList.add('d-none');
    
    img4.classList.remove('d-none');
    img3.classList.add('d-none');
    img2.classList.add('d-none');
    img1.classList.add('d-none');
    }else{
    back.classList.remove('d-none');
    back2.classList.add('d-none')   
    back3.classList.add('d-none')   
    back4.classList.add('d-none')   

    img1.classList.remove('d-none');
    img2.classList.add('d-none');
    img3.classList.add('d-none');
    img4.classList.add('d-none');
    
    Zero = 0;
    }
    
    },0);

});

arrowLeft.addEventListener('click', () => {

    setTimeout(() => {
    Zero--
    if(Zero === 0){

    back.classList.remove('d-none')
    back2.classList.add('d-none')
    back3.classList.add('d-none')
    back4.classList.add('d-none')

    img1.classList.remove('d-none')
    img2.classList.add('d-none')
    img3.classList.add('d-none')
    img4.classList.add('d-none')

    }else if(Zero === 1){

    back2.classList.remove('d-none');
    back3.classList.add('d-none');
    back4.classList.add('d-none');
    back.classList.add('d-none');

    img2.classList.remove('d-none');
    img3.classList.add('d-none');
    img4.classList.add('d-none');
    img1.classList.add('d-none');

    }else if (Zero === 2){

    back3.classList.remove('d-none');
    back2.classList.add('d-none');
    back4.classList.add('d-none');
    back.classList.add('d-none');

    img3.classList.remove('d-none');
    img2.classList.add('d-none');
    img4.classList.add('d-none');
    img1.classList.add('d-none');

    }else{
    Zero = 3;
    back4.classList.remove('d-none');
    back3.classList.add('d-none');
    back2.classList.add('d-none');
    back.classList.add('d-none');

    img4.classList.remove('d-none');
    img3.classList.add('d-none');
    img2.classList.add('d-none');
    img1.classList.add('d-none');

    }

    },0)    
    
    })
}


static mouse (){

const getThis = document.querySelector('.getThis');
const getThis2 = document.querySelector('.getThis2');
const getThis3 = document.querySelector('.getThis3')

back.addEventListener('mouseover', () => {

getThis.classList.add('content-paragraph');
getThis.classList.remove('d-none');
})  

back2.addEventListener('mouseover', () => {

getThis2.classList.add('content-paragraph1');   
getThis2.classList.remove('d-none')    
})


back4.addEventListener('mouseover', () => {

getThis3.classList.add('content-paragraph2');
getThis3.classList.remove('d-none')
})

}}

const newInstancia = new imgLinearBackground();

imgLinearBackground.getImgRight();
imgLinearBackground.mouse();

})();