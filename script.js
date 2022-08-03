
var currentDate = $('#currentDay');
currentDate.text(moment().format('dddd, MMMM Do YYYY'));

var currentHour = moment().hour();

var nineHour = moment().set('hour', 09).format('HH');
var tenHour = moment().set('hour', 10).format('HH');
var elevenHour = moment().set('hour', 11).format('HH');
var twelveHour = moment().set('hour', 12).format('HH');
var thirteenHour = moment().set('hour', 13).format('HH');
var fourteenHour = moment().set('hour', 14).format('HH');
var fifteenHour = moment().set('hour', 15).format('HH');
var sixteenHour = moment().set('hour', 16).format('HH');
var seventeenHour = moment().set('hour', 17).format('HH');



function nineHourColorChanger() {
    if (currentHour > nineHour) {
        $("#nineHourRow").attr('class', 'past');
    }
    else if (currentHour == nineHour) {
        $("#nineHourRow").attr('class', 'present');
    }
    else {
        $("#nineHourRow").attr('class', 'future');
    }    
};

nineHourColorChanger();

function tenHourColorChanger() {
    if (currentHour > tenHour) {
        $("#tenHourRow").attr('class', 'past');
    }
    else if (currentHour == tenHour) {
        $("#tenHourRow").attr('class', 'present');
    }
    else {
        $("#tenHourRow").attr('class', 'future');
    }    
};

tenHourColorChanger();

function elevenHourColorChanger() {
    if (currentHour > elevenHour) {
        $("#elevenHourRow").attr('class', 'past');
    }
    else if (currentHour == elevenHour) {
        $("#elevenHourRow").attr('class', 'present');
    }
    else {
        $("#elevenHourRow").attr('class', 'future');
    }    
};

elevenHourColorChanger();

function twelveHourColorChanger() {
    if (currentHour > twelveHour) {
        $("#twelveHourRow").attr('class', 'past');
    }
    else if (currentHour == twelveHour) {
        $("#twelveHourRow").attr('class', 'present');
    }
    else {
        $("#twelveHourRow").attr('class', 'future');
    }    
};

twelveHourColorChanger();

function thirteenHourColorChanger() {
    if (currentHour > thirteenHour) {
        $("#thirteenHourRow").attr('class', 'past');
    }
    else if (currentHour == thirteenHour) {
        $("#thirteenHourRow").attr('class', 'present');
    }
    else {
        $("#thirteenHourRow").attr('class', 'future');
    }    
};

thirteenHourColorChanger();

function fourteenHourColorChanger() {
    if (currentHour > fourteenHour) {
        $("#fourteenHourRow").attr('class', 'past');
    }
    else if (currentHour == fourteenHour) {
        $("#fourteenHourRow").attr('class', 'present');
    }
    else {
        $("#fourteenHourRow").attr('class', 'future');
    }    
};

fourteenHourColorChanger();

function fifteenHourColorChanger() {
    if (currentHour > fifteenHour) {
        $("#fifteenHourRow").attr('class', 'past');
    }
    else if (currentHour == fifteenHour) {
        $("#fifteenHourRow").attr('class', 'present');
    }
    else {
        $("#fifteenHourRow").attr('class', 'future');
    }    
};

fifteenHourColorChanger();

function sixteenHourColorChanger() {
    if (currentHour > sixteenHour) {
        $("#sixteenHourRow").attr('class', 'past');
    }
    else if (currentHour == sixteenHour) {
        $("#sixteenHourRow").attr('class', 'present');
    }
    else {
        $("#sixteenHourRow").attr('class', 'future');
    }    
};

sixteenHourColorChanger();

function seventeenHourColorChanger() {
    if (currentHour > seventeenHour) {
        $("#seventeenHourRow").attr('class', 'past');
    }
    else if (currentHour == seventeenHour) {
        $("#seventeenHourRow").attr('class', 'present');
    }
    else {
        $("#seventeenHourRow").attr('class', 'future');
    }    
};

seventeenHourColorChanger();



$("#keepNine").click(function () {
    var nineEntry = $("#nineHourRow").text();
    localStorage.setItem('nineHourRow', nineEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepTen").click(function () {
    var tenEntry = $("#tenHourRow").text();
    localStorage.setItem('tenHourRow', tenEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepEleven").click(function () {
    var elevenEntry = $("#elevenHourRow").text();
    localStorage.setItem('elevenHourRow', elevenEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepTwelve").click(function () {
    var twelveEntry = $("#twelveHourRow").text();
    localStorage.setItem('twelveHourRow', twelveEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepThirteen").click(function () {
    var thirteenEntry = $("#thirteenHourRow").text();
    localStorage.setItem('thirteenHourRow', thirteenEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepFourteen").click(function () {
    var fourteenEntry = $("#fourteenHourRow").text();
    localStorage.setItem('fourteenHourRow', fourteenEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepFifteen").click(function () {
    var fifteenEntry = $("#fifteenHourRow").text();
    localStorage.setItem('fifteenHourRow', fifteenEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepSixteen").click(function () {
    var sixteenEntry = $("#sixteenHourRow").text();
    localStorage.setItem('sixteenHourRow', sixteenEntry);
    alert("Entry Saved to Local Storage");
});

$("#keepSeventeen").click(function () {
    var seventeenEntry = $("#seventeenHourRow").text();
    localStorage.setItem('seventeenHourRow', seventeenEntry);
    alert("Entry Saved to Local Storage");
});