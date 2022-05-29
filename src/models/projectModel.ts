const db = require('../config/db').promise();

interface IgetProjectByMobileWithName {
	mobile_number: string,
	name: string
}

const getProjectByMobileWithName = async ( form: IgetProjectByMobileWithName ) => {
	const {mobile_number, name} = form;

	const [result] = await db.query(`SELECT * FROM project WHERE mobile_number=${mobile_number} AND name='${name}'`);

	return result;
};

export = {
	getProjectByMobileWithName: getProjectByMobileWithName,
}
