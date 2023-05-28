var express = require("express");
var cors = require("cors");
var r = require("rethinkdbdash")({
    servers:[
        {
            host:"localhost",
            port:"28015"
        }
    ]
});

var app = express();

app.use(cors());

app.get("/getUsers",async(req,res) => {
    const users = await r.db("test").table("users");
    console.log(users);
    res.send("users loging from db");
})

app.get("/",(req,res) => {
    res.send("<div style='background-color:powderblue;'> <h1 style='font-size:300%;'>Bak hele buraya kırmızi şortliii</h1>Welcome to ibo's page</div>");
})

app.get("/getTeam",async(req,res) => {
     r.db("test").table("users").then((team) => {
        res.statusCode = 200;
        res.send(team)
     }).catch((err) => {
        res.statusCode = 500;
        res.send(err.message)
     })
})

app.listen(3000)