document.getElementById("demo").innerHTML = "Hello World!"; 

function checkboxChange(e) {
    var checkboxId = e.target.id; // first-checkbox
    var valueId = checkboxId.split('-')[0] + '-value' // first-value
    var isChecked = e.target.checked;
    var element = document.getElementById(valueId);
    if (isChecked) {
        var str = element.innerText;
        element.innerHTML = str.strike()
    } else {
        var str = element.innerText;
        element.innerHTML = str;
    }
} 


