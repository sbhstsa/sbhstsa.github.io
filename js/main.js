/*
    All js is written using ES5 standards, as Internet Explorer does not support
    ES6 features (lambda expressions to replace functions; let instead of var)
*/    


$(document).ready(function () {
    var eventsSectionShowing = false;
    // Overrides nav/drawer link behavior so content fades out and back in
    $(".mdl-navigation__link").toArray().forEach( function(link) {
        $(link).on('click', function(event) {
            event.preventDefault();
            setTimeout( function() {
                window.location = $(link).attr('href');
            }, 250);
            $('.tsa-content,.ar-content').fadeOut(250);
            $('.tsa-content,.ar-content').fadeIn(250);
        });
    });
    
    $("#event-button").on('click', function() {
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
