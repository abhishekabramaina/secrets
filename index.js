//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming\

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";

app.use(bodyParser.urlencoded({extended:true}));
app.use(check);


function check(req,res,next){
    password = req.body["password"];
    next();
}



app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post('/check',(req,res)=>{
    if (password == "ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");
    }
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
});
