var player ={
  playerName: 'Gerard Pique',
  height: '1.93m',
  position: 'Centre-Back',
  nationality: 'Spain',
  transferFee: 4300000,
  currentClub: 'F.C. Barcelona' }

var Club = [{
    playerName: 'Gerard Pique',
    height: '1.93m',
    position: 'Centre-Back',
    nationality: 'Spain',
    transferFee: 4300000,
    currentClub: 'F.C. Barcelona' },
  {
    playerName: 'Luis Suarez',
    height: '1.82m',
    position: 'Centre-Forward',
    nationality: 'Uruguay',
    transferFee: 73000000,
    currentClub: 'F.C. Barcelona' } ];

function isName(playerClub) {
    return playerClub.playerName === player.playerName;
}

console.log(Club.find(isName));
// { name: 'cherries', quantity: 5 }
