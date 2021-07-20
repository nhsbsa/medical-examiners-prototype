// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.use('/me-journey', require('./views/me-journey/_routes'));
router.use('/meo-journey', require('./views/meo-journey/_routes'));

// Coroner notification routes //
router.get(/referralMethod/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('coroner-ref'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('external-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});


router.get(/coronerNotification/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('internal-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('case-overview2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/coronerAccept/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('close-case'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('complete-mccd'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Re-open/close case routes //

router.get(/reOpenOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('location-of-death-hospital');
  } else {
    res.redirect('location-of-death-community');
  }
});

router.get(/reOpenTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "amend") {
    res.redirect('re-open'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "concern") {
    res.redirect('add_concern'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "amendCoD") {
    res.redirect('QAP-proposed'); // if both input values are "Yes" - redirect to 'page-name' //
  }else {
    res.redirect('why-registrar-reject'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/reOpenThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('case-overview_closed-cases');
  } else {
    res.redirect('../Coroner_referral2/internal-referral');
  }
});

router.get(/reOpenFour/, function (req, res) {
  if (req.query.radioInlineGroup === "coroner") {
    res.redirect('../Coroner_referral2/internal-referral');
  } else {
    res.redirect('QAP-proposed');
  }
});

router.get(/reOpenFive/, function (req, res) {
  if (req.query.radioInlineGroup === "coroner") {
    res.redirect('../Coroner_referral2/internal-referral');
  } else {
    res.redirect('../closed-cases');
  }
});


router.get(/caseProgress/, function (req, res) {
  if (req.query.radioInlineGroup === "personal") {
    res.redirect('personal-contact'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "professional") {
    res.redirect('professional-contact'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "note") {
    res.redirect('note'); // if both input values are "Yes" - redirect to 'page-name' //
  
}
});





module.exports = router;