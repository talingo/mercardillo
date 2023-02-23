import React from 'react';
import {Button, Form } from 'react-bootstrap';
import './FormCar.css';
import SelectCarTipo from './SelectCarTipo';
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
        alert("Debe hacer el 'Pago' para 'Crear el nuevo anuncio'");

        
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
                <SelectCarTipo/>
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