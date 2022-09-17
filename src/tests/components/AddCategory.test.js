import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
       jest.clearAllMocks();
       wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de cambiar la caja de texto o input', () => {
        const input = wrapper.find('input').at(0);
        const value = 'Hola mundo';
        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    test('NO debe postear la información con keyPress', () => {
        // wrapper.find('form').simulate('submit', {preventDefault(){}})
        wrapper.find('input').at(0).simulate('keyPress',{key:'Enter',target:'input'});
        expect(setCategories).toHaveBeenCalled();
    })
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = "Hola Mundo";
        const input = wrapper.find('input').at(0);
        //Simular el inputChange
        input.simulate('change',{target:{value}});
        //Simular el KeyPress
        input.simulate('keyPress',{key:'Enter',target:'input'});
        // setCategories se debe de llamar
        expect(setCategories).toHaveBeenCalled();
        // El valor del input debe de estar vacío ''
        expect(input.prop('value')).toBe('');
        // setCategories se debe llamar 1 vez:
        expect(setCategories).toHaveBeenCalledTimes(1);
        //Se espera que se llame una función:
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    })
    
    
})
