import express from 'express';
import { getUsers, getUser, createUser, deleteUser,updateUser } from '../controllers/users.js';

const router = express.Router();

//all routes should start with /users
router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id',getUser);

router.patch('/:id',updateUser);

router.delete('/:id',deleteUser);

export default router;