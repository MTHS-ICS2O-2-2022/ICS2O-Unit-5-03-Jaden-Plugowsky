/* This is an alternate version of script.js which I developed as another option, before undoing it and deciding to go simpler.

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
  let answer = "Movies you can see:" // maybe add space here instead

  // Process
  if (age >= 0 && age < 123) {
  if (age > 17) {
    answer += " R-rated or NC-17 movies,"
  }
  if (age > 12) {
    answer += " PG-13 movies," // not sure if "PG-13 rated" has a hyphen like "PG-13-rated" or not
  }
  if (age > 6) {
    answer += " PG movies, and"
  }
  if (age >= 0) {
    answer += " G-rated movies."
  }
  } else {
    answer = "Input is not a possible age."
  }

  // Output
  document.getElementById("answer").innerHTML = answer
}

*/