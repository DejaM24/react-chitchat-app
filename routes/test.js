import { Router } from 'express';
const router = Router();

//handles get request on the test page
router.get("/", (request, response) => {
    response.send("Hello Test Page!");
});

export default router;