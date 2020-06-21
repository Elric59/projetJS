import React from 'react';
import {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import axios from "axios";

function Quizz(props) {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseUpdate = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    async function deleteQuiz() {
        const quiz = (await axios.delete('http://localhost:8000/' + props.id)).data;
    }

    async function getQuestions() {
        handleShow();
        const questions = (await axios.get('http://localhost:8000/' + props.id + "/questions")).data;
        var modalBody = document.getElementById("bodyMonModal");
        questions.forEach(function (element) {
            var divQuestion = document.createElement("div");
            divQuestion.setAttribute("class", "row");
            divQuestion.setAttribute("id", element.idQuestion);
            var question = document.createElement("p");
            question.setAttribute("style", "margin-left: 2%; font-weight:bold; text-decoration:underline;");
            question.innerHTML = element.phrase;

            if (element.video_path !== "") {
                var video = document.createElement("video");
                video.setAttribute("controls", "controls");
                video.setAttribute("width", "250");
                video.setAttribute("style", "margin-left: 25%;");
                var source = document.createElement("source");
                source.setAttribute("src", "http://localhost:8000/video/" + element.video_path);
                video.appendChild(source);
            }
            divQuestion.appendChild(question);
            if (video !== undefined) {
                divQuestion.appendChild(video);
            }
            modalBody.appendChild(divQuestion);
            getPropositions(element.idQuestion);
        });
        console.log(questions);
    }

    async function getUpdate() {
        handleShow2();
        const questions = (await axios.get('http://localhost:8000/' + props.id + "/questions")).data;
        var modalBody = document.getElementById("bodyMonModalUpdate");
        questions.forEach(function (element) {
            var divQuestion = document.createElement("div");
            divQuestion.setAttribute("class", "row");
            divQuestion.setAttribute("name", "question");
            divQuestion.setAttribute("id", element.idQuestion);
            var question = document.createElement("input");
            question.setAttribute("type", "text");
            question.setAttribute("id", element.idQuestion);
            question.setAttribute("size", "50px");
            question.setAttribute("value", element.phrase);
            question.innerHTML = element.phrase;
            divQuestion.appendChild(question);
            modalBody.appendChild(divQuestion);
            getPropositionsForUpdate(element.idQuestion);
        });
    }

    function selectionnerProposition(idQuestion, idProposition) {
        var prop = document.getElementById("proposition" + idProposition);

        if (prop.getAttribute("class").includes("btn-primary")) {
            prop.setAttribute("class", "selected btn-success question" + idQuestion + " col-md-5");
        } else if (prop.getAttribute("class").includes("btn-success")) {
            prop.setAttribute("class", "btn-primary question" + idQuestion + " col-md-5");

        }
    }

    async function getPropositions(idQuestion) {
        var divQuestion = document.getElementById(idQuestion);
        var divProposititons = document.createElement("div");
        divProposititons.setAttribute("class", "row");
        divProposititons.setAttribute("style", "margin: 30px 50px 30px 50px;font-size: 20px");
        const propositions = (await axios.get('http://localhost:8000/' + idQuestion + "/propositions")).data;

        propositions.forEach(function (element) {
            if (element.type === "texte") {
                var proposition = document.createElement("button");
                proposition.setAttribute("id", "proposition" + element.idProposition);
                proposition.setAttribute("value", element.idProposition);
                proposition.setAttribute("class", "btn-primary col-md-5 question" + idQuestion);
                proposition.onclick = function () {
                    selectionnerProposition(idQuestion, element.idProposition)
                };
                proposition.innerHTML = element.proposition_reponse;
            } else {
                var proposition = document.createElement("img");
                proposition.setAttribute("id", "proposition" + element.idProposition);
                proposition.setAttribute("value", element.idProposition);
                proposition.setAttribute("class", "btn-primary col-md-5 question" + idQuestion);
                proposition.setAttribute("alt", element.proposition_reponse);
                proposition.setAttribute("src", "http://localhost:8000/img/imgProposition/" + element.image_path);
                proposition.onclick = function () {
                    selectionnerProposition(idQuestion, element.idProposition)
                };
            }
            divProposititons.appendChild(proposition);
            divQuestion.appendChild(divProposititons);
        });
    }

    async function getPropositionsForUpdate(idQuestion) {
        var divQuestion = document.getElementById(idQuestion);
        var divProposititons = document.createElement("div");
        divProposititons.setAttribute("name", "propositions");
        divProposititons.setAttribute("class", "row");
        divProposititons.setAttribute("style", "margin: 30px 50px 30px 50px;font-size: 20px");
        const propositions = (await axios.get('http://localhost:8000/' + idQuestion + "/propositions")).data;

        propositions.forEach(function (element) {
            if (element.type === "texte") {
                var proposition = document.createElement("input");
                proposition.setAttribute("type", "text");
                proposition.setAttribute("size", "25px");
                proposition.setAttribute("id", "" + element.idProposition);
                proposition.setAttribute("value", element.proposition_reponse);
            } else if (element.type === "img") {
                var proposition = document.createElement("input");
                proposition.setAttribute("type", "file");
                proposition.setAttribute("id", "" + element.idProposition);
                proposition.setAttribute("accept", "image/png, image/jpeg");
                proposition.setAttribute("alt", element.proposition_reponse);

            }
            divProposititons.appendChild(proposition);
            divQuestion.appendChild(divProposititons);

        });
    }

     /*function addPicture(e) {
        const data = [];
        data.push('file', e.files);
        data.push('name', e.files[0].name);
        data.push('id', e.id);
        console.log(e.files);
        axios.post('http://localhost:8000/update/image/', data);

    }*/

    function validerUpdate() {
        var proposition = document.getElementsByName("propositions");
        let tabP = [];
        for (let i = 0; i < proposition.length; i++) {
            for (let j = 0; j < proposition[i].childNodes.length; j++) {
                if (proposition[i].childNodes[j].type === "file") {
                    tabP[proposition[i].childNodes[j].id] = proposition[i].childNodes[j].alt;
                    /*if(proposition[i].childNodes[j].files.length!==0){
                        addPicture(proposition[i].childNodes[j]);
                    }*/

                } else {
                    tabP[proposition[i].childNodes[j].id] = proposition[i].childNodes[j].value;
                }

            }
        }
        var questions = (document.getElementsByName("question"));
        let tabQ = [];
        for (let i = 0; i < questions.length; i++) {
            tabQ[questions[i].id] = questions[i].childNodes[0].value;
        }
        axios.patch('http://localhost:8000/update/question/', {res: tabQ});
        axios.patch('http://localhost:8000/update/proposition/',{res : tabP});

        handleCloseUpdate();
    }

    async function validerReponses() {
        var propSelected = document.getElementsByClassName("selected");
        var points = 0;
        let bonneReponse = [];
        for (let i = 0; i < propSelected.length; i++) {
            var idProposition = propSelected[i].getAttribute("value");
            var classes = propSelected[i].classList;
            for (let j = 0; j < classes.length; j++) {
                if (classes[j].includes("question")) {
                    var idQuestion = classes[j].slice(8, classes[j].length);
                    let propositions = (await axios.get('http://localhost:8000/' + idQuestion + "/propositions")).data;
                    for (let k = 0; k < propositions.length; k++) {
                        if (propositions[k].correction === 1)
                            bonneReponse.push(propositions[k].idProposition);
                    }
                }
            }
            if (bonneReponse.includes(parseInt(idProposition))) {
                points++;
            } else {
                points--;
            }
        }

        handleClose();
        alert("Vous avez marqué : " + points + "points  ! ");

    }

    return (
        <div class="card col" style={{width: 10 + 'rem'}}>
            <h4 style={{textAlign: "center"}}>{props.nom}</h4>
            <img width={"125px"} height={"125px"} style={{}} src={'http://localhost:8000/img/' + props.image_path}
                 alt="image_quizz"/>
            <Button style={{marginTop: "10px"}} variant="primary" onClick={getQuestions} id={props.nom}>Accéder au
                quiz</Button>
            <div style={{marginTop: "10px"}}>
                <input type={"image"} className={"col-6"}
                       src={'http://localhost:8000/img/imgPage/iconeModif.png'} onClick={getUpdate}></input>
                <input type={"image"} className={"col-6"}
                       src={'http://localhost:8000/img/imgPage/iconeSuppr.png'} onClick={deleteQuiz}></input>
            </div>
            <Modal id={"monModal"} show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Répondre au Quiz : {props.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body id={"bodyMonModal"}>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={validerReponses}>
                        Valider
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal id={"monModalUpdate"} show={show2} onHide={handleCloseUpdate} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Editer le Quiz : {props.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body id={"bodyMonModalUpdate"}>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={validerUpdate}>
                        Valider
                    </Button>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Annuler
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Quizz;
