document.addEventListener("DOMContentLoaded", function (event) {



// let incrementButton = $(".increment-button");
// let decrementButton = $(".decrement-button");
// let index=-1;

// let queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=MD&limit=5&api_key=C20X2gP148EDeslk7stqM8BU6u6WmOqbAdPeKG8C";
// let npsResponse;

// let fullName;
// let contactEmail;
// let contactPhone;
// let directionInfo;
// let directionURL;
// let standardHoursMonday;
// let standardHoursTuesday;
// let standardHoursWednesday;
// let standardHoursThursday;
// let standardHoursFriday;
// let standardHoursSaturday;
// let standardHoursSunday;
// let latitude;
// let longitude;
// let description;
// let addressType1;
// let addressType2;

// let addressLine1;
// let addressLine2;
// let addressLine3;
// let addressCity;
// let addressZip;
// let addressState;
// let displayAddress;
// let addressIndex;

// // helper functions

// // returns index of physical address - if first one is "physical", sets to 0, if second is "physical", sets to 1

// function determinePhysical(addressType1,addressType2) {
//     if (addressType1 == "Physical") {
//         return addressIndex=0;
//     } else {
//         return addressIndex=1;
//     }
// }


// incrementButton.on("click",function(){
//     index++;
//     $.ajax({ //
//         url: queryURL, 
//         method: "GET"
//     }).then(function(response){
//         console.log(response);
//         npsResponse=response;
    

//         fullName = response.data[index].fullName;
//         contactEmail = response.data[index].contacts["emailAddresses"][0].emailAddress;
//         contactPhone = response.data[index].contacts.phoneNumbers[0].phoneNumber;
//         directionInfo=response.data[index].directionsInfo;
//         directionURL=response.data[index].directionsUrl;
//         standardHoursMonday=response.data[index].operatingHours[0].standardHours.monday;
//         standardHoursTuesday=response.data[index].operatingHours[0].standardHours.tuesday;
//         standardHoursWednesday=response.data[index].operatingHours[0].standardHours.wednesday;
//         standardHoursThursday=response.data[index].operatingHours[0].standardHours.thursday;
//         standardHoursFriday=response.data[index].operatingHours[0].standardHours.friday;
//         standardHoursSaturday=response.data[index].operatingHours[0].standardHours.saturday;
//         standardHoursSunday=response.data[index].operatingHours[0].standardHours.sunday;
//         latitude=response.data[index].latitude;
//         longitude=response.data[index].longitude;
//         description = response.data[index].description;

//         addressType1=response.data[index].addresses[0].type;
//         addressType2=response.data[index].addresses[1].type;

//         // determine these based on the result from determinePhysical -> use this as the index
//         console.log(determinePhysical(addressType1,addressType2));
//         addressLine1=response.data[index].addresses[determinePhysical(addressType1,addressType2)].line1;
//         addressLine2=response.data[index].addresses[determinePhysical(addressType1,addressType2)].line2;
//         addressLine3=response.data[index].addresses[determinePhysical(addressType1,addressType2)].line3;
//         addressCity=response.data[index].addresses[determinePhysical(addressType1,addressType2)].city;
//         addressZip=response.data[index].addresses[determinePhysical(addressType1,addressType2)].postalCode;
//         addressState=response.data[index].addresses[determinePhysical(addressType1,addressType2)].stateCode;
        
//         console.log("fullname: " + fullName + "\nEmail: " + contactEmail + "\nPhone: " + contactPhone + "\nDirections: " + directionInfo + "\nLink to Directions: " + directionURL);
//         console.log("latitude: " + latitude + "\nlongitude: " + longitude + "\nDescription: " + description);
//         console.log("Monday hours " + standardHoursMonday + "\nTuesday hours " + standardHoursTuesday +"\nWednesday hours " + standardHoursWednesday + "\nThursday hours " + standardHoursThursday + "\nFriday hours " + standardHoursFriday +"\nSaturday hours " + standardHoursSaturday + "\nSunday Hours " + standardHoursSunday)
//         console.log("Address: " + "\n" + addressLine1 +  "\n" + addressCity + " " + addressState + " " + addressZip);
//     })
// })

// decrementButton.on("click",function(){
//     index--;
//     if (index < 0) {
//         index = 0;
//     }
//     $.ajax({ //
//         url: queryURL, 
//         method: "GET"
//     }).then(function(response){
//         // console.log(response);
//         npsResponse=response;
    
        // fullName = response.data[index].fullName;
        // contactEmail = response.data[index].contacts["emailAddresses"][0].emailAddress;
        // contactPhone = response.data[index].contacts.phoneNumbers[0].phoneNumber;
        // directionInfo=response.data[index].directionsInfo;
        // directionURL=response.data[index].directionsUrl;
        // standardHoursMonday=response.data[index].operatingHours[0].standardHours.monday;
        // standardHoursTuesday=response.data[index].operatingHours[0].standardHours.tuesday;
        // standardHoursWednesday=response.data[index].operatingHours[0].standardHours.wednesday;
        // standardHoursThursday=response.data[index].operatingHours[0].standardHours.thursday;
        // standardHoursFriday=response.data[index].operatingHours[0].standardHours.friday;
        // standardHoursSaturday=response.data[index].operatingHours[0].standardHours.saturday;
        // standardHoursSunday=response.data[index].operatingHours[0].standardHours.sunday;
        // latitude=response.data[index].latitude;
        // longitude=response.data[index].longitude;
        // description = response.data[index].description;

//         addressType1=response.data[index].addresses[0].type;
//         addressType2=response.data[index].addresses[1].type;

//         // determine these based on the result from determinePhysical -> use this as the index
//         console.log(determinePhysical(addressType1,addressType2));
//         addressLine1=response.data[index].addresses[determinePhysical(addressType1,addressType2)].line1;
//         addressLine2=response.data[index].addresses[determinePhysical(addressType1,addressType2)].line2;
//         addressLine3=response.data[index].addresses[determinePhysical(addressType1,addressType2)].line3;
//         addressCity=response.data[index].addresses[determinePhysical(addressType1,addressType2)].city;
//         addressZip=response.data[index].addresses[determinePhysical(addressType1,addressType2)].postalCode;
//         addressState=response.data[index].addresses[determinePhysical(addressType1,addressType2)].stateCode;
        
//         console.log("fullname: " + fullName + "\nEmail: " + contactEmail + "\nPhone: " + contactPhone + "\nDirections: " + directionInfo + "\nLink to Directions: " + directionURL);
//         console.log("latitude: " + latitude + "\nlongitude: " + longitude + "\nDescription: " + description);
//         console.log("Monday hours " + standardHoursMonday + "\nTuesday hours " + standardHoursTuesday +"\nWednesday hours " + standardHoursWednesday + "\nThursday hours " + standardHoursThursday + "\nFriday hours " + standardHoursFriday +"\nSaturday hours " + standardHoursSaturday + "\nSunday Hours " + standardHoursSunday)
//         console.log("Address: " + addressLine1 + " " + addressLine2 + " " + addressLine3 + ", " + addressCity + ", " + addressState + " " + addressZip);
//     })
    

// })
//// SECION FOR THE EVENT LISTENER FOR KEYPRESS //////
//document.addEventListener("keypress", function(event){
  //if(event.key === 'Enter' || event.key === 'Return'){
    $("#location-finder").on("click", function(event) {
        event.preventDefault();
    /// PROMPTS FOR PERMISSION TO USE PERMISSION /////
    let locatorText = document.getElementById("mapperID");
      getLocation();
      function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } else {
        locatorText.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
    //// gets the address of the user by permission ///
      function showPosition(position) {
          locatorText.innerHTML = "Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;
          console.log("the position: " + position);
          if (position == null || position == false){
            $.get('https://ipapi.co/ip/', function(data){
                let ipFetched = data;
                console.log(ipFetched);
                let ipEmbed = "https://ipapi.co/" + ipFetched + "/json/";
            $.getJSON(ipEmbed, function(data){
                let ipTrace = data;
                console.log(ipTrace);
                position.coords.latitude = ipTrace.latitude;
                position.coords.longitude = ipTrace.longitude;
          })
        })}
          let activityName = document.getElementById("activitySearch");
          let textBox = document.querySelector("#activitySearch");  
          //stateSearch = activityName.value;
    // gets state for NPS api
          $.get('https://ipapi.co/ip/', function(data){
              let ipFetched = data;
              console.log("user IP: " + ipFetched);
              let ipEmbed = "https://ipapi.co/" + ipFetched + "/json/";
          $.getJSON(ipEmbed, function(data){
              let ipTrace = data;
              console.log(ipTrace);
              stateLocation = ipTrace.region_code;
              console.log("state location: "+ stateLocation);
    /// SETS NPS API USING IPAPI.CO STATE IDENTIFICATION ///
      let limitResults = "&limit=50";
      let apiKey = "C20X2gP148EDeslk7stqM8BU6u6WmOqbAdPeKG8C";
      let queryURL = "https://developer.nps.gov/api/v1/parks?stateCode="+ stateLocation +"&limit=5&api_key=C20X2gP148EDeslk7stqM8BU6u6WmOqbAdPeKG8C";
    //// GENERATES a mapquest map utilizing the lat & long of the user ///
      L.mapquest.key = 'm6r48gcKnaiZ5cS9fynPUC8mEcXnoOjO';
        let map = L.mapquest.map('map', {
        center: [position.coords.latitude, position.coords.longitude],
        layers: L.mapquest.tileLayer('dark'),
        zoom: 10,
        opacity: 0.7
        });
      L.marker([position.coords.latitude, position.coords.longitude], {
        icon: L.mapquest.icons.marker(),
        draggable: false
        }).addTo(map);
    /// CALLS NPS API 
      $.ajax({ //
        url: queryURL, 
        method: "GET"
      }).then(function(response){
        let npsResponse = response;
        console.log(npsResponse);
        for(entry=0; entry < 10; entry++){
    
     /// PARK INFORMATION FOR MAP POPULATION ///
            parkTitle = npsResponse.data[entry].fullName;
            parkLatLong = (npsResponse.data[entry].latLong).replace("{", "").replace("}","");
            if(parkLatLong != ''){
            parkLatLong = parkLatLong.split(',');
            parkLat = (parkLatLong[0])
            let parkLatClean = parkLat.replace("lat:", "");
            parkLong = (parkLatLong[1])
            let parkLongClean = parkLong.replace("long:", "");
            let parkButton = document.createElement("button");
            // $(parkButton).attr("class", "modal-button");
            // $(parkButton).attr("data-target", "modal-ter");
            // $(parkButton).attr("aria-haspopup","true");
            let modalContainer = document.createElement("div");
            $(modalContainer).attr("class", "container");
            $(modalContainer).attr("id", "app");
            let modalEventCreation = document.createElement("div");
            $(modalEventCreation).attr("class","modal");
            let modalBackground = document.createElement("div");
            $(modalBackground).attr("class", "modal-background");
            $(modalEventCreation).attr("class", "modal");
            
            let modalEventTitle = document.createElement("div");
            $(modalEventTitle).attr("class", "modal-card-body");
            $(modalEventTitle).attr("id", parkTitle);
            $(modalEventTitle).text(parkTitle);
            $(modalEventCreation).append(modalEventTitle);
            let modalSection = document.createElement("section");
            $(modalSection).attr("class", "modal-card-body");
            $(modalSection).attr("id", parkLongClean);
            $(modalSection).append(modalEventCreation);
            $(modalContainer).append(modalSection);
            let modalClose = document.createElement("footer");
            $(modalClose).attr("class","modal-card-foot");
            let modalCloseBtn = document.createElement("button");
            $(modalCloseBtn).attr("class", "modal-close");
            $(modalCloseBtn).attr("aria-label", "close");
            $(modalCloseBtn).text("close");
            //$(modalContainer).append(modalCloseBtn);
            $(modalClose).append(modalCloseBtn);
            $("#modalArea").append(modalContainer);
           
           //$("#location-info").text(addressLine2);

    /// adds marker to the map for 'X' AMOUNT OF LOCATIONS FROM NPS FOR THE STATE ///
    L.marker([parkLatClean, parkLongClean], {
              icon: L.mapquest.icons.marker({
                shadow: true,
                tooltip: parkTitle,
                primaryColor: '#f14025',
                secondaryColor: '#a4bab7'
              }),
              draggable: false
            }).bindPopup(parkButton).addTo(map);
            $(parkButton).attr("id", parkLongClean);
            $(parkButton).attr("class","button is-light");
           $(parkButton).text(parkTitle);
           $(parkButton).attr("data-target", parkTitle);
           $(parkButton).on("click", function(event) {
            event.preventDefault();
            $(modalEventCreation).attr("class", "modal is-active");
            console.log("modal event creation: " + modalEventCreation);
            console.log("modal Container" + modalEventTitle);
           })
        //    <div class="container" id="app"> 
        //    <div class="modal">
        //      <div class="modal-background"></div>
        //        <div class="modal-card">
        //          <header class="modal-card-head">
        //            <p class="modal-card-title" id="location-title">Modal title</p>
        //          </header>
               
        //          <section class="modal-card-body" id="location-info">
        //          </section>
               
        //          <footer class="modal-card-foot">
        //            <button class="button is-success" id="save-location">Save Location</button>
        //            <button class="button is-light" id="modal-close">Cancel</button>
        //          </footer>
        //        </div>
        //    </div>
        //  </div>



           //$("#location-title").text(parkTitle);
           //let parkButton = document.createElement("button");
// $(parkButton).attr("class", "modal-button");
// $(parkButton).attr("data-target", "modal-ter");
// $(parkButton).attr("aria-haspopup","true");
// $(parkButton).attr("id", "location-info");
// $(parkButton).attr("class","button");
// $(parkButton).text(fullName);
$("#location-title").text(fullName);
$("#location-info").text(addressLine2);

    //CALCULATES THE DISTANCE FROM THE USER'S LOCATION TO THAT OF THE NPS LOCATION USING LAT & LONG//
    function distanceMeasurement (){
        let radlat1 = Math.PI * (position.coords.latitude)/180;
        let radlat2 = Math.PI * parkLatClean/180;
        let theta =  position.coords.longitude - parkLongClean;
        //console.log("distance long 1: " + position.coords.longitude + "distance lat 2: "+ parkLatClean);
        let radtheta = Math.PI * theta/180;
            let distOne = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(distOne);
            distTwo = dist * 180/Math.PI;
        distUnitless = distTwo * 60 * 1.1515;
        
        distKM = distUnitless * 1.609344;
        distMiles = (distKM / 1.6093444);
        distMiles = distMiles.toFixed(1);
        console.log("the distance in miles: " + distMiles);
        return distMiles;
        
    }
    distanceMeasurement();
     /// SECTION TO AUTO FILL CONTACT INFORMATION ////
            fullName = response.data[entry].fullName;
            contactEmail = response.data[entry].contacts["emailAddresses"][0].emailAddress;
            contactPhone = response.data[entry].contacts.phoneNumbers[0].phoneNumber;
            directionInfo=response.data[entry].directionsInfo;
            directionURL=response.data[entry].directionsUrl;
            standardHoursMonday=response.data[entry].operatingHours[0].standardHours.monday;
            standardHoursTuesday=response.data[entry].operatingHours[0].standardHours.tuesday;
            standardHoursWednesday=response.data[entry].operatingHours[0].standardHours.wednesday;
            standardHoursThursday=response.data[entry].operatingHours[0].standardHours.thursday;
            standardHoursFriday=response.data[entry].operatingHours[0].standardHours.friday;
            standardHoursSaturday=response.data[entry].operatingHours[0].standardHours.saturday;
            standardHoursSunday=response.data[entry].operatingHours[0].standardHours.sunday;
            latitude=response.data[entry].latitude;
            longitude=response.data[entry].longitude;
            description = response.data[entry].description;
            addressType1=response.data[entry].addresses[0].type;
            addressType2=response.data[entry].addresses[1].type;
        console.log("address type 1 response: " + addressType1 + ", address type 2 response: " + addressType2);
            // determine these based on the result from determinePhysical -> use this as the index
            //// ALEX CODE TO DETERMINE WHICH ADDRESS TO POPULATE ////
    function determinePhysical() {
                if (addressType1 == "Physical") {
                    addressVar= 0;
                } else {
                    addressVar= 1;
                    }
        }
        determinePhysical();
            addressLine1=response.data[entry].addresses[addressVar].line1;
            addressLine2=response.data[entry].addresses[addressVar].line2;
            addressLine3=response.data[entry].addresses[addressVar].line3;
            addressCity=response.data[entry].addresses[addressVar].city;
            addressZip=response.data[entry].addresses[addressVar].postalCode;
            addressState=response.data[entry].addresses[addressVar].stateCode;
        console.log("address 1: " + addressLine1 + " address 2: " + addressLine2);
        console.log("parkTitle response: " + parkTitle+ ",distance in miles from current location: "+ distMiles);

    
              }
            }
      })
        })
        })
    
      }})

    })