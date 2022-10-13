
import { ConverterService } from '../../services/ConverterService'
import mongoose from 'mongoose'

const itemPrice = 1.23
const itemPriceWithLetters: string | number = "m"

afterAll(done => {
    mongoose.connection.close()
    done()
})

test('Conversão deve retornar os valores convertidos', async () => {
    const result = await ConverterService.Converter(itemPrice)
    expect(result).toHaveProperty('EUR')
    expect(result).toHaveProperty('USD')
    expect(result).toHaveProperty('INR')
    expect(result).toEqual(expect.any(Object))
})

test('Conversão deve retornar NaN quando colocado letras no parâmetro', async () => {
    const result = await ConverterService.Converter(itemPriceWithLetters)
    expect(result.EUR).toBe(NaN || "NaN")
    expect(result.USD).toBe(NaN || "NaN")
    expect(result.INR).toBe(NaN || "NaN")
    expect(result).toEqual(expect.any(Object))
})
