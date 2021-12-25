import {app} from '../config';
import {runScraperRacesByDatesController} from '../controllers';

app.post('/scraper/races', runScraperRacesByDatesController);
