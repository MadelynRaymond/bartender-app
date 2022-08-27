import express from 'express';
import cors from 'cors'
import bcrypt from 'bcrypt'
import prisma from './prisma'
import { getStaffLogin, postStaffMember } from './controllers/staffController';
import { getCocktailMenu, postCocktail } from './controllers/menuController';
import { getOrders, postOrder } from './controllers/orderController';

const app = express()
app.use(express.json())
const port = 8080

app.post('/Staff', postStaffMember)

app.get('/Login', getStaffLogin)

app.get('/Cocktails', getCocktailMenu)

app.post('/Cocktails', postCocktail)

app.get('/Orders', getOrders)

app.post('/Orders', postOrder)

app.listen(port,() => {
    console.log(`Now listening on port ${port}`)
} )
