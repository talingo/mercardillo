import React from 'react';
import {Button, Form } from 'react-bootstrap';


const FormCar = () => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formCarClientes">
        <Form.Label>Cliente</Form.Label>
        <Form.Control type="text" placeholder="Entre el Cliente" id="textCarCliente"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarMarca">
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" placeholder="Entre la Marca" id="textCarMarca"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCardPrecio" >
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" placeholder="Entre el precio" id="textCarPrecio"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarAutonomia">
        <Form.Label>Autonomía</Form.Label>
        <Form.Control type="text" placeholder="Entre la autonomia" id="textCarAutonomia" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarTipo">
        <Form.Label>Tipo</Form.Label>
        <Form.Control type="text" placeholder="Entre el tipo" id="textCarTipo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarAsientos">
        <Form.Label>Asientos</Form.Label>
        <Form.Control type="text" placeholder="Entre los asientos" id="textCarAsientos"/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Crear Anuncio
        </Button>
    </Form>
  )
}

export default FormCar