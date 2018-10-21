var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "wongkaho"
    }, {
        id: 2,
        username: "李卓諺"
    },{
        id: 3,
        username: "朱詠琪"
    }]);
});

module.exports = router;
