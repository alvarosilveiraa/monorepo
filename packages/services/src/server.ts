import {server} from './config';
import './routes';

const {PORT = 80} = process.env;

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
