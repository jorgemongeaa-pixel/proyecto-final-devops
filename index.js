const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ 
        status: "online", 
        mensaje: "¡Proyecto Final de Sistemas Operativos II funcionando!",
        entorno: "Contenedor Docker en Ubuntu"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
