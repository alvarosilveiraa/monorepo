import {app} from '../config';
import {runNeuralNetworkBetsController} from '../controllers';

app.post('/neural-network/bets', runNeuralNetworkBetsController);
