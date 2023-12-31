(()=>{

function getMenu(){
 
this.ClickOne = function(){

this.wrapNavigations = document.querySelector('.wrap-Navigations');
this.myhabilities = document.querySelector('.myHablities');
this.headingSkill = document.querySelector('.heading-skills');
this.Progressbar  = document.querySelector('.progress-bar');
this.LocationMe   = document.querySelector('.Location-Me');
this.getxPx       = document.querySelector('.x-px');

this.myhabilities.classList.add('d-none2');
this.wrapNavigations.classList.add('d-none2');
this.headingSkill.classList.add('d-none2');
this.Progressbar.classList.add('d-none2');
this.LocationMe.classList.add('d-none2');
this.getxPx.classList.add('d-none2');
 
document.addEventListener('click', (e) => {
let el = e.target;

if(el.classList.contains('x-px')){
this.myhabilities.classList.add('d-none2');
this.wrapNavigations.classList.add('d-none2');
this.headingSkill.classList.add('d-none2');
this.Progressbar.classList.add('d-none2');
this.LocationMe.classList.add('d-none2');  
this.getxPx.classList.add('d-none2'); 
}

if(el.classList.contains('one')){

this.wrapNavigations.classList.remove('d-none2');
this.headingSkill.classList.remove('d-none2');
this.Progressbar.classList.remove('d-none2');
this.LocationMe.classList.remove('d-none2');
this.getxPx.classList.remove('d-none2');
this.myhabilities.classList.add('d-none2');
}

if(el.classList.contains('two')){

this.wrapNavigations.classList.add('d-none2');
this.headingSkill.classList.add('d-none2');
this.Progressbar.classList.add('d-none2');
this.LocationMe.classList.add('d-none2');  
this.myhabilities.classList.remove('d-none2');
this.getxPx.classList.remove('d-none2');
}

})

}    

}    

const instancia = new getMenu();
instancia.ClickOne();
})();

