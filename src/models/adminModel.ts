const db = require('../config/db').promise();

const getLast = async () => {

	const [result] = await db.query(`SELECT nickname, status FROM admin ORDER BY id DESC LIMIT 1`);

	return result[0];
};

const beforeLogin = async () => {
	const result = await db.query(`SELECT login_id FROM admin ORDER BY id DESC LIMIT 1`);

	return result[0][0].login_id;
}

const afterLogin = async () => {
	const result = await db.query(`SELECT * FROM admin ORDER BY id DESC LIMIT 1`);

	return result[0][0];
}

export = {
	getLast: getLast,
	beforeLogin: beforeLogin,
	afterLogin: afterLogin,
}
