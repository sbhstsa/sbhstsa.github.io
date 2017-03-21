/*
    All js is written using ES6 standards (i.e. functions are 
    replaced with lambda expressions, let is used in place of
    var), and the DOM is accessed primarily through jQuery's API.
*/    


$(document).ready(() => {
    let eventsSectionShowing = false;
    // Overrides nav/drawer link behavior so content fades out and back in
    $(".mdl-navigation__link").toArray().forEach( (link) => {
        $(link).on('click', (event) => {
            event.preventDefault();
            setTimeout( () => {
                window.location = $(link).attr('href');
            }, 250);
            $('.tsa-content').fadeOut(250);
            $('.tsa-content').fadeIn(250);
        });
    });
    
    $("#event-button").on('click', () => {
        eventsSectionShowing = !eventsSectionShowing;
        if(eventsSectionShowing) {
            $("#events").slideDown();
            $("#events-button-icon").html("arrow_drop_up");
        } else {
            $("#events").slideUp();
            $("#events-button-icon").html("arrow_drop_down");
        }
    });
    
});
