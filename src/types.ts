

export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

//---------Fixação---------//

export enum CAR_BRANDS {
    VW = "Volkswagen",
    FIAT = "Fiat",
    GM = "Chevrolet"
}

export enum CAR_TYPES {
    SEDAN = "Sedan",
    HATCH = "Hatch",
    SUV = "SUV"
}

export enum CAR_FUEL {
    FLEX = "Flex",
    GASOLINA = "Gasolina",
    ALCOOL = "Alcool"
}

export type TCars = {
    id: string
    brand: CAR_BRANDS,
    model: string,
    type: CAR_TYPES
    fuel: CAR_FUEL
}