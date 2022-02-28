import express from 'express'
import users from '../controller/userController'
const router = express.Router();

router.get('/todo', users.gettodo).post('/todo', users.posttodo)
router.delete('/:id', users.deletetodo)

export default router

