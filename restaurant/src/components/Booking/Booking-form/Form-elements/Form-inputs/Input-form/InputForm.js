import React from 'react';

const InputForm = (props) => {
   return (
      <div className="form__input">
         <span className="form__input-label">{props.title}</span>
         <input type={props.type} name={props.name} value={props.value} onChange={props.handleInput} />
      </div>
   );
};

export default InputForm;
