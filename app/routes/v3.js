const express = require('express');
const router = express.Router();

const verNum = 3;




router.post(`/v${verNum}/directory/search-type`, function (req, res) {
  
    let searchType = req.session.data['child-or-professionals'];
    
      if (
        searchType === 'Child'
         ) {
          res.redirect(`/v${verNum}/directory/child-search`);
      }
     else res.redirect(`/v${verNum}/directory/professional-search`);
    });



//* Referral routes //
router.post(`/v${verNum}/referral/child-or-young-person`, function (req, res) {
  session.setItem('child', req.session.data);
  res.redirect(`/v${verNum}/referral/consent`);
});

router.post(`/v${verNum}/referral/are-there-any-other-significant-adults`, function (req, res) {
  let answer = req.session.data['significantadults'];

  if (answer === 'Yes') {
    res.redirect(`/v${verNum}/referral/other-significant-adults`);
  } else {
    res.redirect(`/v${verNum}/referral/are-there-any-other-professionals`);
  }
});

//* Referral routes END //



//*routes to be placed above this line//
module.exports = router

