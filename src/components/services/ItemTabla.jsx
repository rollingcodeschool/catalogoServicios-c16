import { Button } from 'react-bootstrap';

const ItemTabla = ({servicio, fila}) => {
    return (
         <tr>
            <td>{fila}</td>
            <td>{servicio.servicio}</td>
            <td>${servicio.precio}</td>
            <td><Button variant='warning' className='me-2'>Editar</Button><Button variant='danger'>Borrar</Button></td>
          </tr>
    );
};

export default ItemTabla;