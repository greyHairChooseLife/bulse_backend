import express, { Request, Response } from 'express';
import env from 'dotenv';
env.config();
import cors from 'cors';
import methodOverride from 'method-override';

import projectRouter from './routers/projectRouter';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '1mb'}));

app.use(cors()); 		//enble pre-flight
app.use(methodOverride('_method'));

app.use('/project', projectRouter);

app.get('/', (req: Request, res: Response) => {
	res.send('this is bulse backend server home page!!');
});

app.listen(process.env.PORT, () => {
	console.log(`
		!! server listening on port ${process.env.PORT} :  !!
		`);
});
