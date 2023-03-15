import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { ACCOUNT_TYPE, TAccount } from './types'

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


