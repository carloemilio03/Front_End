import React, { useState } from 'react';

const AddContact = () => {
  // Definición de estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Verifica que los campos no estén vacíos
    if (!nombre || !numero) {
      console.error("Los campos 'nombre' y 'numero' son requeridos");
      return;
    }

    console.log('Enviando:', { nombre, numero }); // Verifica qué se está enviando

    try {
      // Realiza la solicitud POST con los valores de los estados
      const res = await fetch('http://localhost:8000/contactos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, numero }), // Envío de datos en formato JSON
      });

      if (res.ok) {
        console.log('Contacto añadido exitosamente');
        // Limpia los campos del formulario
        setNombre('');
        setNumero('');
      } else {
        console.error('Error al añadir contacto');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del contacto:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} // Actualiza el estado `nombre`
          placeholder="Ingrese el nombre"
          required // Hace que el campo sea obligatorio
        />
      </div>
      <div>
        <label>Número de teléfono:</label>
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)} // Actualiza el estado `numero`
          placeholder="Ingrese el número de teléfono"
          required // Hace que el campo sea obligatorio
        />
      </div>
      <button type="submit">Agregar contacto</button>
    </form>
  );
};

export default AddContact;

