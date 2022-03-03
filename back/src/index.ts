import express from "express";

import db from "./loaders/database";

db.authenticate()
  .then(()=>{
    console.log("Connection has been established successfully.")
  })
  .catch((error)=>{
    console.error('Unable to connect to the database:', error);
  })

const app = express();

const PORT = 3000;
const OK = 200;

app.use(express.json());

app.get("/", function(req, res) {
    res.status(OK).send({ data : "hi!" }); 
})

app.post("/", function(req, res) {
    const { data } = req.body;

    res.status(OK).send( {data : `${data}를 입력받았습니다.`});
}) 

app.listen(PORT, function(){
    console.log(`listening on ${PORT}`);
})

export default app;