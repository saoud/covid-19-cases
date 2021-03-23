import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CovidCases from './covidCountry';
// import './CovidCases';

// let API = "https://covid-api.mmediagroup.fr/v1"
// let cases = `${API}/cases?country=${country}`; 
// let deaths = `${API}/history?country=${country}&status=deaths`;
// let vaccine = `${API}/vaccines?country=${country}`;


function getElements(response) {
  if (response.All) {
    $('.showConfirmed').text(`The number of confirmed cases in ${response.All.country} is ${response.All.confirmed}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CovidCases.getCases(country);
  getElements(response);
  // const jsonifiedResponse = await response.json();
  // return jsonifiedResponse;
}



  $('#countryButton').click(function() {
    let country = $('#country').val();
    makeApiCall(country);
  });