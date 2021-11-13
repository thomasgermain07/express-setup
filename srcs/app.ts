import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

async function createApi(port = 3000) {
	const server = express();

	server.listen(port, () => {
		console.log('Server online');
	});
}

async function main() {
	try {
		await createApi();
	} catch (err) {
		console.error(err);
	}
}

main();
