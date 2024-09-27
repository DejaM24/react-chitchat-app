import { Router, request, response } from 'express';
const router = Router();

//handles get request on the homepage
router.get("/", (request, response) => {
    response.send("Hello Homepage!");
});

router.get("/room", (request, response) => {
    response.send("Hello Roompage!")
});

export default router;