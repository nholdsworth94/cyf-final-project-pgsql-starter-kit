
import { query, Router } from "express";

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






router.post("/login", async (req, res) => {
	try { let email = req.body.email;
  console.log(`\nemail: ${typeof email}`);
  console.log(`${email}`);
  let password = req.body.password;
  console.log(`\npassword: ${typeof password}`);
  console.log(`${password}`);
		
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
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
		
	
		 res.status(200);

		setTimeout(res.redirect("https://cyf-finalproject-class-planner.herokuapp.com/LogInPage"),2000);

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
		 let leadTeacherQuantity = req.body.leadTeacherQuantity;
		 let assistantLeadTeacherQuantity = req.body.assistantLeadTeacherQuantity;
		 let teachingAssistantQuantity = req.body.teachingAssistantQuantity;
		 let coordinatorQuantity = req.body.coordinatorQuantity;
		 let zoomMasterQuantity = req.body.zoomMasterQuantity;
		 let personalDevelopmentQuantity = req.body.personalDevelopmentQuantity;
	
		const results =	await pool.query(
			 "INSERT INTO lesson (week_number, syllabus_link , date,starttime,endtime,leadteacher,assistantleadteacher,teachingassistant,coordinator,zoommaster,personaldevelopment,module,cohort ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
			 [lesson,material,date,startTime,endTime,leadTeacherQuantity,assistantLeadTeacherQuantity,teachingAssistantQuantity,coordinatorQuantity,zoomMasterQuantity,personalDevelopmentQuantity,module,cohort]);
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


router.post("/signed_volunteers", async (req, res) => {
	try { 
		 let role = req.body.role;
		 let fullName = req.body.fullName;
		 let email = req.body.email;
		 let lesson_id = req.body.lesson_id;
 
			const results = await pool.query(
			"INSERT INTO signed_volunteers (full_name, email, lesson_id, role_id) VALUES ($1,$2,$3,$4)",[fullName,email,lesson_id,role]);
			res.end();		
	} catch (error) {
		console.log(error.message);
	}
});

router.get("/lesson/delete/:lessonId", async (req, res) => {
	try {
		let lesson_id = req.params.lessonId;
	
		const results = await pool.query(
			"DELETE FROM lesson where id=$1",[lesson_id]);
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
