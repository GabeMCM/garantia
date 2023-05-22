const express = require("express");
const path = require("path");
const userRoute = require("./src/routes/user.routes");
//const connectToDb = require("./database/db");

const app = express();
const port = 3000;

//INFORMA AO EXPRESS QUE VOU USAR JSON
app.use(express.json());

//INFORMA QUE A ENGINE USADE É A EJS(PODE USAR HANDLEBARS, PUG, ETC...)
//app.set("view engine", "ejs");

//USA OS ARQUIVOS DA PASTAS PUBLIC
//app.use(express.static(path.join(__dirname, "public")));

//USA AS ROTAS
app.use("/user", userRoute);

//INICIA EM LOCALHOST UM SERVIDOR QUE RODA O PROGRAMA
app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
);
