import express, { Request, Response } from 'express';
import { CreateUserController, DeleteUserController, GetAllUsersController, GetUserController, UpdateUserController } from './controllers/user';
import { verifyCreateUser, verifyUpdateUser } from './middlewares';
import { UserRepository } from './repositories/user.repository';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log('Servidor iniciado'));

app.get('/', (request: Request, response: Response) => {
  return response.send('OK');
});

export const userRepository = new UserRepository();

const createUserController = new CreateUserController();
app.post('/users', verifyCreateUser, createUserController.execute);

const getUserController = new GetUserController();
app.get('/users/:id', getUserController.execute);

const getAllUsersController = new GetAllUsersController();
app.get('/users', getAllUsersController.execute);

const updateUserController = new UpdateUserController();
app.put('/users/:id', verifyUpdateUser, updateUserController.execute);

const deleteUserController = new DeleteUserController();
app.delete('/users/:id', deleteUserController.execute);