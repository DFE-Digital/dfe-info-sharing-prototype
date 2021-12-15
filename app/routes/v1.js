const express = require('express');
const router = express.Router();

const verNum = 1;




router.post(`/v1/directory/search-type`, function (req, res) {
  
    let searchType = req.session.data['child-or-professionals'];
    
      if (
        searchType === 'Child'
         ) {
          res.redirect(`/v1/directory/child-search`);
      }
     else res.redirect(`/v1/directory/professional-search`);
    });






//*routes to be placed above this line//
module.exports = router

