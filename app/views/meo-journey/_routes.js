// External dependencies
const express = require('express');
const router = express.Router();

router.post('/deceased-person-handler', function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var deathLoc = req.session.data['death-location']

  // Check whether the variable matches a condition
  if (deathLoc == "yes"){
    // Send user to next page
    res.redirect('location-of-death-hospital')
  }
  else {
    // Send user to ineligible page
    res.redirect('location-of-death-community')
  }
})



router.post('/informant-handler', function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var deathLoc = req.session.data['informant']

  // Check whether the variable matches a condition
  if (deathLoc == "yes"){
    // Send user to next page
    res.redirect('informant-contact-yes')
  }
  else {
    // Send user to ineligible page
    res.redirect('informant-contact-no')
  }
})

router.post('/contact-handler', function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var deathLoc = req.session.data['convo-log']

  // Check whether the variable matches a condition
  if (deathLoc == "yes"){
    // Send user to next page
    res.redirect('conversation-log-yes')
  }
  else {
    // Send user to ineligible page
    res.redirect('conversation-log-no')
  }
})
module.exports = router;
