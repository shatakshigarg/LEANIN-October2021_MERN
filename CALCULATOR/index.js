

/*let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText=='i class="fas fa-backspace'){
            screenValue=buttonText.slice(0,-1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}*/


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


