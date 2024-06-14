const express=require('express');
const app=express();

app.use(express.json());

app.get("/interest",function(req,res){
    const p=parseInt(req.query.principal);
    const r=parseInt(req.query.rate);
    const t=parseInt(req.query.time);

    let interest=(p*r*t)/100;
    let Amount=p+interest;
    res.json({
        interest:interest,
        Amount:Amount
    });
})

app.listen(3000);