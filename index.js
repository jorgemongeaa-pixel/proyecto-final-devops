const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir la carpeta estática "public" con el diseño HTML
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Aplicación DevOps corriendo en el puerto ${PORT}`);
});
