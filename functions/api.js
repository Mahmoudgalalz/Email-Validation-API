const express = require('express');
const app = express();
const path = require('path');
const serverless=require('serverless-http')
const router = express.Router();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.post('/isvalid', (req, res) => {
    const Email=req.body.email
    if(!isValid(Email)){
        res.status(500).json({
            isValid:'NO'
        })
        res.end()
    }
    else{
    res.status(200).json({
        isValid:'YES',
        Domain:domain(Email)
    })
    res.end()
}
});

function isValid(Email){
    const pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return pattern.test(Email)
}

//getting the email domain 
function domain(Email){
    let domain=Email.split("@")[1];
    return domain.split('.')[0];
}
app.use('/.netlify/functions/api',router)
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);

