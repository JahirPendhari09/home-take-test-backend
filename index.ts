const  express = require('express');
const { connection } = require('./db')
const { todoRoutes } = require('./routes/todo.route')

require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/todos', todoRoutes)

app.listen(process.env.PORT , async()=>{
    try{
        await connection
        console.log('server is running')
    }catch(err){
        console.log("err",err)
    }
})
