import {Router} from 'express';

const authRouter = Router(); // Create a new router instance

authRouter.post('/signUp', (req, res) => {res.send( {message: 'Sign Up'})}); // Define the signUp route
authRouter.post('/signIn', (req, res) => {res.send( {message: 'Sign In'})});
authRouter.post('/signOut', (req, res) => {res.send( {message: 'Sign Out'})});

export default authRouter;