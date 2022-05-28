import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('welcome, sangyeon!!');
});

app.listen('3000', () => {
	console.log(`
		!! server listening on port : 1234 !!
		`);
});
