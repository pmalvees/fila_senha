import React from 'react';
import './styles.css';
import {AiFillStar} from 'react-icons/ai';

const List = ({prefixo, lista}) => {
    return(
        <div className='listStyles'>
          {
              lista.map((item) =>  <p><AiFillStar size={15} color={'#000'}/><span>{prefixo + item}</span></p>)
          } 
        </div>
    );
}


export default List;

