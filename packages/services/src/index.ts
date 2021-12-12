import {server} from './config';
import './routes';

server.listen(8080, () => console.log('listening on http://locahost:8080'));
