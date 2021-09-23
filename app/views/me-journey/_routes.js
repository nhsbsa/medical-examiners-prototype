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

router.post('/qap-handler', function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var deathLoc = req.session.data['qap-discussion']

  // Check whether the variable matches a condition
  if (deathLoc == "yes"){
    // Send user to next page
    res.redirect('discussion-QAP-yes')
  }
  else {
    // Send user to ineligible page
    res.redirect('discussion-QAP-no')
  }
})


router.post('/qap-handler-yes', function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var deathLoc = req.session.data['qap-discussion-yes']

  // Check whether the variable matches a condition
  if (deathLoc == "new-cause"){
    // Send user to next page
    res.redirect('discussion-QAP-new-cause')
  }
  else {
    // Send user to ineligible page
    res.redirect('case-overview')
  }
})

//Coroner Ref

router.post(/portal-handler/, function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var portal = req.session.data['portal']

  // Check whether the variable matches a condition
  if (portal == "yes"){
    // Send user to next page
    res.redirect('case-overview')
  }
  else {
    // Send user to ineligible page
    res.redirect('coroner-ref_iteration-2')
  }
})


//MFA Iteration 2

router.post(/download-handler/, function (req, res) {
  // Make a variable and give it the value from 'know-nhs-number'
  var download = req.session.data['download']

  // Check whether the variable matches a condition
  if (download == "desktop"){
    // Send user to next page
    res.redirect('enter-key')
  }
  else {
    // Send user to ineligible page
    res.redirect('get-security-code')
  }
})







module.exports = router;
