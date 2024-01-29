const button = document.querySelector('button')
console.log (button)
const value1 = document.querySelector('#salario').value
const value2 = document.querySelector('#salario-anterior').value
button.addEventListener ("click", function(){
    if (value1 != '' || value2 != ''){
        alert ('Correcto')
    } else {
        alert ('Incorrecto')
    }
    })

