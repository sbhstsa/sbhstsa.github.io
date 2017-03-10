var gotoxy = function(x, y, dur=0) {
    $("body").stop().animate({
      backgroundPositionX: x,
      backgroundPositionY: y
    }, dur);
    
}

$('body').fadeTo(0,0);

var snapp, snapping;

var snap = function() {
    snapping = true;
    gotoxy('32%','50%',500);
    setTimeout(function() {
        $('body').animate({
                scrollTop: 3200
            }, 0);
        
        setTimeout(function() {
            $('body').fadeTo(500,1);
        },0);
        snapping=false;
    },600);
    
}

$(window).on("scroll", function (args) {
    if(snapping) {
        return;
    }
    
    var pos = $(window).scrollTop()/100;
    
    if(snapp)
        clearTimeout(snapp);
    if(pos>30 && pos<36) {
        snapp = setTimeout(snap,1000);
    } else {
        console.log("Yee");
        setTimeout(function() {
            $('body').fadeTo(500,0);   
        },0);
    }
    console.log("SCROLL "+pos);
    gotoxy(pos+'%', '50%');
});