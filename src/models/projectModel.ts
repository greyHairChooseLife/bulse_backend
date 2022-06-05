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
	projectDescription: string
	bankAccount: number
	bankHost: string
	bankHolderName: string
}
// id                  | int(11)      | NO   | PRI | NULL    | auto_increment |
//| registered_datetime | datetime     | 
//| mobile_number       | int(11)      | 
//| name                | varchar(15)  | 
//| project_subject     | varchar(50)  | 
//| project_description | text         | 
//| project_keyword     | varchar(100) | 
//| project_date        | date         | 
//| project_time        | int(11)      | 
//| project_hour        | int(11)      | 
//| confirmatory        | tinyint(1)   | o필수정보 아닌 것으로 수정 또는 기본 값 제공, 다른 라우터 계획하자.
//| confirmatory_log    | varchar(500) | o필수정보 아닌 것으로 수정 또는 기본 값 제공, 다른 라우터 계획하자.
//| bank_account        | int(11)      | 
//| bank_host           | varchar(20)  | 
//| bank_holder_name    | varchar(20)  | 
//| attendee_id         | int(11)      | o필수정보 아닌 것으로 수정 또는 기본 값 제공, 다른 라우터 계획하자.
//| attendee_messsage   | text         | o필수정보 아닌 것으로 수정 또는 기본 값 제공, 다른 라우터 계획하자.
//| visited             |    	   	   | o필수정보 아닌 것으로 수정 또는 기본 값 제공, 다른 라우터 계획하자.

const postProject = async ( form: INewProject ) => {
	// registerDate: Date, identityName: string identityMobileNumber: string projectDate: Date projectTime: number projectHour: number projectSubject: string projectDescription: string bankAccount: number bankHost: string bankHolderName: string
	console.log(form);
	//db.query(`INSERT INTO project (registered_datetime, mobile_number, name, project_subject, project_description, project_keyword, project_date, project_time, project_hour, bank_account, bank_host, bank_holder_name) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id_number, Question, comment, counter, writing_date, writing_time, temperal_year, temperal_month, temperal_date]
}

export = {
	getProjectByMobileWithName: getProjectByMobileWithName,
	postProject: postProject,
}
