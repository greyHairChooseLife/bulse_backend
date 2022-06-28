import express from 'express';
import adminController from '../controllers/adminController';

const router = express.Router();

router.get('', adminController.getLast);
router.post('', adminController.login);
//router.put('', projectController.updateProject);
//router.delete('', projectController.deleteProject);

export = router;

