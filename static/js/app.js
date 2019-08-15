// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Select the submit button
var date_submit = d3.select("#date-submit");

//Find the table...
var tbody = d3.select("tbody");

//click the button to do the search
date_submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Setting up the input elements to get the search
  var inputDateElement = d3.select("#date-search-form-input");
  var inputCityElement = d3.select("#city-search-form-input");
  var inputStateElement = d3.select("#state-search-form-input");
  var inputCountryElement = d3.select("#country-search-form-input");
  var inputShapeElement = d3.select("#shape-search-form-input");
  var inputDurationElement = d3.select("#minutes-search-form-input");
  
  // Dates button code
  var inputValue = inputDateElement.property("value");
  var filteredDateData = sightings.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredDateData);
  
  //Cities Buton code
  var inputValue = inputCityElement.property("value");
  var filteredCityData = sightings.filter(sighting => sighting.city === inputValue);
  console.log(filteredCityData);
  
  //States code
  var inputValue = inputStateElement.property("value");
  var filteredStateData = sightings.filter(sighting => sighting.state === inputValue);
  console.log(filteredStateData);
  
  //Country code
  var inputValue = inputCountryElement.property("value");
  var filteredCountryData = sightings.filter(sighting => sighting.country === inputValue);
  console.log(filteredCountryData);
  
  //Shape code
  var inputValue = inputShapeElement.property("value");
  var filteredShapeData = sightings.filter(sighting => sighting.shape === inputValue);
  console.log(filteredShapeData);
  
  //duration code
  var inputValue = inputDurationElement.property("value");
  var filteredMinutesData = sightings.filter(sighting => sighting.durationMinutes === inputValue);
  console.log(filteredMinutesData);
  

//Code that appends the search to the table

filteredCityData.forEach((entry) => {
  var row = tbody.append("tr");
  Object.entries(entry).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

filteredDateData.forEach((date) => {
  var row = tbody.append("tr");
  Object.entries(date).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

filteredCountryData.forEach((country) => {
  var row = tbody.append("tr");
  Object.entries(country).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

filteredShapeData.forEach((shape) => {
  var row = tbody.append("tr");
  Object.entries(shape).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


filteredMinutesData.forEach((minutes) => {
  var row = tbody.append("tr");
  Object.entries(minutes).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

filteredStateData.forEach((state) => {
  var row = tbody.append("tr");
  Object.entries(state).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

});