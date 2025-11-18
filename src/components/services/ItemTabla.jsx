import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemTabla = ({ servicio, fila, borrarServicio }) => {
  const eliminarServicio = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el servicio?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarServicio(servicio.id);
        
        Swal.fire({
          title: "Servicio eliminado",
          text: `El servicio ${servicio.servicio} fue eliminado correctamente`,
          icon: "success",
        });
      }
    });

   
  };
  return (
    <tr>
      <td>{fila}</td>
      <td>{servicio.servicio}</td>
      <td>${servicio.precio}</td>
      <td>
        <Button variant="warning" className="me-2">
          Editar
        </Button>
        <Button variant="danger" onClick={eliminarServicio}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemTabla;
