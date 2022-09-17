import React, {useState} from 'react'
import PropTypes from 'prop-types';

const useMyInput = (setCategories) =>{
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleInput = (e) =>{
        if(e.key === "Enter"){
            if(e.target.className === "input1"){
                if(inputValue.trim().length > 2){
                    setCategories(cats => [inputValue,...cats]);
                    setInputValue('');
                }
            } else{
                setCategories(cats => cats.filter(n => n !== inputValue))
                setInputValue('');
            }
           
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return {
        handleInputChange,
        handleSubmit,
        inputValue,
        handleInput
    }
}
export const AddCategory = ({setCategories}) => {
    const {handleSubmit} = useMyInput(setCategories)
    const input1 = useMyInput(setCategories);
    const input2 = useMyInput(setCategories);
    return (
        <form onSubmit = {handleSubmit}> 
            <p>{input1.inputValue}</p>
            <label>Ingresa una serie:</label>
            <input
             className = "input1"
             type="text"
             value = {input1.inputValue}
             onChange = {input1.handleInputChange}
             onKeyPress = {input1.handleInput}
            />
            <label>Borra una serie de la lista:</label>
            <input
             type="text2"
             value = {input2.inputValue}
             onChange = {input2.handleInputChange}
             onKeyPress = {input2.handleInput}
            />
            <button className="boton">Borrar</button>
        </form>    
        
        
    )
}
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}