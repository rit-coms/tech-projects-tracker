import React from "react";
import { Button } from "reactstrap";
import "./App.css";

class BackButton extends React.Component{
    render(){
        return (
            <div>
                <Button className='back-button-style'> Back </Button>
            </div>
        );
    }
}

export default BackButton;