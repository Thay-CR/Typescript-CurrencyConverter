import { UserService } from '../../services/UserService'
import mongoose from 'mongoose';

const name = "Mariana motta"
const login = "mariana@gmail.com"
const password: string | Buffer = "Mary123@456"

afterAll(done => {
    mongoose.connection.close()
    done()
})

jest.setTimeout(1000)

test('Deve cadastrar um novo usuário', async () => {
    const result = await UserService.newUser(name, login, password)
    expect(result).toHaveProperty('msg')
    expect(result).toEqual(expect.any(Object))
})
