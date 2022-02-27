const express = require("express");

let app = express();
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