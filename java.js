// Decide what pane to show based on selected LH menu
function show(activeID, id) {

    var menuItemHome = document.getElementById('Home');
    var menuItemContact = document.getElementById('Contact');
    var menuItemCalendar = document.getElementById('Calendar');



    if (activeID === 'Home') {
        menuItemHome.style.backgroundColor = '#1e90ff';
        menuItemContact.style.backgroundColor = '#f2f2f2';
        menuItemCalendar.style.backgroundColor = '#FFFFFF';

    } else if (activeID === 'Contact'){
        menuItemHome.style.backgroundColor = '#FFFFFF';
        menuItemContact.style.backgroundColor = '#f2f2f2';
        menuItemCalendar.style.backgroundColor = '#1e90ff';

    } else if (activeID === 'Calendar'){
        menuItemHome.style.backgroundColor = '#FFFFFF';
        menuItemContact.style.backgroundColor = '#1e90ff';
        menuItemCalendar.style.backgroundColor = '#f2f2f2';

    } 
    var controller = getDocumentById('HomePart');
    controller.setProperty('hidden',1);

    var controller = getDocumentById('ContactPart');
    controller.setProperty('hidden',1);

    var controller = getDocumentById('CalendarPart');
    controller.setProperty('hidden',1);

    var controller = getDocumentById(id);
    controller.setProperty('hidden',0);

}