# google-past-year-bookmarklet
A bookmarklet to filter google searches to the past year

Google allows you to do an advanced search that filters results to the last Year/Week/Day. I use this feature a lot, especially searching for developer issues/solutions. I made this bookmarklet cause the mobile site doesn't offer that feature.

If you click this bookmark, it will add the "Past Year" filter to the current google search, or open google with the past year filter set.

### Install
Look at the source first. Don't just run other people's JS from your browser. 

After looking at the code, make a new bookmark and add this as the URL:

```
javascript:(function(){var searchHost="https://www.google.com";var appendPastYear=function(url){var pastYear="&tbs=qdr:y";return window.location.href=url+"?"+pastYear};if(window.origin===searchHost)return appendPastYear(window.location.href);return appendPastYear(searchHost)})();
```
