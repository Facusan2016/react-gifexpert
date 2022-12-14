import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('One Punch')
  
    const onInputChange = ({target}) =>{
        console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmitt = (event) =>{
      event.preventDefault();
      if(inputValue.trim().length <= 1) return;

      onNewCategory(inputValue.trim());
      setInputValue('');
      
    }

    return (
      <form onSubmit={(event) => onSubmitt(event)}>
        <input 

          type="text" 
          placeholder="Buscar Gifs" 
          value={ inputValue } 
          onChange={onInputChange}>

        </input>
      </form>
     
    )
}
