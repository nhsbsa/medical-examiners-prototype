// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.use('/me-journey', require('./views/me-journey/_routes'));
router.use('/meo-journey', require('./views/meo-journey/_routes'));

// Coroner referral routes //
router.get(/referralMethod/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('coroner-ref'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('external-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});








module.exports = router;
