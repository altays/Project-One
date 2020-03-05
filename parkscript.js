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

$.ajax({ //
    url: queryURL, 
    method: "GET"
}).then(function(response){
    console.log(response);
    npsResponse=response;

    fullName = response.data[0].fullName;
    contactEmail = response.data[0].contacts["emailAddresses"][0].emailAddress;
    contactPhone = response.data[0].contacts.phoneNumbers[0].phoneNumber;
    directionInfo=response.data[0].directionsInfo;
    directionURL=response.data[0].directionsUrl;
    standardHoursMonday=response.data[0].operatingHours[0].standardHours.monday;
    standardHoursTuesday=response.data[0].operatingHours[0].standardHours.tuesday;
    standardHoursWednesday=response.data[0].operatingHours[0].standardHours.wednesday;
    standardHoursThursday=response.data[0].operatingHours[0].standardHours.thursday;
    standardHoursFriday=response.data[0].operatingHours[0].standardHours.friday;
    standardHoursSaturday=response.data[0].operatingHours[0].standardHours.saturday;
    standardHoursSunday=response.data[0].operatingHours[0].standardHours.sunday;
    latitude=response.data[0].latitude;
    longitude=response.data[0].longitude;
    description = response.data[0].description;
    
    console.log("fullname: " + fullName + "\nEmail: " + contactEmail + "\nPhone: " + contactPhone + "\nDirections: " + directionInfo + "\nLink to Directions: " + directionURL);
    console.log("latitude: " + latitude + "\nlongitude: " + longitude + "\nDescription: " + description);
    console.log("Monday hours " + standardHoursMonday + "\nTuesday hours " + standardHoursTuesday +"\nWednesday hours " + standardHoursWednesday + "\nThursday hours " + standardHoursThursday + "\nFriday hours " + standardHoursFriday +"\nSaturday hours " + standardHoursSaturday + "\nSunday Hours " + standardHoursSunday)
  })