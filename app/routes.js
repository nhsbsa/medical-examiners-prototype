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

// Create quick case //
router.get(/createCase/, function (req, res) {
  if (req.query.radioInlineGroup === "new") {
    res.redirect('create-case'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "quick") {
    res.redirect('create-case-quick'); // if both input values are "Yes" - redirect to 'page-name' //
  
}
});

// Side nav //
router.get(/MEreview/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('re-open-cod_inprogress_done');
  } else {
    res.redirect('../Coroner_referral2/internal-referral');
  }
});

// Location of death //
router.get(/locationOfDeath/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('acute-death-martin-lincoln');
  } else {
    res.redirect('community-death-martin-lincoln');
  }
});

router.get(/locationDeathTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('acute-death-martin-lincoln2');
  } else {
    res.redirect('community-death-martin-lincoln2');
  }
});


router.get(/unknown/, function (req, res) {
  if (req.query.radioInlineGroup === "Hospital") {
    res.redirect('acute-death-martin-lincoln3');
  } else {
    res.redirect('community-death-martin-lincoln3');
  }
});

// Case history //
router.get(/addEvent/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('add-contact-martin-lincoln');
  } else {
    res.redirect('add-kpic-martin-lincoln');
  }
});

router.get(/addConvo/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('personal-conversation-martin-lincoln');
  } else {
    res.redirect('case-history-martin-lincoln3');
  }
});

router.get(/addKeyPersonConvo/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('kpic-conversation-martin-lincoln');
  } else {
    res.redirect('case-history-martin-lincoln7');
  }
});


// Coroner notification //
router.get(/coronerRequired/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('internal-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('coroner-notification-martin-lincoln2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/portalHandler/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('coroner-notification-martin-lincolnSent');
  } else {
    res.redirect('coroner-notification-martin-lincolnNotsent');
  }
});

router.get(/portalCoroner/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('coroner-notification-date-time');
  } else {
    res.redirect('coroner-notification-martin-lincoln-not-sent');
  }
});


 // AP's proposed CoD // 
router.get(/qapHandler/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('ap-discussion-yes');
  } else {
    res.redirect('ap-discussion-no');
  }
  });

router.get(/deceasedPerson-handler/, function (req, res) {
  if (req.query.radioInlineGroup === "Acute") {
    res.redirect('medical-record-proposed-cause');
  } else {
    res.redirect('AP-added4');
  }
});
  
router.get(/apCodKnown/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('qap-proposed2');
  } else {
    res.redirect('case-scrutiny-martin-lincoln3');
  }
});
router.get(/apCodnoinput/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('qap-proposed2-noinput');
  } else {
    res.redirect('checkanswers-coroner-notification-noinput');
  }
});

router.get(/apKnown/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('qap-proposed3');
  } else {
    res.redirect('checkanswers-coroner-notification');
  }
});

 // Discussion with AP // 
 router.get(/apDiscussion/, function (req, res) {
  if (req.query.qapDiscussionYes === "new-cause") {
    res.redirect('discussion-QAP-new-cause');
  } else {
    res.redirect('case-scrutiny-martin-lincoln4');
  }
  });


 // ME Scrutiny // 

 router.get(/meScrutiny/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('medical-record-proposed-cause');
  } else {
    res.redirect('case-scrutiny-martin-lincoln4');
  }
  });


   // MFA // 

 router.get(/authMethod/, function (req, res) {
  if (req.query.radioGroup === "totp") {
    res.redirect('set-up-authenticator');
  } else {
    res.redirect('enter-mobile');
  }
  });

  router.get(/downloadHandler/, function (req, res) {
    if (req.query.radioGroup === "desktop") {
      res.redirect('enter-key');
    } else {
      res.redirect('get-security-code');
    }
    });
  

     // Close cases // 

 router.get(/closeCase/, function (req, res) {
  if (req.query.radioGroup === "yes") {
    res.redirect('open-cases-3');
  } else {
    res.redirect('case-overview-martin-lincoln4');
  }
  });

module.exports = router;