function concatString(elementName_1, elementName_2) {

    elementName_1 = document.getElementsByName("element_1")[0].value;
    elementName_2 = document.getElementsByName("element_2")[0].value;

    alert(elementName_1 + ' ' + elementName_2);
}