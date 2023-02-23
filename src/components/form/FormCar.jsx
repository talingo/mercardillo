import React from 'react';
import {Button, Form } from 'react-bootstrap';
import './FormCar.css';
//import SelectCarTipo from './SelectCarTipo';
import { Component, useState } from 'react';



/* const FormCar = () => {
    const [validated, setValidated] = useState(false);


    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
         }
        else{
            
            alert("Debe hacer el 'Pago' para 'Crear el nuevo anuncio'");
        }
        setValidated(true); */

class FormCar extends React.Component{
        
        constructor(props){
            super(props);
            this.state={textCarCliente: '', 
                        textCarMarca: '',
                        textCarPrecio: '', 
                        textCarAutonomia: '',
                        selectCartipo: '', 
                        textCarAsientos: '',
                        filetCar: ''
                    };
            
            this.textCarClienteHandler = this.textCarClienteHandler.bind(this);
            this.textCarMarcaHandler = this.textCarMarcaHandler.bind(this);
            this.textCarPrecioHandler = this.textCarPrecioHandler.bind(this);
            this.textCarAutonomiaHandler = this.textCarAutonomiaHandler.bind(this);
            this.selectCartipoHandler = this.selectCartipoHandler.bind(this);
            this.textCarAsientosHandler = this.textCarAsientosHandler.bind(this);
            this.filetCarHandler = this.filetCarHandler.bind(this);
            
          } 
          //const [validated, setValidated] = useState(false);
          textCarClienteHandler(e){
            this.setState({textCarCliente: e.target.value});
          }
          textCarMarcaHandler(e){
            this.setState({textCarMarca: e.target.value});
          }
          textCarPrecioHandler(e){
            this.setState({textCarPrecio: e.target.value});
          }
          textCarAutonomiaHandler(e){
            this.setState({textCarAutonomia: e.target.value});
          }
          selectCartipoHandler(e){
            this.setState({selectCartipo: e.target.value});
          }
          textCarAsientosHandler(e){
            this.setState({textCarAsientos: e.target.value});
          }
          filetCarHandler(e){
            this.setState({filetCar: e.target.value});
          }

          submitFormHandler(e){
            e.preventDefault();
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            else{
                
                alert("Debe hacer el 'Pago' para 'Crear el nuevo anuncio'");
            }
            //setValidated(true);
            console.log(this.state);
          }
         
        
   // };
   render() {
  return (
    <>
        <h2>Crear Nuevo Anuncio</h2>
        {/* <Form className='formCar' noValidate validated={validated} onSubmit={handleSubmit}> */}
        <Form className='formCar'  onSubmit={this.submitFormHandler.bind(this)}>

            <Form.Group className="mb-3" controlId="formCarCliente">
                <Form.Label>Cliente</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Cliente" name="textCarCliente" defaultValue={this.state.textCarCliente}  onChange={this.textCarClienteHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarMarca">
                <Form.Label>Marca</Form.Label>
                <Form.Control required type="text" placeholder="Entre la Marca"  name="textCarMarca" defaultValue={this.state.textCarMarca}  onChange={this.textCarMarcaHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCardPrecio" >
                <Form.Label>Precio</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Precio" name="textCarPrecio" defaultValue={this.state.textCarPrecio}  onChange={this.textCarPrecioHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarAutonomia">
                <Form.Label>Autonomía</Form.Label>
                <Form.Control required type="text" placeholder="Entre la Autonomia" name="textCarAutonomia" defaultValue={this.state.textCarAutonomia}  onChange={this.textCarAutonomiaHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarTipo">
                <Form.Label>Tipo</Form.Label>
                <Form.Select required name="selectCartipo" defaultValue={this.state.selectCartipo} onChange={this.selectCartipoHandler}>
                    <option value="">Seleccione el tipo.....</option>
                    <option value="Camioneta">Camioneta</option>
                    <option value="Fugoneta">Fugoneta</option>
                    <option value="4X4">4X4</option>
                    <option value="De Lujo">De Lujo</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarAsientos">
                <Form.Label>Asientos</Form.Label>
                <Form.Control required type="text" placeholder="Entre los Asientos" name="textCarAsientos" defaultValue={this.state.textCarAsientos}  onChange={this.textCarAsientosHandler} />
            </Form.Group>

            <Form.Group controlId="formCarFile" className="mb-3">
                <Form.Label>Foto</Form.Label>
                <Form.Control required type="file" name="filetCar" defaultValue={this.state.filetCar}  onChange={this.filetCarHandler} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Publicar
            </Button>
        </Form>
    </>
  )
   }
}

export default FormCar