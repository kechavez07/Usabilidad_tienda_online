import React from 'react';
const { MongoClient } = require('mongodb');

const Conexcion = () => {

    // URL de conexión y nombre de la base de datos
    const url = 'mongodb+srv://kleber:kleber0729@cluster0.ynlu9jn.mongodb.net/?retryWrites=true&w=majority'; // Cambia localhost y el puerto si es necesario
    const dbName = 'UserInformation';

    // Conectarse a la base de datos
    MongoClient.connect(url, function(err, client) {
        if (err) {
            console.error('Error al conectar a MongoDB:', err);
            return;
        }

        console.log('Conexión exitosa a MongoDB');

        // Trabaja con la base de datos aquí

        // Cerrar la conexión cuando hayas terminado
        client.close();
        });
    return (
        <div>
            
        </div>
    );
};

export default Conexcion;