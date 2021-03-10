import React from 'react';
import Swal from "sweetalert2";

/** Componente que representa pop-up
 *  para mostrar un mensaje de importancia
 */

const ModalMessage = (
    title,
    text,
    icon,
    showConfirmButton,
    timer,
  ) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showConfirmButton: showConfirmButton,
        timer: timer
      });
  }

export { ModalMessage };