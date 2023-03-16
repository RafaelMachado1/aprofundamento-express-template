import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, cars, } from './database'
import { ACCOUNT_TYPE, CAR_BRANDS, CAR_FUEL, CAR_TYPES, TAccount, TCars } from './types'


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

//Pratica Guiada
app.get("/accounts/:id", (req: Request, res: Response) => {
    const id: string = req.params.id

    const result = accounts.find((item) => item.id === id)

    res.status(200).send(result)
})


app.put("/accounts/:id", (req: Request, res: Response) => {
    const id: string = req.params.id
    const newOwerName: string | undefined = req.body.owerName
    const newBalance: number | undefined = req.body.balance
    const newType: ACCOUNT_TYPE | undefined = req.body.type

    const account: TAccount = accounts.find((item) => item.id === id)
    console.log("antes", account)

    if(account){
        account.ownerName = newOwerName || account.ownerName
        account.type = newType || account.type

        account.balance = isNaN(newBalance) ? account.balance : newBalance
    }

    console.log("depois", account)

    res.status(201).send("conta alterada")
})


app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id: string = req.params.id

    const index: number = accounts.findIndex((item) => item.id === id)
    console.log("index", index)
    let message: string

    if (index >= 0) {
        accounts.splice(index, 1)
        message = "item Deletado com sucesso"
    } else {
        message = "Nenhum item encontrado"
    }

    console.log(accounts)
    res.status(200).send(message)

})

//Ordem dos Métodos
//GET
//POST
//PUT
//DELETE
//Colocar os EndPoint com params sempre no final



//Exercício de fixação feito na ordem certa

//Endpoint que busca todos os cars
app.get("/cars", (req: Request, res: Response)=>{
    res.status(200).send(cars)
})

//Endpoint para cadastrar novo cars
app.post("/cars", (req: Request, res: Response)=>{
    const {id, brand, model, type, fuel} = req.body as TCars

    const newCar = {
        id,
        brand,
        model,
        type,
        fuel
    }
    cars.push(newCar)
    res.status(201).send("Carro cadastrado com sucesso")
})

//Endpoint para editar dados do cars
app.put("/cars/:id", (req: Request, res: Response)=>{
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newBrand = req.body.brand as CAR_BRANDS | undefined
    const newModel = req.body.model as string | undefined
    const newType = req.body.type as CAR_TYPES |undefined
    const newFuel = req.body.fuel as CAR_FUEL | undefined

    const car = cars.find((car)=>{
        return car.id === id
    })

    if(car){
        car.id = newId || car.id
        car.brand = newBrand || car.brand
        car.model = newModel || car.model
        car.type = newType || car.type
        car.fuel = newFuel || car.fuel
        res.status(200).send("Atualização realizada com sucesso")
    }else{
        res.status(404).send("Item não encontrado")
    }
})

//Endpoint para deletar cars
app.delete("/cars/:id", (req: Request, res: Response)=>{
    const id = req.params.id
    const carIndex = cars.findIndex((car) => {
        return car.id === id
    })
    if (carIndex >= 0) {
        cars.splice(carIndex, 1)
        res.status(200).send("Item deletado com sucesso")
    } else {
        res.status(404).send("Item não encontrado")
    }
})

//Ordem do CRUD
// POST
// GET
// PUT
// DELETE