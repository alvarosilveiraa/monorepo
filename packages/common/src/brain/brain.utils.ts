import fs from 'fs';
import path from 'path';

export const getHash = (value: string) => {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);

    hash |= 0;
  }

  return hash;
};

export const getBets = () => {
  const bets = [];

  const bets202107File = fs.readFileSync(path.join(__dirname, 'bets/2021-07.json'), 'utf-8');

  const bets202108File = fs.readFileSync(path.join(__dirname, 'bets/2021-08.json'), 'utf-8');

  const bets202109File = fs.readFileSync(path.join(__dirname, 'bets/2021-09.json'), 'utf-8');

  const bets202110File = fs.readFileSync(path.join(__dirname, 'bets/2021-10.json'), 'utf-8');

  const bets202111File = fs.readFileSync(path.join(__dirname, 'bets/2021-11.json'), 'utf-8');

  const bets202112File = fs.readFileSync(path.join(__dirname, 'bets/2021-12.json'), 'utf-8');

  const bets202107 = JSON.parse(bets202107File);

  const bets202108 = JSON.parse(bets202108File);

  const bets202109 = JSON.parse(bets202109File);

  const bets202110 = JSON.parse(bets202110File);

  const bets202111 = JSON.parse(bets202111File);

  const bets202112 = JSON.parse(bets202112File);

  bets.push(...bets202107);

  bets.push(...bets202108);

  bets.push(...bets202109);

  bets.push(...bets202110);

  bets.push(...bets202111);

  bets.push(...bets202112);

  return bets;
};
