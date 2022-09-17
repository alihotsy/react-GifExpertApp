import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
describe('Pruebas en <GifGridItem.js/>', () => {
        const title = 'Un título';
        const url =  'https://localhost/algo.jpg';
        const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    test('Debe mostrar el componente <GifGridItem.js/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })
   test('Debe de tener un párrafo con el title', () => {
       const p = wrapper.find('p').text();
       expect(p).toBe(title)
   })
   test('Debe de tener una imagen igual al url y alt de los props', () => {
       const img = wrapper.find('img');
       expect(img.prop('src')).toBe(url);
       expect(img.prop('alt')).toBe(title);
   })
   test('El div debe tener un animate__fadeIn', () => {
       const div = wrapper.find('div');
       const className = div.prop('className');
       expect(className.includes('animate__fadeIn')).toBe(true);
   })
   
})
