import { Button } from 'react-bootstrap';

const ItemTabla = ({servicio}) => {
    return (
         <tr>
            <td>1</td>
            <td>{servicio.nombre}</td>
            <td>${servicio.precio}</td>
            <td><Button variant='warning' className='me-2'>Editar</Button><Button variant='danger'>Borrar</Button></td>
          </tr>
    );
};

export default ItemTabla;