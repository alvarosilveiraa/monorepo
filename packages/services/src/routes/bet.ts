import {app} from '../config';
import {postBetsPredictionController} from '../controllers';

app.post('/bets/prediction', postBetsPredictionController);
