import { Request, Response } from 'express'
import projectModel from '../models/projectModel';

const getProjectByMobileWithName = async (req: Request, res: Response) => {
	const {mobile_number, name} = req.params;
	const result = await projectModel.getProjectByMobileWithName({mobile_number, name});
	
	return res.json(result);
}

export = {
	getProjectByMobileWithName: getProjectByMobileWithName,
}

