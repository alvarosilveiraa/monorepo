import {app} from '../config';
import {getUserController} from '../controllers';

app.get('/user', getUserController);
