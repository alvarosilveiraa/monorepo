import {Request, Response} from 'express';
import fs from 'fs';
import {find} from 'lodash';
import path from 'path';
import {forEachAsync} from '@developer-ui/common';
import {puppeteerUC} from '../use-cases';

export const runScraperRacesByDatesController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const runScraper = async () => {
    puppeteerUC.execute(async () => {
      await puppeteerUC.page?.goto('https://beth.bet/horse-racing/results');

      // Clique no botão de "aceitar cookies"
      await puppeteerUC.page?.waitForSelector('#cookie_action_close_header');
      await puppeteerUC.page?.click('#cookie_action_close_header');

      const getRacesByDate = async (date: string) => {
        const races: any[] = [];

        const cards = await puppeteerUC.fetch(
          `https://app.beth.bet/api/publicresults/GetCards?date=${date}`,
        );

        const cardsWeather = await puppeteerUC.fetch(
          `https://app.beth.bet/api/publicresults/GetCardsWeather?datetime=${date}`,
        );

        await forEachAsync(cards, async (card, index) => {
          const cardDetails = await puppeteerUC.fetch(
            `https://app.beth.bet/api/publicresults/GetCardDetails?cardsId=${card.cardsId}`,
          );

          const placeWeather = await puppeteerUC.fetch(
            `https://app.beth.bet/api/publicresults/GetPlaceWeatherDetails?placeName=${card.placeName}&raceDateAndTime=${card.raceDate}`,
          );

          const raceInfo = await puppeteerUC.fetch(
            `https://app.beth.bet/api/publicresults/GetRaceInfoByCardsId?cardsId=${card.cardsId}`,
          );

          const horses: any[] = [];

          await forEachAsync(cardDetails, async ({horseId}) => {
            console.log(`[${date}] card ${index + 1} of ${cards.length} - horse ${horseId}`);

            const horsePedigree = await puppeteerUC.fetch(
              `https://app.beth.bet/api/publicresults/GetHorsePedigree?horseId=${horseId}`,
            );

            const horseHistory = await puppeteerUC.fetch(
              `https://app.beth.bet/api/publicresults/GetHorseHistory?horseId=${horseId}`,
            );

            horses.push({
              horseId,
              horsePedigree,
              horseHistory,
            });
          });

          races.push({
            card,
            cardWeather: find(cardsWeather, {city: card.placeName}),
            cardDetails,
            placeWeather,
            raceInfo,
            horses,
          });
        });

        return races;
      };

      const getRacesByDates = async (dates: string[]) => {
        const promises = dates.map(async date => {
          try {
            const races = await getRacesByDate(date);

            fs.writeFileSync(
              path.join(__dirname, '../../../common/src/brain/modules/race', `${date}.json`),
              JSON.stringify(races, null, 2),
            );
          } catch (err) {
            console.log('err', err);
          }
        });

        await Promise.all(promises);
      };

      await forEachAsync(req.body, (dates: string[]) => getRacesByDates(dates));

      await puppeteerUC.page?.close();

      await puppeteerUC.browser?.close();
    });
  };

  runScraper();

  res.status(200).send();
};
