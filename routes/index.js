const express = require('express');
const router = express.Router();

//handles get request on the homepage
router.get("/", (request, response) => {
    response.send("Hello Homepage!");
});

module.exports = router;