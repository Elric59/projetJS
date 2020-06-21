const express = require("express");
const router = express.Router();
var mysql = require('mysql');
const pool = mysql.createPool({
    // port: 3306,
    //host     : 'localhost',
    connectionLimit: 10,
    user: 'root',
    password: '',
    database: 'bddquiz'
});

module.exports = router;

router
    .get("/", (req, res) => {
        res.json("API QUIZZ");
    });

router
    .delete("/:id", (req, res) => {
        const data = [req.params.id];
        pool.query('DELETE q,q2,p FROM quiz q JOIN question q2 ON q.idQuiz = q2.idQuiz JOIN proposition p ON q2.idQuestion = p.idQuestion where q.idQuiz=' + data, function (error, result, fields) {
            if (error) {
                throw error;
            }
        });
    });

router
    .patch("/update/question/", (req, res) => {
        const tab = req.body.res;
        for (let t in tab) {
            if (tab[t] != null) {
                pool.query('Update question set phrase = "' + tab[t] + '" where idQuestion=' + t, function (error, result, fields) {
                    if (error) {
                        throw error;
                    }
                });
            }
        }
    });


router
    .patch("/update/proposition/", (req, res) => {
        const tab = req.body.res;
        for (let t in tab) {
            if (tab[t] != null) {
                pool.query('Update proposition set proposition_reponse = "' + tab[t] + '" where idProposition=' + t, function (error, result, fields) {
                    if (error) {
                        throw error;
                    }
                });
            }
        }
    });

router
    .post('/update/image/', async (req, res) => {
        console.log(req.files['file']);
        await pool.query('Update proposition set image_path ="' + req.body.name + '" where idProposition='+req.body.id,);
        req.File.mv('/img/proposition' + req.body, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.status(200).end();
        });
    });

router
    .get("/:id/questions", (req, res) => {
        const data = [req.params.id];
        pool.query('Select * from question where idQuiz=' + data, function (error, result, fields) {
            if (error) {
                throw error;
            } else {
                res.json(result);
            }
        });
    });

router
    .get("/:id/propositions", (req, res) => {
        const data = [req.params.id];
        pool.query('Select * from proposition where idQuestion=' + data, function (error, result, fields) {
            if (error) {
                throw error;
            } else {
                res.json(result);
            }
        });
    });

router
    .get("/proposition/:id", (req, res) => {
        const data = [req.params.id];
        pool.query('Select * from proposition where idProposition=' + data, function (error, result, fields) {
            if (error) {
                throw error;
            } else {
                res.json(result);
            }
        });
    });

router
    .get("/quizz", (req, res) => {
        if (req.query.motcle != null) {
            const data = [req.query.motcle];
            console.log(data);
            pool.query('Select * from quiz where motscles like "%' + data + "%\"", function (error, result, fields) {
                if (error) {
                    throw error;
                } else {
                    res.json(result);
                }
            });
        } else {
            pool.query("Select * from quiz", function (error, result, fields) {
                if (error) {
                    throw error;
                } else {
                    res.json(result);
                }
            });
        }
    });

