const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const cors = require("cors")
app.use(express.json()); 
app.use(bodyParser())
app.use(cors())

var knex = require('knex')({
    client: "mysql",
    connection: {
        host : "localhost",
        user : "root",
        password : 'anandbabu',
        database : 'authdata'
    }
})

// Create auth_details table
    knex.schema.createTable('user', function(table){
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('password');
     }).then(() => {
        console.log("User_post table created successfully....")
     }).catch(() => {
        console.log("this table is already exists!");
    })

// Create Table user_post Table;
    knex.schema.createTable('user_post', function(table){
        table.increments('id').primary();
        table.integer('user_id');
        table.string('text');
        table.string('description');
        table.date('Date');
     }).then(() => {
        console.log("User_post table created successfully....")
     }).catch(() => {
        console.log("this table is already exists!");
    })

// Create Table like/dislike;
    knex.schema.createTable('like_dislike', function(table){
        table.increments('id').primary();
        table.integer('post_id');
        table.integer('user_id');
        table.string('like');
        table.string('dislike');
     }).then(() => {
        console.log("like_dislike table created successfully....")
     }).catch(() => {
        console.log("this table is already exists!");
    })


// signup
var signup = express.Router();
app.use("/", signup);
require("./signup")(signup, jwt, knex);

// login
var login = express.Router();
app.use("/", login);
require("./login")(login, jwt, knex);

var server = app.listen(3050, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running port....")
    console.log(host, port);

})