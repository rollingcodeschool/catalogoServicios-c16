import React from 'react';
import { Button } from 'react-bootstrap';

const ItemTabla = () => {
    return (
         <tr>
            <td>1</td>
            <td>Ecommerce</td>
            <td>$300000</td>
            <td><Button variant='warning' className='me-2'>Editar</Button><Button variant='danger'>Borrar</Button></td>
          </tr>
    );
};

export default ItemTabla;