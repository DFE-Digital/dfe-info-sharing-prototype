const express = require('express');
const router = express.Router();

const verNum = 1;





//Version start - start

router.post(`/version-run`, function (req, res) {
    const referral = req.session.data['referral-service-links'];
    const directory = req.session.data['directory-service-links'];

    if (referral === 'Version 1') {
        res.redirect(`/v${verNum}/referrals/index`);
    } else if (directory === 'Version 1') {
        res.redirect(`/v${verNum}/directory/index`);
    }
});



// Version start -  end







module.exports = router

