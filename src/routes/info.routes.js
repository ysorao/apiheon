import { Router} from 'express';
import { getInfo, getInfoHabeas, getInfoHabeasMenor, createHabeas,createHabeasMenor, getInfoMDById, updateHabeasMenor, createInfo } from '../controllers/info.controllers'

const jwt = require('jsonwebtoken')


const verifyToken = ((req, res, next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token){
        res.sendStatus(401).send({
            error: 'Se requiere token para la autorizacion'
        })
        return
    }
    token = token.split(" ")[1]
    if(token){
        jwt.verify(token, process.env.SECRETKEY, (error, decoded)=>{
            if(error){
                return res.json({
                    message: 'El token no es valido'
                });
            }else{
                req.decoded = decoded
                next();
            }
        })
    }
})


const router = Router()

router.get('/info',verifyToken, getInfo)

router.get('/infoMD/:id', getInfoMDById)

router.get('/infoHabeas', verifyToken, getInfoHabeas )

router.get('/infoHabeasMenor', verifyToken, getInfoHabeasMenor )

router.post('/createHabeas', verifyToken, createHabeas )

router.post('/createHabeasMenor', verifyToken, createHabeasMenor )

router.post('/createInfo', verifyToken, createInfo )

router.put('/updateHabeasMenor/:id', verifyToken, updateHabeasMenor)


export default router
