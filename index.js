import express from "express"

const app=express()

const port=process.env.port ?? 8080;

app.get('/',(req,res)=>{
    res.json({msg:"Hello World this is the my first code with CI/CD implementation"})
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})