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
    function myFunction() {
    var newTask = document.getElementById("myText").value;
    var currentLength = document.getElementsByClassName('form-control').length;
    var container = document.getElementById('checkbox-container')
    var newId = currentLength + 1;
    console.log('<input type="checkbox /><span>' + newTask + '</span>')
    container.innerHTML = container.innerHTML + '<input type="checkbox" id="'+newId+'-checkbox" onchange="checkboxChange(event)" class="form-control" /><span id="'+newId+'-value">' + newTask + '</span>'+'<br>';
    var newTask = document.getElementById("myText").value="";
}

