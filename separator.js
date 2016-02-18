function separator() {
    var stringToSplit = document.input_style.n1.value;
    console.log(stringToSplit);
    var res = stringToSplit.split(";");
    var ar = [];
    console.log(res); // [t, e, s, t]

    for (var i = 0; i < res.length; i++) {
        if(ar.indexOf(res[i]) == -1) {
            ar.push(res[i]);
        }
    } // [t, e, s]
    console.log(ar);
}

function separatorNext() {
    var stringToSplit = document.input_style.n1.value;
    var input = stringToSplit.split(";");
    var result = [];
    console.log(input);

    input.filter(function(element) {
        if(result.indexOf(element) == -1) {
            result.push(element);
        }
    });

    console.log(result);
}

function separatorES6() {
    var input = document.input_style.n1.value.split(";");
    console.log( Array.from(new Set(input)) );
}


function upper() {
    var input = document.input_style.n1.value;
    var result = '';
    var flag = false;

    for(var i = input.length - 1; i >= 0; i--) {
        if(flag) {
            result += input[i].toUpperCase();
            flag = false;
        } else {
            result += input[i].toLowerCase();
            flag = true;
        }
    }
    console.log(result);
}

function oneOnTwo(){
    var n1 = document.input_style.n1.value;
    var n2 = document.input_style.n2.value;
    var n3 = '';
    var counter = 0;

    while(n3.length != (n1.length + n2.length)) {
        if(n1[counter]) {
            n3 += n1[counter];
        }
        if(n2[counter]) {
            n3 += n2[counter];
        }
        counter++;
    }
    console.log(n3);
}

function addition() {
    var array = document.input_style.n1.value.split("");
    var res = 0;
    /*for(var i = 0; i < array.length; i ++){
        res += isNaN(parseInt(array[i])) ? 0 : parseInt(array[i]);

        result += isCharacter(array[i]) ? 0 : valueOf(array[i]);
    }*/

    console.log(
        array.filter(isNotCharacter)
             .reduce(valueOf, 0)
    );

    function isNotCharacter(element) {
        return !isNaN(parseInt(element));
    }

    function valueOf(previous, next) {
        return previous + parseInt(next);
    }

}
