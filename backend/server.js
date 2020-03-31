const app = require('./src/app');

// configurando porta para api
const port = normalizaPort(process.env.PORT || '3333');

// verificando se porta é válida
function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

app.listen(port, function () {
  console.log("*******************************************");
  console.log(`API em execução em >> http://localhost:${port}`);
  console.log("*******************************************");
});