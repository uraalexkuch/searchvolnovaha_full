import React, {Component} from "react";
import {Button, Row} from "react-bootstrap";
import "./Choice.css"


export default class Choice extends Component {


    render() {
        return (
            <div className="fun-facts">
                <Row>
                    <div className="col-lg-6 col-md-6 "><Button className="buttonModul">Пошук евакуйованих</Button>
                    </div>
                    <div className="col-lg-6 col-md-6 "><Button className="buttonModul">Кого шукають</Button></div>
                </Row>
            </div>
        )
    }
}