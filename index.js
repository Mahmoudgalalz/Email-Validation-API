const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
const pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let Email
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+"/main.html"));
})
app.get('/isvalid/:email', (req, res) => {
    Email=req.params.email;
    if(isValid(Email)){
        console.log("Yes")
    }
});

function isValid(Email){
    return pattern.test(Email)
}

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))