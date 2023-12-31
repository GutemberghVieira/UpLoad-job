(() => {


function Negociar(){
this.Form            = document.querySelector('.Formularios');    
this.Button          = document.querySelector('.Button-negociar');
this.FormWorks       = document.querySelector('.sleeping')
this.X               = document.querySelector('.X-close2');
this.BoxInput        = document.querySelector('.node-String');
this.BoxInput2       = document.querySelector('.node-String1');
this.Names           = document.querySelector('.Name-color');
this.Names2          = document.querySelector('.Name-color2');
this.Validation      = document.querySelector('.orInvalid');
this.ValidationTwo   = document.querySelector('.orValid');
this.Icons           = document.querySelector('.icons');
this.favicon         = document.querySelector('.favicon');
this.favicon2        = document.querySelector('.favicon2');
this.Icons2          = document.querySelector('.icons2');
this.TextPreencher   = document.querySelector('.Preencher');
this.TextPreencher3  = document.querySelector('.Preencher3');
this.ButtonSend      = document.querySelector('.Send');
}

Negociar.prototype.Transform = function (){
this.FormWorks.style.display = 'none';

this.Button.addEventListener('click', () => {
this.FormWorks.style.display = ''; 
});

this.X.addEventListener('click', () => {
this.FormWorks.style.display = 'none';
}); 

}

Negociar.prototype.FocusInput = function(){
this.FormParent = this.BoxInput.parentElement;

this.BoxInput.addEventListener('keypress',() => {
this.regexString = /[^A-zá-ú]{1}/gm // //^ Start Line;
this.InputProtect = this.BoxInput.value;

this.ValuePrimitive = this.InputProtect.match(this.regexString);

if(this.ValuePrimitive || !this.BoxInput.value){
this.Names.classList.add('InvalidName');
this.Names.classList.remove('ValidName');
this.BoxInput.classList.add('Invalid');
this.BoxInput.classList.remove('Valid');
this.TextPreencher.innerHTML = 'Nome Invalido';
this.TextPreencher.classList.add('Preencher');
this.TextPreencher.classList.remove('Preencher2');
this.ValidationTwo.classList.add('oh-No');
this.favicon.setAttribute('class', 'bx bx-x');
this.Icons.classList.add('No');
this.Icons.classList.remove('Yea');
}else{
this.Names.classList.add('ValidName');  
this.BoxInput.classList.add('Valid');
this.TextPreencher.innerHTML = 'Nome Valido';
this.TextPreencher.classList.add('Preencher2');
this.TextPreencher.classList.remove('Preencher');
this.ValidationTwo.classList.add('oh-Yea');
this.ValidationTwo.classList.remove('oh-No');
this.favicon.setAttribute('class', 'bx bx-check');
this.Icons.classList.add('Yea');
this.Icons.classList.remove('No');
}

})

this.BoxInput2.addEventListener('keypress', () =>{

this.validateRegex = /^\w+([-+. 0-9']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
    
if(this.validateRegex.test(this.BoxInput2.value)){
this.Names2.classList.add('ValidName');
this.BoxInput2.classList.add('Valid');
this.BoxInput2.classList.remove('Invalid');
this.TextPreencher3.innerHTML = 'Email Valido';
this.TextPreencher3.classList.add('Preencher4');
this.TextPreencher3.classList.remove('Preencher3');
this.Validation.classList.add('oh-Yea');
this.Validation.classList.remove('oh-No');
this.favicon2.setAttribute('class', 'bx bx-check');
this.Icons2.classList.add('Yea');
this.Icons2.classList.remove('No');
}else{
this.Names2.classList.add('InvalidName');
this.Names2.classList.remove('ValidName')
this.BoxInput2.classList.add('Invalid');
this.BoxInput2.classList.remove('Valid');
this.TextPreencher3.innerHTML  = 'Digite um email valido';
this.TextPreencher3.classList.add('Preencher3');
this.TextPreencher3.classList.remove('Preencher4');
this.Validation.classList.add('oh-No');
this.favicon2.setAttribute('class', 'bx bx-x');
this.Icons2.classList.add('No');
this.Icons2.classList.remove('Yea');
}

})

this.BoxInput.addEventListener('blur', () => {

if(this.BoxInput.value === ''){
this.Names.classList.add('InvalidName');   
this.Names.classList.remove('ValidName') 
this.BoxInput.classList.add('Invalid');
this.BoxInput.classList.remove('Valid');
this.TextPreencher.innerHTML = 'Por favor preencha este campo';

this.ValidationTwo.classList.add('oh-No');
this.favicon.setAttribute('class', 'bx bx-x');
this.Icons.classList.add('No');
this.Icons.classList.remove('Yea');
}

});

this.BoxInput2.addEventListener('blur', () =>{

if(this.BoxInput2.value === ''){
this.Names2.classList.add('InvalidName');   
this.Names2.classList.remove('ValidName') 
this.BoxInput2.classList.add('Invalid');
this.BoxInput2.classList.remove('Valid');
this.TextPreencher3.innerHTML = 'Por favor preencha este campo';
this.TextPreencher3.classList.add('Preencher3');
this.TextPreencher3.classList.remove('Preencher4');
this.Validation.classList.add('oh-No');
this.favicon2.setAttribute('class', 'bx bx-x');
this.Icons2.classList.add('No');
this.Icons2.classList.remove('Yea');
}

})

}

Negociar.prototype.ComparationEmailAndName = function(){

if(this.ValuePrimitive || !this.InputProtect){

this.Names.classList.add('InvalidName');   
this.Names.classList.remove('ValidName'); 
this.BoxInput.classList.add('Invalid');
this.BoxInput.classList.remove('Valid');
this.TextPreencher.innerHTML = 'Nome Invalido';
this.TextPreencher.classList.add('Preencher') 
this.TextPreencher.classList.remove('Preencher2') 
this.Names.classList.add('InvalidName');
this.favicon.setAttribute('class', 'bx bx-x');
this.Icons.classList.add('No');
this.Icons.classList.remove('Yea'); 
}else{
this.Names.classList.add('ValidName');    
this.BoxInput.classList.add('Valid');
this.TextPreencher.innerHTML = 'Nome Valido';
this.TextPreencher.classList.add('Preencher2');
this.TextPreencher.classList.remove('Preencher');

this.favicon.setAttribute('class', 'bx bx-check');
this.Icons.classList.add('Yea');
this.Icons.classList.remove('No') 
}

if(this.BoxInput.value === ''){
this.Names.classList.add('InvalidName');   
this.Names.classList.remove('ValidName') 
this.BoxInput.classList.add('Invalid');
this.BoxInput.classList.remove('Valid');
this.TextPreencher.innerHTML = 'Por favor preencha este campo';
this.TextPreencher.classList.add('Preencher');
this.TextPreencher.classList.remove('Preencher2');
this.ValidationTwo.classList.add('oh-No');
this.favicon.setAttribute('class', 'bx bx-x');
this.Icons.classList.add('No');
this.Icons.classList.remove('Yea'); 
}

if(this.BoxInput2.value === ''){
this.Names2.classList.add('InvalidName');   
this.Names2.classList.remove('ValidName') 
this.BoxInput2.classList.add('Invalid');
this.BoxInput2.classList.remove('Valid');
this.TextPreencher3.innerHTML = 'Preencha Este Campo';
this.TextPreencher3.classList.add('Preencher3');
this.TextPreencher3.classList.remove('Preencher4');
this.Validation.classList.add('oh-No');
this.favicon2.setAttribute('class', 'bx bx-x');
this.Icons2.classList.add('No');
this.Icons2.classList.remove('Yea'); 
}
}

Negociar.prototype.FormValidation = function(){
    
this.ButtonSend.addEventListener('click', (e) => {
e.preventDefault();

this.ComparationEmailAndName();
this.BoxInput.value  = '';
this.BoxInput2.value = '';

})   
}

const negociou = new Negociar();
negociou.Transform();
negociou.FormValidation();
negociou.FocusInput();
})()