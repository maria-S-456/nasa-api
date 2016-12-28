// global variables
var searchApiUrl = 'https://api.nasa.gov/planetary/apod';
var apiKey = 'EhG1k6n5owkDLwymr8VLuyohnQbd4xYK3bUigawl';


function searchResults(data) {
  var results = $('.results');
  results.empty();
  var imageLink = data.url;
  var heading = data.title;
  var descp =data.explanation;
  var date= data.date;
  var elem = '<h1>"'+heading+'"</h1><h2>"'+ date +'"</h2><p>"'+descp+'"</p><img class="card-img-top" src="'+ imageLink +'" /></a>';
  results.append(elem);
}

function searchNasa(searchText, handleResultsFn) {
  var data = {
  api_key: apiKey,
  date: searchText,
  }

  $.getJSON(searchApiUrl, data, handleResultsFn);
}

function handleSearchSubmit() {
  $('#search-form').submit(function(event){
  event.preventDefault();
  var searchText = $(event.currentTarget).find('.search-text').val().trim();
  searchNasa(searchText, searchResults);
  });
}

$(document).ready(function() {
  handleSearchSubmit();
});