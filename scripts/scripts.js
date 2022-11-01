function destinationFilter() {
    var input, filter, destinations, countries, h3, i, txtValue;
    input = document.getElementById("userImput");
    filter = input.value.toUpperCase();
    destinations = document.getElementById("destinations");
    countries = destinations.getElementsByClassName("country");
    for (i = 0; i < countries.length; i++) {
        h3 = countries[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            countries[i].style.display = "";
        } else {
            countries[i].style.display = "none";
        }
    }
}
function checkCountry(val) {
    var element = document.getElementById('alt_country');
    if (val=='other')
        element.style.display='block';
    else
        element.style.display='none';
}
function changePageMapFormat(val) {
    var diagram = document.getElementById("diagram-display");
    var table = document.getElementById("table-display");
    if (val.id == "diagram_button") {
        diagram.style.display= 'block';
        table.style.display= 'none';
    }
    if (val.id == "table_button") {
        diagram.style.display= 'none';
        table.style.display= 'inline-block';
    }
}

function checkTravelStyle(val) {
    var oneWay = document.getElementById('oneWayFlight');
    var returnWay = document.getElementById('returnFlight');
    var multiCityWay = document.getElementById('multiCityFlight');
    var search_box = document.getElementsByClassName("form-line");
    var multiCityBox = document.getElementById("hidden-box");
    if (val.id=="returnFlight") {
        oneWay.checked = false;
        multiCityWay.checked = false;
        search_box[1].style.display = 'initial';
        search_box[3].style.display = 'initial';
        multiCityBox.style.display = 'none';
    }
    else {
        if (val.id == "oneWayFlight") {
            returnWay.checked = false;
            multiCityWay.checked = false;
            search_box[1].style.display = 'none';
            search_box[3].style.display = 'none';
            multiCityBox.style.display = 'none';
        }
        else {
            returnWay.checked = false;
            oneWay.checked = false;
            search_box[1].style.display = 'none';
            search_box[3].style.display = 'none';
            multiCityBox.style.display = 'inline-block';

        }
    }
}
function changeTripPlanning(val) {
    let features = document.getElementsByClassName("feature");
    let index;
    let ids = [];
    for (let i = 0; i < features.length; i++) {
        ids[i] = features[i].id;
    }
    if (val == "flightButton") {
        index = ids.indexOf("search-flights");
    }
    if (val == "accommodationButton") {
        index = ids.indexOf("search-accommodation");
    }
    if (val == "eventButton") {
        index = ids.indexOf("search-events");
    }
    if (val == "eatingButton") {
        index = ids.indexOf("search-eating");
    }
    if (val == "allButton") {
        index = -1;
    }
    for (let f = 0; f < features.length; f++) {
        if (index == -1) {
            features[f].style.display = 'block';
        } else {
            if (f == index) {
                features[f].style.display = 'block';
            } else {
                features[f].style.display = 'none';
            }
        }
    }
}

function showMultiCity (val) {
    var multiCityBox = document.getElementById("hidden-box");
    if (val==true)
        multiCityBox.style.display = 'inline-block';
    else
        multiCityBox.style.display = 'none';
}


function alertNoResult(){
    alert("Feature not working yet!");
}