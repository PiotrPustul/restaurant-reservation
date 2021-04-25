import React from 'react';

const Input = (props) => {
   return (
      <>
         <div className="form-input">
            <label htmlFor={props.id} className="form-input__label">{props.title}</label>
            <input
               type={props.type}
               id={props.id}
               name={props.name}
               value={props.value}
               onChange={props.handleInput}
            />
            {props.error === null ? null : <span className="form-input__error">{props.error}</span>}
         </div>
      </>
   );
};

export default Input;
