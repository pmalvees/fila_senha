import React from 'react';

const List = ({prefixo, lista}) => {
    return(
        <div>
          {
              lista.map((item) => <p>{prefixo + item}</p>)
          } 
        </div>
    );
}


export default List;