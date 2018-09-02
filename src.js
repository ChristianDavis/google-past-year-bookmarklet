javascript:(function(){
  var searchHost = "https://www.google.com";
  var appendPastYear = function(url) {
    var pastYear = '&tbs=qdr:y';
    return window.location.href = url+'?'+pastYear;
  };
  if (window.origin === searchHost) {
    return appendPastYear(window.location.href);
  }
  return appendPastYear(searchHost);
})();