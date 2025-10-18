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
    controller.setProperty('hidden',1);

    var controller = document.getElementById('ContactPart');
    controller.setProperty('hidden',1);

    var controller = document.getElementById('CalendarPart');
    controller.setProperty('hidden',1);

    var controller = document.getElementById(id);
    controller.setProperty('hidden',0);

}