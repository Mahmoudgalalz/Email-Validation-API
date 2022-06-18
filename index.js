const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+"/views/main.html"));
})
app.post('/isvalid', (req, res) => {
    const Email=req.body.email
    if(!isValid(Email)){
        res.status(500).json({
            isValid:'NO'
        })   
    }
    else{
    res.status(200).json({
        isValid:'YES',
        Domain:domain(Email)
    })
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

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))