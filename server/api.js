
import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

const pool = Connection;

router.get("/", async (req, res) => {
	try {
		res.json("Welcome to Class Planner API");
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/users", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM users'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/school", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM school'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/cohort", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM cohort'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/module", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM module'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/lesson", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT id,cohort,module,week_number,syllabus_link,date,starttime,endtime FROM lesson ORDER BY date'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});



router.get("/lesson_role", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM lesson_role'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/signed_volunteers", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM signed_volunteers'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/lesson_role_link", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM lesson_role_link'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/cohort_lesson_link", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM cohort_lesson_link'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/cohort_lesson_user_link", async (req, res) => {
	try {
		const results = await pool.query(
			'SELECT * FROM cohort_lesson_user_link'
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});


router.post("/login", async (req, res) => {
	try { let email = req.body.email;
  console.log(`\nemail: ${typeof email}`);
  console.log(`${email}`);
  let password = req.body.password;
  console.log(`\npassword: ${typeof password}`);
  console.log(`${password}`);
		
		res.status(200).json({
			status: "success",
			email: `${email}`,
			password: `${password}`
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.post("/register", async (req, res) => {
	try {  let fname = req.body.fname;
  console.log(`\nfname: ${typeof fname}`);
  console.log(`${fname}`);
  let lname = req.body.lname;
  console.log(`\nlname: ${typeof lname}`);
  console.log(`${lname}`);
		let email = req.body.email;
  console.log(`\nemail: ${typeof email}`);
  console.log(`${email}`);
  let password = req.body.password;
  console.log(`\npassword: ${typeof password}`);
  console.log(`${password}`);
		
		res.status(200).json({
			status: "success",
			fname: `${fname}`,
			lname: `${lname}`,
			email: `${email}`,
			password: `${password}`
		});
	} catch (error) {
		console.log(error.message);
	}
});


router.post("/CreateClass", async (req, res) => {
	try { 
		let cohort = req.body.cohort;
 		 let lesson = req.body.lesson;
		 let date = req.body.date;
		 let module = req.body.module;
		 let material = req.body.material;
		 let startTime = req.body.startTime;
		 let endTime = req.body.endTime;
		 let leadTeacher = req.body.leadTeacher;
		 let leadTeacherQuantity = req.body.leadTeacherQuantity;
		 let assistantLeadTeacher = req.body.assistantLeadTeacher;
		 let assistantLeadTeacherQuantity = req.body.assistantLeadTeacherQuantity;
		 let teachingAssistant = req.body.teachingAssistant;
		 let teachingAssistantQuantity = req.body.teachingAssistantQuantity;
		 let coordinator = req.body.coordinator;
		 let coordinatorQuantity = req.body.coordinatorQuantity;
		 let zoomMaster = req.body.zoomMaster;
		 let zoomMasterQuantity = req.body.zoomMasterQuantity;
		 let personalDevelopment = req.body.personalDevelopment;
		 let personalDevelopmentQuantity = req.body.personalDevelopmentQuantity;
	 {/*	res.status(200).json({
			status: "success",
			cohort: `${cohort}`,
			lesson: `${lesson}`,
			date: `${date}`,
			module: `${module}`,
			material: `${material}`,
			startTime: `${startTime}`,
			endTime: `${endTime}`,
			leadTeacher:`${leadTeacher}`,
			leadTeacherQuantity:`${leadTeacherQuantity}`,
			assistantLeadTeacher:`${assistantLeadTeacher}`,
			assistantLeadTeacherQuantity:`${assistantLeadTeacherQuantity}`,
			teachingAssistant:`${teachingAssistant}`,
			teachingAssistantQuantity:`${teachingAssistantQuantity}`,
			coordinator:`${coordinator}`,
			coordinatorQuantity:`${coordinatorQuantity}`,
			zoomMaster:`${zoomMaster}`,
			zoomMasterQuantity:`${zoomMasterQuantity}`,
			personalDevelopment:`${personalDevelopment}`,
			personalDevelopmentQuantity:`${personalDevelopmentQuantity}`
		});*/}
			const result2 = await pool.query(
			 "INSERT INTO lesson (cohort,week_number, syllabus_link , module, date,starttime,endtime,leadteacher,assistantleadteacher,teachingassistant,coordinator,zoommaster,personaldevelopment ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
			 [cohort,lesson,material,module,date,startTime,endTime,leadTeacherQuantity,assistantLeadTeacherQuantity,teachingAssistantQuantity,coordinatorQuantity,zoomMasterQuantity,personalDevelopmentQuantity]);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.post("/signed_volunteers", async (req, res) => {
	try { 
		 let role = req.body.role;
		 let fullName = req.body.fullName;
		 let email = req.body.email;
		 let lesson_id = req.body.lesson_id;
 {/*	 	res.status(200).json({
			status: "success",
			role:`${role}`,
			fullName:`${fullName}`,
			email:`${email}`
		});});*/}
			const results = await pool.query(
			"INSERT INTO signed_volunteers (full_name, email, role_id, lesson_id) VALUES ($1,$2,$3,$4)",[fullName,email,role,lesson_id]);
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});
router.get("/signed_volunteers/:lessonId", async (req, res) => {
	try {
		 let lesson_id = req.params.lessonId;
 {/*	 	res.status(200).json({
			status: "success",
			role:`${role}`,
			fullName:`${fullName}`,
			email:`${email}`
		});});*/}
			const results = await pool.query(
			"SELECT * FROM signed_volunteers  where lesson_id=$1",[lesson_id]);
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

router.delete("/lesson/:lessonId", async (req, res) => {
	try {
		let lesson_id = req.params.lessonId;
		{/*	 let lesson_id = req.params.lessonId;
 	 	res.status(200).json({
			status: "success",
			role:`${role}`,
			fullName:`${fullName}`,
			email:`${email}`
		});*/}
		const results = await pool.query(
			"DELETE FROM lesson where lesson_id=$1",[lesson_id]);
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

export default router;
