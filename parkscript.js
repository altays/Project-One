let queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=MD&api_key=C20X2gP148EDeslk7stqM8BU6u6WmOqbAdPeKG8C";
    
$.ajax({ //
    url: queryURL, 
    method: "GET"
}).then(function(response){
    let npsResponse = response;
    console.log(npsResponse);

    let fullName = npsResponse.data[0].fullName;
    let contactEmail = npsResponse.data[0].contacts[1];
    let contactPhone;
    let entranceFee;
    let directionInfo;
    let directionURL;
    let standardHours;
    let physicalAddress;
    let latitude;
    let longitude;
    let images;

    console.log("fullname: " + fullName + "\nEmail: " + contactEmail);
  })