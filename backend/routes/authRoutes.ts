import express from 'express';
import { login, registerUser } from '../controller/userController';


const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", login);

export default router;