$(function(){
  // alert("Im in function");
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
   // alert("Im in getRequest");
  var params = {
    part: 'snippet',
    key: "AIzaSyBSmiexy4KbpxNSArxW5JPAcG3Z61FWazo",
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data);
  });
}

function showResults(results){
 
  var html = "";
  $.each(results, function(index,value){
   
    // html +="SAndeep";
    html += '<p>' + value.snippet.thumbnails.medium.url + '<br></p>';
    // html += '<p>' + value.kind + '<br></p>';
    // console.log(value.kind);
  });
  $('#search-results').html(html);
}