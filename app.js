const express=require('express')
const app=express();


app.get('/metrics',(req,res)=>{
    const {object,metric,radius}=req.query
    if(object==='circle'&&metric==='area'){
        const a=3.141*radius*radius;
        return res.send(`area of a circle is ${a}`)
    }else if(object==='sphere'&&metric==='volume'){
        const b=(4*3.141*radius*radius*radius)/3
        return res.send(`volume of a sphere is ${b}`)
    }else{
        return res.send("send correct metrics")
    }
})

app.listen(8000,()=>{
    console.log('conneted to port 8000')
})