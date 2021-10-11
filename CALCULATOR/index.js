function number(num){
    var result = document.getElementById('screen');
    result.value +=num;
}

function result(){
    var result = document.getElementById('screen');
result.value = eval(result.value);
}

function clearResult(){
    var result = document.getElementById('screen');
    result.value = "";
}

function deleteChar(){
    var number = document.getElementById('screen');
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove ;
}


