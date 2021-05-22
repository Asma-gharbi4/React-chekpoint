import './App.css';
import { Button, Carousel, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/layout/Footer";
import Signin from "./component/layout/Signin";
import Navbar from "./component/layout/Navbar";
import React from 'react';

function App() {
    return ( <
        div className = "App" >
        <
        Navbar / >

        <
        Carousel >

        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "./test 2.png"
        alt = "Third slide" /
        >


        <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "logo-og.png"
        alt = "Third slide" /
        >
        <
        /Carousel.Item> < /
        Carousel >


        <
        header className = "App-header" >
        <
        div >
        <
        Signin > < /Signin> <
        Form >
        <
        Form.Group controlId = "formBasicEmail" >
        <
        Form.Label > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "Enter email" / >
        <
        Form.Text className = "text-muted" >
        We 'll never share your email with anyone else. < /
        Form.Text > <
        /Form.Group>

        <
        Form.Group controlId = "formBasicPassword" >
        <
        Form.Label > Password < /Form.Label> <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /Form.Group> <
        Form.Group controlId = "formBasicCheckbox" >
        <
        Form.Check type = "checkbox"
        label = "Check me out" / >
        <
        /Form.Group> <
        Button className = "btn"
        variant = "primary"
        type = "submit" >
        Submit <
        /Button> < /
        Form > <
        /div>


        <
        /header>

        <
        Footer / >

        <
        /div>
    );
}

export default App;