const express = require('express');
const app = express();
const numeroALetras = require('numero-a-letras');

app.use(express.json());

app.post('/api/numero-a-letras', (req, res) => {
  const { numero } = req.body;
  if (isNaN(numero)) return res.status(400).json({ error: 'Número inválido' });

  const letras = numeroALetras(numero, {
    plural: 'pesos',
    singular: 'peso',
    centPlural: 'centavos',
    centSingular: 'centavo'
  });

  res.json({ letras });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
