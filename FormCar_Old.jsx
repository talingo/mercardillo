import React from 'react';
import {Button, Form } from 'react-bootstrap';
import './FormCar.css';
//import SelectCarTipo from './SelectCarTipo';
import { Component, useState } from 'react';

const FormCar = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
         }

        setValidated(true);
        //alert('An essay was submitted: ' + this.state.value);
        // event.preventDefault();
        // for (let ref in this.refs) {
        //     console.log(ref, '=>', this.refs[ref].value);
        //   } 

        /*constructor(props){
            super(props);
            this.state={textCarCliente: '', textCarMarca: ''};
            
            this.textCarClienteHandler = this.textCarClienteHandler.bind(this);
            this.textCarMarcaHandler = this.textCarMarcaHandler.bind(this);
          }
          textCarClienteHandler(e){
            this.setState({textCarCliente: event.target.value});
          }
          textCarMarcaHandler(e){
            this.setState({textCarMarca: event.target.value});
          }
          submitFormHandler(e){
            e.preventDefault();
            console.log(this.state);
          }
          */
    };


    

  return (
    <>
        <h2>Crear Nuevo Anuncio</h2>
        <Form className='formCar' noValidate validated={validated} onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="formCarCliente">
                <Form.Label>Cliente</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Cliente" name="textCarCliente" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control required type="text" placeholder="Entre la Marca"  name="textCarMarca" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCardPrecio" >
                <Form.Label>Precio</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Precio" name="textCarPrecio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarAutonomia">
                <Form.Label>Autonomía</Form.Label>
                <Form.Control required type="text" placeholder="Entre la Autonomia" name="textCarAutonomia" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarTipo">
                <Form.Label>Tipo</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Tipo" name="textCarTipo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarAsientos">
                <Form.Label>Asientos</Form.Label>
                <Form.Control required type="text" placeholder="Entre los Asientos" name="textCarAsientos" />
            </Form.Group>

            <Form.Group controlId="formCarFile" className="mb-3">
                <Form.Label>Foto</Form.Label>
                <Form.Control required type="file" name="filetCar" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Publicar
            </Button>
        </Form>
    </>
  )
}

export default FormCar