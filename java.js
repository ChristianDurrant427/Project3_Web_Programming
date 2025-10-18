// Decide what pane to show based on selected LH menu
function show(activeID, id) {

    var menuItemHome = document.getElementById('Home');
    var menuItemContact = document.getElementById('Contact');
    var menuItemCalendar = document.getElementById('Calendar');



    if (activeID === 'Home') {
        menuItemHome.style.backgroundColor = '#1e90ff';
        menuItemContact.style.backgroundColor = '#FFFFFF';
        menuItemCalendar.style.backgroundColor = '#FFFFFF';

    } else if (activeID === 'Contact'){
        menuItemHome.style.backgroundColor = '#FFFFFF';
        menuItemContact.style.backgroundColor = '#1e90ff'
        menuItemCalendar.style.backgroundColor = '#FFFFFF';

    } else if (activeID === 'Calendar'){
        menuItemHome.style.backgroundColor = '#FFFFFF';
        menuItemContact.style.backgroundColor = '#FFFFFF';
        menuItemCalendar.style.backgroundColor = '#1e90ff';

    } 
    var controller = document.getElementById('HomePart');
    controller.style.setProperty('display','none');

    var controller = document.getElementById('ContactPart');
    controller.style.setProperty('display','none');

    var controller = document.getElementById('CalendarPart');
    controller.style.setProperty('display','none');

    var controller = document.getElementById(id);
    controller.style.setProperty('display','block');

    var modal = document.getElementById("ImageModal");
}

img.onclick = function(id) {
    var img = document.getElementById(id)
    var modalIMG = document.getElementById(id)
    modal.style.display = "block";
    modalIMG.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementById("close")[0];

span.onclick = function() {
    modal.style.display = "none"
}

body.onclick = function() {
    modal.style.display = "none"
}

