function validate() {
    var first = parseInt(document.getElementsByName("slot_1")[0].value);
    var second = parseInt(document.getElementsByName("slot_2")[0].value);
    var third = parseInt(document.getElementsByName("slot_3")[0].value);
    var fourth = parseInt(document.getElementsByName("slot_4")[0].value);
    var fifth = parseInt(document.getElementsByName("slot_5")[0].value);

    var fields = [
        { data : first, name : "champs 1"},
        { data : second, name : "champs 2" },
        { data : third, name : "champs 3" },
        { data : fourth, name : "champs 4" },
        { data : fifth, name : "champs 5" }
    ];

    var success = fields
        .map(getData)
        .reduce(successMessage);

    function getData(element) {
        return element.data;
    }

    function successMessage(current, next) {
        return current + ' ' + next;
    }

    var errorMessage = fields
        .filter(errorField)
        .map(getName)
        .reduce(errorMessageBuild, '');

    function errorField(fieldElement) {
        return isNaN(fieldElement.data);
    }

    function getName(field) {
        return field.name;
    }

    function errorMessageBuild(current, next) {
        return current + ' ' + next;
    }

    alert(errorMessage.trim().length == 0 ? success : errorMessage);
}