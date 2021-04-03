import {Router} from 'express';
const router = Router();
import * as blogController from './blog.controller';

router.get("/blog", blogController.getPosts);

router.get("/blog/:prefix", blogController.getPost);

router.delete("/blog/:prefix", blogController.detelePost);

router.put("/blog/:prefix", blogController.updatePost);

router.post("/blog", blogController.createPost);

export default router; 