function binaryFunction(firstInput, secondInput) {
    firstInput = document.getElementsByName("input_1")[0].value;
    secondInput = document.getElementsByName("input_2")[0].value;

    if(firstInput == secondInput) {
        alert("1");
    }else{
        alert("0");
    }
}