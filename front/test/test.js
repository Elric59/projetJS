var assert = require('assert');
var  chai = require('chai');
var chaiHttp = require('chai-http');
let mysql  = require('mysql');
const pool = mysql.createPool({
    // port: 3306,
    //host     : 'localhost',
    connectionLimit: 10,
    user: 'root',
    password: '',
    database: 'bddquiz'
});

chai.use(chaiHttp);

it('Est-ce que m\'on backend est opérationel ?', function(done) {
    chai.request('http://localhost:8000')
        .get('/')
        .end(function(err, res) {
            chai.expect(res).to.have.status(200);
            done();
        });
});

describe('3 back tests and 3 front tests', () => {
    before(function(done){
        pool.query("DELETE FROM quiz WHERE idQuiz != 50",function(error, result, fields){
            if (error) {
                throw error;
            }
        });
        pool.query("INSERT INTO quiz(idQuiz,nom,image_path,motscles) VALUES('50','testQuiz','1.png','test')",function(error, result, fields){
            if (error) {
                throw error;
            }
        });
        done();
    });
    it('test récupération de tous les quizz', function(done) {
        chai.request('http://localhost:8000')
            .get('/quizz')
            .end(function(err, res) {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body.length).equal(1);
                done();
            });
    });

    it('test récupération de tous les quizz ayant comme mot clé test', function(done) {
        chai.request('http://localhost:8000')
            .get('/quizz?motcle=test')
            .end(function(err, res) {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body.length).equal(1);
                chai.expect(res.body[0].idQuiz).equal(50);
                done();
            });
    });
    

    after(function(done){
        pool.query("INSERT INTO quiz(idQuiz,nom,image_path,motscles) VALUES('1','Quiz1','1.png','Quiz1, histoire')",function(error, result, fields){
            if (error) {
                throw error;
            }
        });
        pool.query("INSERT INTO quiz(idQuiz,nom,image_path,motscles) VALUES('2','Quiz2','2.png','Quiz2')",function(error, result, fields){
            if (error) {
                throw error;
            }
        });
        pool.query("DELETE FROM quiz WHERE idQuiz = 50",function(error, result, fields){
            if (error) {
                throw error;
            }
        });
        done();
    });

});

