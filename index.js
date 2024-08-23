import express from 'express';


const app = express();
app.listen(port, () => {
    console.log('Server runing on http://localhost:3000' + port)
})

