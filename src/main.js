import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CovidCases from './covidCountry';

// let API = "https://covid-api.mmediagroup.fr/v1"
// let cases = `${API}/cases?country=${country}`; 
// let deaths = `${API}/history?country=${country}&status=deaths`;
// let vaccine = `${API}/vaccines?country=${country}`;

function getElements(response) {
  if (response.All) {
    $('.showConfirmed').text(`The number of confirmed cases in ${response.All.country} is ${response.All.confirmed}`);
    
  } else 
    $('.showErrors').text(`There was an error: ${response.message}`);
  }

  function getVacElements(vacResponse) {
    if (vacResponse.All) {
      $('.showVaccinated').text(`The number of vaccinated people in ${vacResponse.All.country} is ${vacResponse.All.people_vaccinated}`);
    } else
    $('.showVacErrors').text(`There was an error: ${vacResponse.message}`);
  }

async function makeApiCall(country) {
  const response = await CovidCases.getCases(country);
  const vacResponse = await CovidCases.getVaccines(country);
  getElements(response);
  getVacElements(vacResponse)
}

$(document).ready(function() {
$('#countryButton').click(function() {
  let country = $('#country').val();
  console.log(country);
  makeApiCall(country);
});
});