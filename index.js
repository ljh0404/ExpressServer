const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/plants', async (req, res) => {
    try {
        const response = await axios.get('https://trefle.io/api/v1/plants?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos de las plantas.' });
    }
});

module.exports = app; // Exporta tu aplicación Express

// Este código de escucha se ejecutará localmente, pero no en Vercel
app.listen(PORT, () => {
    console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});

