
var myName;
var num1, num2;
var carForm;

function handleChange(event) {
    var total = 0;
    for (var i=0; i < carForm.extras.length; i++)
	{
        if(carForm.extras[i].checked) {
            total = total + parseInt(carForm.extras[i].value);
        }
    }
}

document.getElementById("result").innerHTML = "£" + total;

function main() {
    myName = "Charles";
    num1 = 10;
    num2 = 20;
    if (num2 > num1) {
        console.log('num 1 is bigger than num 2' + myName)
    }

    else {
        console.log('num 2 is bigger than num 1' + myName)
    }

    carForm = document.getElementById('carForm')
    carForm.addEventListener('change', handleChange);


    console.log(carForm);
}
