import React from 'react';
import { Form } from 'react-bootstrap';

const SelectCarTipo = () => {
  const selectCartipoHandler = (e) => {
    let val = e.target.value;
    if(!val)
      console.log('No ha seleccionado ninguna opción')
    else
      console.log(`El valor seleccionado es ${val}`)
      
  };
   return (
    <Form.Select required name="selectCartipo" onChange={selectCartipoHandler}>
      <option value="">Seleccione el tipo.....</option>
      <option value="Camioneta">Camioneta</option>
      <option value="Fugoneta">Fugoneta</option>
      <option value="4X4">4X4</option>
      <option value="De Lujo">De Lujo</option>
    </Form.Select>
   
  );
}

export default SelectCarTipo;