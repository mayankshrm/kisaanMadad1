
import bodyParser from "body-parser";

import express from "express";

const router= express.Router();


import { createPost, getPost } from "../controller/postData.js";

router.get("/",getPost);


router.post("/",createPost);


export default router;

