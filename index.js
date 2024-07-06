const yahooFinance = require('yahoo-finance2').default; // NOTE the .default
const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  let symbol = req.query.symbol
 	const result = await yahooFinance.quote(symbol);
  return res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
