(function() {
    "use strict";

    var title = ["Sai", "Power", "Company"];
    var email = "myemail@gmail.com";
    var phone = "+91 1234567890";
    var description = "We are team of talented electrical contractors managing all electrical related engineering work";
    var address = "No.15, Third Street, R.E.Nagar, Porur, Chennai–600 116";

    var count1 = 3;
    var count2 = 5;
    var count3 = 15;
    
    console.log("Start filling values");

    document.title = title[0] + " " + title[1] + " " + title[2];
    document.getElementById("fill-title-1").innerHTML = title[0] + " " + title[1] + " <span>" + title[2] + "</span>";
    document.getElementById("fill-title-2").innerHTML = "Welcome to <span>" + title[0] + " " + title[1] + " " + title[2] + "</span>";
    document.getElementById("fill-title-3").innerHTML = title[0] + " " + title[1] + " " + title[2];

    document.getElementById("fill-description-1").innerHTML = description;

    document.getElementById("fill-email-1").innerHTML = email;
    document.getElementById("fill-email-1").href = "mailto:"+email;
    document.getElementById("fill-email-2").innerHTML = email;

    document.getElementById("fill-phone-1").innerHTML = phone;
    document.getElementById("fill-phone-2").innerHTML = phone;

    document.getElementById("fill-address-1").innerHTML = address;

    document.getElementById("fill-count-1").setAttribute("data-purecounter-end",count1);
    document.getElementById("fill-count-2").setAttribute("data-purecounter-end",count2);
    document.getElementById("fill-count-3").setAttribute("data-purecounter-end",count3);

    console.log("Finish filling values");

})()