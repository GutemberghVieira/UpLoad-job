(() => {

document.addEventListener('DOMContentLoaded', () => {
new TypeIt('.Active', {
speed:300,
loop:true
}).type('HTML', {delay:1550}).delete(60).type('CSS', {delay:1550}).delete(25).type('JS', {delay:1550}).delete(27).go();
});

})();

(()=>{
let number =0;
class EventsHome{
    
constructor(tre){
this.theTruth = tre;
}

BoxLink(){

this.ContentHome = document.querySelector('.Content-home');
this.WorkHome    = document.querySelector('.Work-Home');
this.Project     = document.querySelector('.Project');
this.Proposals   = document.querySelector('.Proposals-container');
this.Curriculum  = document.querySelector('.close-Curriculum');
this.XClose      = document.querySelector('.X-close');

document.addEventListener('click', (e) => {
const el = e.target;

if(el.classList.contains('X-close')){
if('d-none' === 'd-none'){
this.WorkHome.classList.add('d-none'); 
this.ContentHome.classList.add('Content');
this.Project.classList.add('d-none');
this.Proposals.classList.add('d-none');
this.Curriculum.classList.add('d-none');
this.XClose.classList.add('d-none');
}
}

if(el.classList.contains('Home')){
this.ContentHome.classList.remove('Content');
this.ContentHome.classList.remove('d-none');
this.WorkHome.classList.remove('d-none');
this.Project.classList.add('d-none');
this.Proposals.classList.add('d-none');
this.Curriculum.classList.add('d-none');
this.XClose.classList.remove('d-none')
}

if(el.classList.contains('Projects')){
this.ContentHome.classList.remove('Content');
this.ContentHome.classList.remove('d-none');    
this.Curriculum.classList.add('d-none');
this.Project.classList.remove('d-none');   
this.WorkHome.classList.add('d-none');
this.Proposals.classList.add('d-none');
this.XClose.classList.remove('d-none')
}

if(el.classList.contains('Proposals')){
this.ContentHome.classList.remove('Content');
this.ContentHome.classList.remove('d-none');
this.WorkHome.classList.add('d-none');
this.Project.classList.add('d-none');
this.Curriculum.classList.add('d-none');
this.Proposals.classList.remove('d-none');   
this.XClose.classList.remove('d-none')
}

if(el.classList.contains('Curriculo')){
this.ContentHome.classList.remove('Content');
this.ContentHome.classList.remove('d-none');
this.Curriculum.classList.remove('d-none');
this.WorkHome.classList.add('d-none');
this.Project.classList.add('d-none');
this.Proposals.classList.add('d-none');
this.XClose.classList.remove('d-none')
}

})

}
}
    
const instanciaEventsHome = new EventsHome(true);
instanciaEventsHome.BoxLink();
})()

