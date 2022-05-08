function menu(){
    var menu = document.getElementsByTagName('div')[1]
    
    if(menu.classList.contains('show')){
       menu.classList.add('hide')
       menu.classList.remove('show')}

    else{menu.classList.add('show')
         menu.classList.remove('hide')}}

function enviar(){
   var nome = document.getElementById('nome')
   var nome2 = document.getElementsByTagName('label')[0]
   var email = document.getElementById('email')
   var email2 = document.getElementsByTagName('label')[1]
   var nas = document.getElementById('nas')
   var nas2 = document.getElementsByTagName('label')[5]
   var men = document.getElementById('msg')
   var men2 = document.getElementsByTagName('label')[6]

   if(men.value.length < 2){
     men2.style.color = 'red'
     men.style.background = 'red'}
   
   if(nome.value.length < 1){
     nome2.style.color = 'red'
     nome.style.background = 'red'}

   if(email.value.length < 1){
     email2.style.color = 'red'
     email.style.background = 'red'} 

   if(nas.value.length < 1){
     nas2.style.color = 'red'
     nas.style.background = 'red'}

   else{window.alert('Mensagem Enviada!')
        nome2.style.color = 'white'
        nome.style.background = 'white'
        email2.style.color = 'white'
        email.style.background = 'white'
        nas2.style.color = 'white'
        nas.style.background = 'white'
        men2.style.color = 'white'
        men.style.background = 'white'}
}