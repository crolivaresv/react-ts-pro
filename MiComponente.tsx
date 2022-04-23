import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useFormulario } from './components/shared/hooks/useFormulario';
import { Boton } from './components/shared/UI/atoms/boton';
import { Input } from './components/shared/UI/atoms/input';
import { InputPlaceHolder } from './components/shared/UI/molecules/InputPlaceHolder';

interface IDatosFormulario {
  idOrden: string;
  productos: [];
  tieneDatosBancariosCargados: Boolean;
}

const useMiComponente = (datosFormularioInicio: IDatosFormulario) => {
  const [estadoBotonEnviar, setEstadoBotonEnviar] = useState(true);
  const { datosFormulario, handleChange } = useFormulario<IDatosFormulario>(
    datosFormularioInicio
  );

  useEffect(() => {
    if (datosFormulario.idOrden.length > 0) {
      setEstadoBotonEnviar(false);
    } else {
      setEstadoBotonEnviar(true);
    }
  }, [datosFormulario]);

  return { estadoBotonEnviar, datosFormulario, handleChange };
};

const MiComponente: React.FC<React> = () => {
  const ValoresFormularioDefault: IDatosFormulario = {
    idOrden: '',
    productos: [],
    tieneDatosBancariosCargados: false,
  };

  const { estadoBotonEnviar, datosFormulario, handleChange } = useMiComponente(
    ValoresFormularioDefault
  );

  return (
    <div>
      <InputPlaceHolder type="input" name="idOrden" onChange={handleChange} />
      <br />
      <Boton disabled={estadoBotonEnviar} value="Grabar cambios" />
    </div>
  );
};

export { MiComponente };
