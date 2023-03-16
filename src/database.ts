import { ACCOUNT_TYPE, TAccount, TCars, CAR_BRANDS, CAR_TYPES, CAR_FUEL } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

// Exercício de Fixação
export const cars: TCars[] = [
    {
        id: "c001",
        brand: CAR_BRANDS.VW,
        model: "Gol",
        type: CAR_TYPES.HATCH,
        fuel: CAR_FUEL.ALCOOL
    },
    {
        id: "c002",
        brand: CAR_BRANDS.FIAT,
        model: "Cronos",
        type: CAR_TYPES.SEDAN,
        fuel: CAR_FUEL.GASOLINA
    },
    {
        id: "c003",
        brand: CAR_BRANDS.GM,
        model: "Spin",
        type: CAR_TYPES.SUV,
        fuel: CAR_FUEL.FLEX
    }
]