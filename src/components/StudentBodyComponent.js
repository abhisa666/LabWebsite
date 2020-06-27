import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderStudent(){
    return(
        <Card>
            <CardImg height="500px" width="40%" src="images/student.png" alt="student" />
            <CardBody>
            <CardTitle>Abhishek Head</CardTitle>
            <CardSubtitle>Lab Head</CardSubtitle>
            <CardText>sgdbasgdlnasbdlagskdbsanhldasndbasd</CardText>
            </CardBody>
        </Card>
    );
}    

class Student extends Component{
    render(){
        return(
        <div className="container">
            <div className="row align-items-start">
                <div >
                    <RenderStudent />
                </div>
                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div> */}
            </div>
        </div>
            
        );
    }
}

export default Student;