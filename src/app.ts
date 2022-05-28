import express, { Request, Response } from 'express';
require('dotenv').config();

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('welcome, sangyeon!!');
});

app.listen(process.env.PORT, () => {
	console.log(`
		!! server listening on port ${process.env.PORT} :  !!
		`);
});
