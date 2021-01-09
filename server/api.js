
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
			'SELECT lesson.id ,name,week_number,date,time FROM lesson INNER JOIN module ON module.id = module_id ORDER BY lesson.id'
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

export default router;
