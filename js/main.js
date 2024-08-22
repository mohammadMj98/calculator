const displayElmnt = document.querySelector('#display')


function buttonEvent(input){
    displayElmnt.value += input
}

function result(){
    try{
        displayElmnt.value = eval(displayElmnt.value)
    }catch(error){
        displayElmnt.value = 'Error'
    }
    
}
function clearInput(){
    displayElmnt.value = ''
}