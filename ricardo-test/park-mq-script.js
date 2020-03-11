document.addEventListener("DOMContentLoaded", function (event) {
    $("#location-finder").on("click", function(event) {
        event.preventDefault();
    /// HIDES HERO BANNER ///
    $(".hero").attr("style", "display: none;");
    $("#body").attr("style", "display: inline;");
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
            parkDescription = npsResponse.data[entry].description;
            parkDirectionURL = npsResponse.data[entry].directionsUrl;
            parkBannerBackground = npsResponse.data[entry].images[0].url;
            standardHoursMonday= "Monday: " + npsResponse.data[entry].operatingHours[0].standardHours.monday;
            standardHoursTuesday="Tuesday: " + npsResponse.data[entry].operatingHours[0].standardHours.tuesday;
            standardHoursWednesday="Wednesday: " +npsResponse.data[entry].operatingHours[0].standardHours.wednesday;
            standardHoursThursday="Thursday: " +npsResponse.data[entry].operatingHours[0].standardHours.thursday;
            standardHoursFriday="Friday: " +npsResponse.data[entry].operatingHours[0].standardHours.friday;
            standardHoursSaturday="Saturday: " +npsResponse.data[entry].operatingHours[0].standardHours.saturday;
            standardHoursSunday="Sunday: " +npsResponse.data[entry].operatingHours[0].standardHours.sunday;
            parkFeeOne = npsResponse.data[entry].entranceFees[0];
            parkFeeTwo =  npsResponse.data[entry].entranceFees[1];
            parkLatLong = (npsResponse.data[entry].latLong).replace("{", "").replace("}","");
            if(parkLatLong != ''){
            parkLatLong = parkLatLong.split(',');
            parkLat = (parkLatLong[0])
            let parkLatClean = parkLat.replace("lat:", "");
            parkLong = (parkLatLong[1])
            let parkLongClean = parkLong.replace("long:", "");
            let parkButton = document.createElement("button");
//CALCULATES THE DISTANCE FROM THE USER'S LOCATION TO THAT OF THE NPS LOCATION USING LAT & LONG//
    function distanceMeasurement (){
      let radlat1 = Math.PI * (position.coords.latitude)/180;
      let radlat2 = Math.PI * parkLatClean/180;
      let theta =  position.coords.longitude - parkLongClean;
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

////// MODAL POPULATION////////
  let modalContainer = document.createElement("div");
      $(modalContainer).attr("class", "modal");
      $(modalContainer).attr("id", parkTitle);
    let modalBackground = document.createElement("div");
      $(modalBackground).attr("class", "modal-background");
      $(modalContainer).prepend(modalBackground);
    let modalCard = document.createElement("div");
      $(modalCard).attr("class", "modal-card");
      $(modalContainer).append(modalCard);
      let modalHead = document.createElement("head");
        $(modalHead).attr("class","modal-card-head");
        $(modalCard).append(modalHead);
        $(modalHead).text(parkTitle + ", only "+distMiles+"mi. away*");
      let modalClose = document.createElement("button");
        $(modalClose).attr("class", "modal-close is-large");
        $(modalClose).attr("aria-label", "close");
        $(modalClose).on("click", function(event) {
          event.preventDefault();
          $(modalContainer).attr("class","modal");
          })
          $(".modal-background").on("click", function(event) {
            event.preventDefault();
            $(modalContainer).attr("class","modal");
            })
        $(modalContainer).append(modalClose);
      let modalSection = document.createElement("section");
        $(modalSection).attr("class", "modal-card-body");
        $(modalSection).text(parkDescription);
/// modalsecion below contains modal image background URL & fallback color of orange (#f15025) in case image does not load. ///
        $(modalSection).attr("style","background-image:url('assets/northern-forest.jpg'); background-size: cover; color: #fff; background-repeat: no-repeat;background-color: #f15025;");
          descriptionHeading = document.createElement('H2');
          descriptionHeading.innerHTML = "<u>Why Visit</u>";
          parkWeeklyHours = document.createElement('ul');
          parkWeeklyHours.innerHTML = "<u>Hours</u>";
          dayofWeek = [standardHoursMonday, standardHoursTuesday, standardHoursWednesday, standardHoursThursday, standardHoursFriday, standardHoursSaturday, standardHoursSunday];
          for (let day=0; day< dayofWeek.length; day++){
              parkDailyHours =document.createElement('li');
              parkWeeklyHours.appendChild(parkDailyHours);
              parkDailyHours.innerHTML=parkDailyHours.innerHTML + dayofWeek[day];
          }
        $(modalSection).prepend(descriptionHeading);
        $(modalSection).append(parkWeeklyHours);
        parkDirectionURL = document.createElement('a');
          $(parkDirectionURL).attr("target", "_blank");
          $(parkDirectionURL).attr("href",directionURL);
          parkDirectionURL.innerHTML = "directions to " + parkTitle;
        $(modalSection).append(parkDirectionURL);
        $(modalCard).append(modalSection);
        $("#modalArea").append(modalContainer);
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
            $(modalContainer).attr("class", "modal is-active");
           })
  $("#location-title").text(fullName);
  $("#location-info").text(addressLine2);


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