import { Router } from 'express';
const router = Router();

//handles get request on the homepage
router.get("/", (request, response) => {
    response.send("Hello Homepage!");
});

export default router;