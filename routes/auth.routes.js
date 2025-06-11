import {Router} from 'express';
import { signIn, signOut, signUp } from '../controller/auth.controller.js';

const authRouter = Router(); // Create a new router instance

authRouter.post('/signUp', signUp); // Define the signUp route
authRouter.post('/signIn', signIn);
authRouter.post('/signOut', signOut);

export default authRouter;