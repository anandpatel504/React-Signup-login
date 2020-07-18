module.exports = (app, jwt, knex) =>{
    app.post("/login", (req, res) =>{
        // res.send(req.body)
        if (req.body.email === undefined || req.body.password === undefined){
            console.log({"suggetion": "email and password both are require!"})
        }else{
            knex
            .select('*')
            .from('user')
            .where('email', req.body.email)
            .then((data) =>{
                // console.log(data);
                if (data.length>0){
                    if (data[0].password === req.body.password){
                        var token = jwt.sign({"id": data[0].id, "name": data[0].name, "email": data[0].email, "password": data[0].password }, "anand");
                        // console.log({"Login Success": token});
                        res.cookie("key", token);
                        console.log({"success": "Login success!"});
                        res.send({result: true})
                    }else{
                        res.send({result:"pass"})
                    }
                }else{
                    res.send({
                        // "Error": "This user doesn't exists! please Signup....."
                        result: false
                    })
                }
            }).catch((err) =>{
                console.log(err);
            })
        }
    })
}