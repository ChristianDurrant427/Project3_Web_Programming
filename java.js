// Decide what pane to show based on selected LH menu
function show(activeID, ) {

    var homePage = document.getElementById('Home')
    var contactPage = document.getElementById('Contact')
    var calendarPage = document.getElementById('Calendar')



    if (activeID === 'Home') {
        homePage.style.backgroundColor = '#1e90ff'
        contactPage.style.backgroundColor = '#f2f2f2'
        calendarPage.style.backgroundColor = '#FFFFFF'

    } else if (activeID === 'Contact'){
        homePage.style.backgroundColor = '#FFFFFF'
        contactPage.style.backgroundColor = '#f2f2f2'
        calendarPage.style.backgroundColor = '#1e90ff'

    } else if (activeID === 'Calendar'){
        homePage.style.backgroundColor = '#FFFFFF'
        contactPage.style.backgroundColor = '#1e90ff'
        calendarPage.style.backgroundColor = '#f2f2f2'

    } 
    var controller = getDocumentById('HomePart');
    controller.setProperty('hidden',1);

    var controller = getDocumentById('ContactPart');
    controller.setProperty('hidden',1);

    var controller = getDocumentById('CalendarPart');
    controller.setProperty('hidden',1);

    var controller = zenPage.getComponentById(id);
    controller.setProperty('hidden',0);

}