const SelectCar = ({selectArray}) => {
   //const selectArray = ["Arurias","Barcelona","Madrid","Valencia"]
   return (
    <>
    {        
        selectArray.map(( item, index)=> ( 
            <option itemID={index+1} value={index+1}>{item}</option>
        ))
    }
    </>
   
  );
}

export default SelectCar;