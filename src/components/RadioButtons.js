import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Buttons = (props) => {
  const [rSelected, setRSelected] = useState(1);

 
  return (
    <div>
      <ButtonGroup style={{marginLeft:" 80rem" , paddingTop: " 1rem"}}>
        <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>3h</Button>
        <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>6h</Button>
        <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>9h</Button>
      </ButtonGroup>
      

     
    </div>
  );
}

export default Buttons;