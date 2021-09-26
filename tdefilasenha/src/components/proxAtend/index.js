import React from 'react';

const ProxAtend = ({numCaixa, chamarProximo}) => {

return (<button onClick={() => chamarProximo()}>{numCaixa}</button>);

}

export default ProxAtend;