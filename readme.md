#GeoLocation Page#

###Author###

Chris Oudyk- A student at Algonquin College who enjoys learning how to program but has a bad habbit of making things harder on himself by making project extra complicated and misspelling thing regularly.

###Instructions###

1. **Be patient**- The code does work but there is a time delay to help the device figure some of the functions out.
2. Quick Look- All the information is there once it is loaded, and the website helps you realize just how useless the numbers are by making you click a button to show a map.
3. Show the map- Its a quick button labled "where am I?" and it shows the map.

###What it Does in Laymans Terms###

This website is designed to show what the geolocation function in javascript can do.

The order which it accomplishes this is:

1. After loading the basics of the webpage the geolocation function is called.
2. After finishing the function (which does take some time...a loading svg would have been a good idea) the co-oridnates are displayed in written text at the bottom of the page along with the heading and direction of the user.
3. The javascript then makes a call to a Google server which generates a static (un-changeable picture) map where the co-ordinates are with a lable on the exact co-ordinates.
4. Instead of displaying the picture right away a button pops up with the question "Where am I" which, when clicked, disappears and is replaced with the map.

###When would you use this?###

This website would be useful for people who want to understand what is going on around them.  The kind of person who doesn't just want to drive a car, but understand how the parts of a car work.  This website is great for people like that because it shows just how these parts work.  They will however need understand a few things to see what is happening behind the scenes.

**Special Note**: this does not help people who are trying not to be tracked by Google because although the website does give you the option of showing the map or not, the information is still sent to Google either way.

These are:

- An understanding of how programming uses variables to place pieces of information together.
- The understanding of the line by line way that computers exicute code.
- A basic understanding of what longitude and latitude numbers mean.
- Understanding how computers tell time would be helpful but isn't necissary.