import express from 'express';
import projectController from '../controllers/projectController';

const router = express.Router();

//router.get('', projectController.getProjects);
router.get('/:mobile_number/:name', projectController.getProjectByMobileWithName);
router.post('', projectController.postProject);
router.put('', projectController.updateProject);
//router.delete('', projectController.deleteProject);

export = router;

