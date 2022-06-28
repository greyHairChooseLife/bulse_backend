import { Request, Response } from 'express'
import adminModel from '../models/adminModel';

const getLast = async (req: Request, res: Response) => {
	const result = await adminModel.getLast();
	
	return res.json(result);
}

const login = (req: Request, res: Response) => {

}

//const postProject = async (req: Request, res: Response) => {
//	const handOver = req.body;
//
//	const result = await projectModel.postProject(handOver);
//
//	return res.json(result);
//}
//
//const updateProject = async (req: Request, res: Response) => {
//	const handOver = req.body;
//
//	const result = await projectModel.updateProject(handOver);
//
//	return res.json(result);
//}

export = {
	getLast: getLast,
	login: login,
}

