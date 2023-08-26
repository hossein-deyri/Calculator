function addToCalculator(e){
        
    document.getElementById('displayresult').value += e
}
function _equal(){
    document.getElementById('displayresult').value = eval(document.getElementById('displayresult').value)
}
function _reset(){
    document.getElementById('displayresult').value = ""
}
function mathCalculator(e){
    let val = document.getElementById('displayresult').value
    if(e=='sqrt'){
        document.getElementById('displayresult').value = Math.sqrt(val)
    }
    else if(e=='round'){
        document.getElementById('displayresult').value = Math.round(val)
    }
    else{
        document.getElementById('displayresult').value = Math.abs(val)
    }
}