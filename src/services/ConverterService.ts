import axios from 'axios'
import { Currencies } from '../utils/currencies'
const decimalPlaces = 2
const baseUrl = "https://economia.awesomeapi.com.br"

export const ConverterService = {

    CurrencyFormatter: (value: number) => {
        const decimalPlacesFormated = Number(value.toFixed(decimalPlaces))
        const valueFormated = decimalPlacesFormated.toLocaleString('pt-br', { minimumFractionDigits: 2 })
        return valueFormated
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Converter: async (price: any) => {
        try {
            const resp = await axios
                .get(`${baseUrl}/json/last/${Currencies.realBrasilian}-${Currencies.dolar},${Currencies.realBrasilian}-${Currencies.euro},${Currencies.realBrasilian}-${Currencies.indianRupe}`)

            const priceDolar: number = price * Number(resp.data[`${Currencies.realBrasilian}${Currencies.dolar}`].ask)
            const priceEuro: number = price * Number(resp.data[`${Currencies.realBrasilian}${Currencies.euro}`].ask)
            const priceIndianRupe: number = price * Number(resp.data[`${Currencies.realBrasilian}${Currencies.indianRupe}`].ask)

            const priceDolarFormated = ConverterService.CurrencyFormatter(priceDolar)
            const priceEuroFormated = ConverterService.CurrencyFormatter(priceEuro)
            const priceIndianRupeFormated = ConverterService.CurrencyFormatter(priceIndianRupe)

            return {
                USD: priceDolarFormated,
                EUR: priceEuroFormated,
                INR: priceIndianRupeFormated,
            }

        } catch (err) {
            console.error(err)
            return { msg: "Não foi possivel fazer a conversão" }
        }
    }
}

