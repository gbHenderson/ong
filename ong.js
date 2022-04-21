function menu(){
    var menu = document.getElementsByTagName('div')[1]
    
    if(menu.classList.contains('show')){
        menu.classList.add('hide')
        menu.classList.remove('show')}

    else{menu.classList.add('show')
        menu.classList.remove('hide')}}