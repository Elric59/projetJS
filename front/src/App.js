import React, {createElement} from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Quizz  from "./Quizz"
import './App.css';
import './Quizz'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";

function App() {
    const [quizz, setQuizz] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

    var nbQuest = 1;


    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    async function getQuizz() {
        const quizz = (await axios.get('http://localhost:8000/quizz')).data;
        setQuizz(quizz);
    }

    useEffect(() => {
        getQuizz()
    }, []);

    console.log(quizz);
    let quizzJSX;
    if(quizz.length>0){
        quizzJSX = quizz.map((quizz) =>
            <div style={{display:"table-cell", padding:"10px 0px 10px 10px"}}>
                <Quizz id={quizz.idQuiz} image_path={quizz.image_path} nom={quizz.nom}></Quizz>
            </div>
        );

    }
    else{
        quizzJSX = <h1>Aucun quizz n'a été trouvé!</h1>;
    }

    async function search(e){
        console.log(e.target.value);
        let quizz = (await axios.get('http://localhost:8000/quizz?motcle='+e.target.value)).data;
        setQuizz(quizz);
    }

    function newProposition(){
        var newPropo = document.createElement("input");
        var divAdd = document.getElementById("btn"+nbQuest--);
        console.log(divAdd);
        newPropo.setAttribute("type", "text");
        newPropo.setAttribute("size", "50px");
        console.log(newPropo);
        divAdd.appendChild(newPropo);
    }

    function newQuestion(){
        var modalBodyCrea = document.getElementById("bodyModalCreate");
        var divQuest = document.createElement("div");
        divQuest.setAttribute("class", "row");
        divQuest.setAttribute("name", "question");
        divQuest.setAttribute("id", nbQuest);
        var newQuest = document.createElement("input");
        newQuest.setAttribute("type", "text");
        newQuest.setAttribute("size", "50px");
        var btnProposition = document.createElement("input");
        btnProposition.setAttribute("type","button");
        btnProposition.setAttribute("value","+");
        btnProposition.setAttribute("id","btn"+nbQuest);
        nbQuest++;
        btnProposition.onclick = function () {
            newProposition()
        };
        divQuest.appendChild(newQuest);
        divQuest.appendChild(btnProposition);
        modalBodyCrea.appendChild(divQuest);
    }



    return (
        <div>
            <p style={{fontSize:"50px", textAlign:"center", backgroundColor:"darkgrey", margin:"0px 100px 0px 100px"}}> LES QUIZ DE LA GOATTEAM</p>
            <p style={{display:"inline-block", padding:"10px 10px 10px 10px", margin:"0px 100px 0px 100px"}} id={"searchBar"}><span style={{fontSize:"24px"}}>Barre de recherche &nbsp;</span></p>
            <input name="motcle" onChange={search}/>
            <br />
            <button style={{display:"inline-block", padding:"5px 10px 5px 10px", margin:"0px 100px 0px 110px"}} onClick={handleShowCreate}>Ajouter un quiz</button>

            <Modal id={"modalCreation"} show={showCreate} onHide={handleCloseCreate} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Création d'un nouveau quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body id={"bodyModalCreate"}>
                    <button onClick={newQuestion}> Ajout de nouvelle question </button><br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseCreate}>
                        Valider
                    </Button>
                    <Button variant="secondary" onClick={handleCloseCreate}>
                        Annuler
                    </Button>
                </Modal.Footer>
            </Modal>


            <p class={"row"} style={{margin:"0px 100px 0px 100px"}}>{quizzJSX}</p>
        </div>

    )
}

export default App;
