$(document).ready(function(){
  // click event for wiki search
  $("#submit").click(function(){
    var search = $("#search").val().split(" ").join("%20");
    var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&utf8=&format=json&callback=?";
    var resultHTML ="";
    
    // retrieve search results from API
    $.getJSON(wikiURL, function(wiki){
      var apiIndex = wiki.query.search;
      var title;
      var link;
      var sample;
      
      for (var i = 0; i < apiIndex.length; i++) {
        title = apiIndex[i].title;
        link = "https://en.wikipedia.org/?curid=" + apiIndex[i].pageid;
        sample = apiIndex[i].snippet;
        resultHTML += '<div class="card card-body"><h4 class="card-title"><a target="_blank" href='
        resultHTML += link + '>' + title + '</a></h4><br><p class="card-text">' + sample + '</p></div>';
      }
      
      $("#results").html(resultHTML);
      
    });
  }); 
  
  // listen for click on the random search button
  $("#random").click(function(){
    window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
  });
});