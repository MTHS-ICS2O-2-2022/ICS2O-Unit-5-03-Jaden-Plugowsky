// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function checkAgePressed() {
  // This function takes a user-given age and checks which movie ratings the age is allowed to see
  // Input through Textfield
  const age = parseInt(document.getElementById("age").value)

  // Process
  // pass

  // Output
  if (age >= 0) {
    if (age > 17) {
      document.getElementById("answer").innerHTML =
        "You can see an R-rated or NC-17 movie by yourself."
    } else if (age > 12) {
      document.getElementById("answer").innerHTML =
        "You can see a PG-13 rated movie by yourself."
    } else if (age > 6) {
      document.getElementById("answer").innerHTML =
        "You are likely allowed to see PG movies with a guardian nearby, along with any G-rated movies."
    } else {
      document.getElementById("answer").innerHTML =
        "You are only able to watch G-rated movies."
    }
  } else {
    document.getElementById("answer").innerHTML = "Input is not a possible age."
  }
}

/** Do note: I made an alternate version of this program that creates a list and adds to it the movies one is allowed to see as it goes.
 *  However, this version didn't use any elseif statements, as it needed every if statement to work in sequential order to add to the list.
 *  That version can be found in the js folder at /js/scriptalternate.js, although it is all commented out.
 */
