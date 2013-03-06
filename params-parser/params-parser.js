/**
 *  @fileoverview Utility for parsing the parameters from a URL.
 *  @author matt.west@kojilabs.com (Matt West)
 *  @license Copyright 2013 Matt West. Licensed under MIT (http://opensource.org/licenses/MIT).
 */

/**
 *  Parse the params from a given url and returns an object consisting of
 *  the parameters and their values.
 *
 *  @param {string} url The URL from which the params are to be parsed.
 *  @return An object consisting of key/value pairs for the 
 *      parameters.
 */
function parseParams(url) {
  // Split the URL at the start of the params string.
  var sections = url.split('?');

  // Split the params string into an array of params.
  var paramsArray = sections[sections.length - 1].split('&');

  // Create a new object that will hold the params.
  var params = {};

  // Loop through each param and add it to the params object.
  for (var i = 0; i < paramsArray.length; i++) {
    // Extract the key and value.
    var param = paramsArray[i].split('=');
    var key = param[0];
    var value = param[1];

    // Add the key/value pair to the object.
    params[key] = value;
  }

  return params;
}
