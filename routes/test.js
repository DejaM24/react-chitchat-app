const express = require('express');
const router = express.Router();

//handles get request on the test page
router.get("/", (request, response) => {
    response.send("Hello Test Page!");
});

module.exports = router;