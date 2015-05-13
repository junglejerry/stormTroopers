var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        var students = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < students.length; i++) {
            if (students[i].inAttendance === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += students[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById("studentList").innerHTML = statusHTML;
    }
};

xhr.open("GET", "students.json");
xhr.send();

document.domain = 'localhost';

console.log(xhr);