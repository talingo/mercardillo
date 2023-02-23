import React from 'react';
import {Button, Form } from 'react-bootstrap';
import './FormCar.css';
import axios from "axios";
import SelectCar from './SelectCar';

class FormCar extends React.Component{
        
    constructor(props){
        super(props);
        this.state={textCarCliente: '', 
                    textCarMarca: '',
                    textCarPrecio: '', 
                    textCarAutonomia: '',
                    selectCartipo: '', 
                    textCarAsientos: '',
                    filetCar: '',
                    selectCarProvincia:''
                };
        
        this.textCarClienteHandler = this.textCarClienteHandler.bind(this);
        this.textCarMarcaHandler = this.textCarMarcaHandler.bind(this);
        this.textCarPrecioHandler = this.textCarPrecioHandler.bind(this);
        this.textCarAutonomiaHandler = this.textCarAutonomiaHandler.bind(this);
        this.selectCartipoHandler = this.selectCartipoHandler.bind(this);
        this.textCarAsientosHandler = this.textCarAsientosHandler.bind(this);
        this.filetCarHandler = this.filetCarHandler.bind(this);
        this.selectCarProvinciaHandler = this.selectCarProvinciaHandler.bind(this);
        
    } 
        
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
    // filetCarHandler(e){
    //   this.setState({filetCar: e.target.value});
    // }
    selectCarProvinciaHandler(e){
    this.setState({selectCarProvincia: e.target.value});
    }

    submitFormHandler(e){
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
    }
    else{
        alert("Tiene que efectuar el pago");
        axios({
            method: "POST",
            url: "http://localhost:8080/api/mercardillo/",

            data: {
                nombre: this.state.textCarCliente,
                asientos: this.state.textCarAsientos,
                autonomia : this.state.textCarAutonomia,
                precio : this.state.textCarPrecio,
                tipo: {
                idTipo: this.state.selectCartipo,      
                },
                marca:{
                idMarca: this.state.textCarMarca,
                },
                provincia:{
                idProvincia: this.state.selectCarProvincia,
                }
            },
            })
            .then((res) =>
                console.log(res.data)
                
            )
            .catch((err) => console.log(err));

        };
    
        console.log(this.state);
        
    }
    render() {
    return (
    <>
        <h2>Crear Nuevo Anuncio</h2>
        
        <Form className='formCar'  onSubmit={this.submitFormHandler.bind(this)}>

            <Form.Group className="mb-3" controlId="formCarCliente">
                <Form.Label className='labelCar'>Cliente</Form.Label>
                <Form.Control required type="text" placeholder="Entre el Cliente" name="textCarCliente" defaultValue={this.state.textCarCliente}  onChange={this.textCarClienteHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCarMarca">
                {/* <Form.Label>Marca</Form.Label>
                <Form.Control required type="text" placeholder="Entre la Marca"  name="textCarMarca" defaultValue={this.state.textCarMarca}  onChange={this.textCarMarcaHandler} /> */}
                <Form.Select required name="selectCartipo" defaultValue={this.state.textCarMarca} onChange={this.textCarMarcaHandler}>
                    <option value="">Seleccione la marca.....</option>
                    {/* <option value={1}>Ferrari</option>
                    <option value={2}>Tesla</option>
                    <option value={3}>Peugeot</option>
                    <option value={4}>Ford</option> */}
                    <SelectCar  selectArray={["Ferrari","Tesla","Peugeot","Ford"]} />
                </Form.Select>
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
                    {/* <option value={1}>4 x 4</option>
                    <option value={2}>Deportivo</option>
                    <option value={3}>Mono Volumen</option>
                    <option value={4}>De Lujo</option> */}
                    <SelectCar  selectArray={["4 x 4","Deportivo","Mono Volumen","De Lujo"]} />

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

            <Form.Group className="mb-3" controlId="formCarProvincia">
                <Form.Label>Provincias</Form.Label>
                <Form.Select required name="selectCarProvincia" defaultValue={this.state.selectCarProvincia} onChange={this.selectCarProvinciaHandler}>
                    <option value="">Seleccione la provincia.....</option>
                    {/* <option value={1}>Asturias</option>
                    <option value={2}>Barcelona</option>
                    <option value={3}>Madrid</option>
                    <option value={4}>Valencia</option> */}
                    <SelectCar  selectArray={["Arurias","Barcelona","Madrid","Valencia"]} />
                   
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Publicar
            </Button>
        </Form>
    </>
  )}
}

export default FormCar