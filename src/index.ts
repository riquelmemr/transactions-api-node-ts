import express, { Request, Response } from 'express';
import { CreateUserController } from './controllers/user/create-user.controller';
import { DeleteUserController } from './controllers/user/delete-user.controller';
import { GetAllUsersController } from './controllers/user/get-all-users.controller';
import { GetUserController } from './controllers/user/get-user.controller';
import { UpdateUserController } from './controllers/user/update-user.controller';
import verify from './middlewares/verify';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log('Servidor iniciado'));

app.get('/', (request: Request, response: Response) => {
  return response.send('OK');
});

const createUserController = new CreateUserController();
app.post('/users', verify, createUserController.execute);

const getUserController = new GetUserController();
app.get('/users/:id', getUserController.execute);

const getAllUsersController = new GetAllUsersController();
app.get('/users', getAllUsersController.execute);

const updateUserController = new UpdateUserController();
app.put('/users/:id', updateUserController.execute);

const deleteUserController = new DeleteUserController();
app.delete('/users/:id', deleteUserController.execute);