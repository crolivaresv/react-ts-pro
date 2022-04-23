import { useState } from 'react';

export const useFormulario = <T extends Object>(datosFormulariodefault: T) => {
  const [datosFormulario, setDatosFormulario] = useState<T>(
    datosFormulariodefault
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  return { datosFormulario, handleChange };
};
