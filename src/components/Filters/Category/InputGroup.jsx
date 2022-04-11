import React from "react";

const InputGroup = ({ total, name, setID }) => {
  return (
    <div class="input-group mb-3">
      <select
        className="form-select"
        id={name}
        onChange={(event) => setID(event.target.value)}
      >
        {/* opcion por defecto */}
        <option value="1" selected>
          Choose...
        </option>

        {/* el resto de opciones */}
        {/* ...Array(cantElementos) crea un array de 51 elementos, y a cada elemento le pide 
        la key, que en este caso seria la posicion,luego se mapea */}
        {[...Array(total).keys()].map((episode) => {
          return (
            <option value={episode + 1}>
              {" "}
              {name} - {episode + 1}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
