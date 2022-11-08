import express from 'express';
import config from './config'
import infoRoutes from './routes/info.routes'

const app = express();

//settings
app.set('port', config.port ) 

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(infoRoutes)

export default app