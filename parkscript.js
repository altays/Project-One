let incrementButton = $(".increment-button");
let decrementButton = $(".decrement-button");
let index=0;

let queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=MD&limit=5&api_key=C20X2gP148EDeslk7stqM8BU6u6WmOqbAdPeKG8C";
let npsResponse;

let fullName;
let contactEmail;
let contactPhone;
let directionInfo;
let directionURL;
let standardHoursMonday;
let standardHoursTuesday;
let standardHoursWednesday;
let standardHoursThursday;
let standardHoursFriday;
let standardHoursSaturday;
let standardHoursSunday;
let latitude;
let longitude;
let description;
let addressType1;
let addressType2;
let displayAddress;

// helper function

function displayPhysical(addressType1,addressType2) {
    if (addressType1 == "Physical") {
        return addressType1
    } else {
        return addressType2
    }
}

incrementButton.on("click",function(){
    index++;
    $.ajax({ //
        url: queryURL, 
        method: "GET"
    }).then(function(response){
        console.log(response);
        npsResponse=response;
    

        fullName = response.data[index].fullName;
        contactEmail = response.data[index].contacts["emailAddresses"][0].emailAddress;
        contactPhone = response.data[index].contacts.phoneNumbers[0].phoneNumber;
        directionInfo=response.data[index].directionsInfo;
        directionURL=response.data[index].directionsUrl;
        standardHoursMonday=response.data[index].operatingHours[0].standardHours.monday;
        standardHoursTuesday=response.data[index].operatingHours[0].standardHours.tuesday;
        standardHoursWednesday=response.data[index].operatingHours[0].standardHours.wednesday;
        standardHoursThursday=response.data[index].operatingHours[0].standardHours.thursday;
        standardHoursFriday=response.data[index].operatingHours[0].standardHours.friday;
        standardHoursSaturday=response.data[index].operatingHours[0].standardHours.saturday;
        standardHoursSunday=response.data[index].operatingHours[0].standardHours.sunday;
        latitude=response.data[index].latitude;
        longitude=response.data[index].longitude;
        description = response.data[index].description;

        addressType1=response.data[index].addresses[0].type;
        addressType2=response.data[index].addresses[1].type;
        
        console.log("fullname: " + fullName + "\nEmail: " + contactEmail + "\nPhone: " + contactPhone + "\nDirections: " + directionInfo + "\nLink to Directions: " + directionURL);
        console.log("latitude: " + latitude + "\nlongitude: " + longitude + "\nDescription: " + description);
        console.log("Monday hours " + standardHoursMonday + "\nTuesday hours " + standardHoursTuesday +"\nWednesday hours " + standardHoursWednesday + "\nThursday hours " + standardHoursThursday + "\nFriday hours " + standardHoursFriday +"\nSaturday hours " + standardHoursSaturday + "\nSunday Hours " + standardHoursSunday)
        console.log("Address 1 type: " + displayPhysical(addressType1,addressType2));
    })
    

})

decrementButton.on("click",function(){
    index--;
    if (index < 0) {
        index = 0;
    }
    $.ajax({ //
        url: queryURL, 
        method: "GET"
    }).then(function(response){
        console.log(response);
        npsResponse=response;
    
        fullName = response.data[index].fullName;
        contactEmail = response.data[index].contacts["emailAddresses"][0].emailAddress;
        contactPhone = response.data[index].contacts.phoneNumbers[0].phoneNumber;
        directionInfo=response.data[index].directionsInfo;
        directionURL=response.data[index].directionsUrl;
        standardHoursMonday=response.data[index].operatingHours[0].standardHours.monday;
        standardHoursTuesday=response.data[index].operatingHours[0].standardHours.tuesday;
        standardHoursWednesday=response.data[index].operatingHours[0].standardHours.wednesday;
        standardHoursThursday=response.data[index].operatingHours[0].standardHours.thursday;
        standardHoursFriday=response.data[index].operatingHours[0].standardHours.friday;
        standardHoursSaturday=response.data[index].operatingHours[0].standardHours.saturday;
        standardHoursSunday=response.data[index].operatingHours[0].standardHours.sunday;
        latitude=response.data[index].latitude;
        longitude=response.data[index].longitude;
        description = response.data[index].description;

        addressType1=response.data[index].addresses[0].type;
        addressType2=response.data[index].addresses[1].type;
        
        console.log("fullname: " + fullName + "\nEmail: " + contactEmail + "\nPhone: " + contactPhone + "\nDirections: " + directionInfo + "\nLink to Directions: " + directionURL);
        console.log("latitude: " + latitude + "\nlongitude: " + longitude + "\nDescription: " + description);
        console.log("Monday hours " + standardHoursMonday + "\nTuesday hours " + standardHoursTuesday +"\nWednesday hours " + standardHoursWednesday + "\nThursday hours " + standardHoursThursday + "\nFriday hours " + standardHoursFriday +"\nSaturday hours " + standardHoursSaturday + "\nSunday Hours " + standardHoursSunday)
        console.log("Address 1 type: " + displayPhysical(addressType1,addressType2));
    })
    

})