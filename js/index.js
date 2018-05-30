var thehours = new Date().getHours();
var themessage;
var morning = ('Good morning');
var afternoon = ('Good afternoon');
var evening = ('Good evening');

if (thehours >= 0 && thehours < 12) {
    themessage = morning;
    $("#greeting").addClass("morning");
} else if (thehours >= 12 && thehours < 17) {
    themessage = afternoon;
    $("#greeting").addClass("afternoon");
} else if (thehours >= 17 && thehours < 24) {
    themessage = evening;
    $("#greeting").addClass("evening");
}

$('#greeting').append(themessage);

