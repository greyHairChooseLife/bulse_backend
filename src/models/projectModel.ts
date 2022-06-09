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

interface INewProject {
	registerDate: Date,
	identityName: string
	identityMobileNumber: string
	projectDate: Date
	projectTime: number
	projectHour: number
	projectSubject: string
	projectKeyword?: string
	projectDescription: string
	bankAccount: number
	bankHost: string
	bankHolderName: string
}

const postProject = async ( form: INewProject ) => {
	const {registerDate, identityName, identityMobileNumber, projectDate, projectTime, projectHour, projectSubject, projectDescription, bankAccount, bankHost, bankHolderName, projectKeyword} = form; 

	//	한국 기준 시간으로 조정 : +9 시간
	const registerDateOrigin = new Date(registerDate);
	const projectDateOrigin = new Date(projectDate);
	registerDateOrigin.setHours(registerDateOrigin.getHours()+9);
	projectDateOrigin.setHours(projectDateOrigin.getHours()+9);
	//	mariadb의 datetime 데이터 타입에 맞게 형식 변환
	const formattedRegisterDate = registerDateOrigin.toISOString().slice(0, 19).replace('T', ' ');
	const formattedProjectDate = projectDateOrigin.toISOString().slice(0, 19).replace('T', ' ');

	const result = await db.query(`INSERT INTO project (registered_datetime, mobile_number, name, project_subject, project_description, project_keyword, project_date, project_time, project_hour, bank_account, bank_host, bank_holder_name) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [formattedRegisterDate, identityMobileNumber, identityName, projectSubject, projectDescription, projectKeyword, formattedProjectDate, projectTime, projectHour, bankAccount, bankHost, bankHolderName]);

	return result;
}

export = {
	getProjectByMobileWithName: getProjectByMobileWithName,
	postProject: postProject,
}
