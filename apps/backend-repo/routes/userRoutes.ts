import express from 'express';
import { apiController } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router: express.Router = express.Router();

router.post('/login', apiController.login);
router.post('/create-user-data', apiController.addUser);
router.get('/fetch-user-data', authMiddleware, apiController.getAllUsers);
router.get('/detail-user-data/:id', authMiddleware, apiController.getUserById);
router.put('/update-user-data/:id', authMiddleware, apiController.updateUser);
router.delete('/delete-user-data/:id', authMiddleware, apiController.deleteUser);

export { router as userRoutes };
