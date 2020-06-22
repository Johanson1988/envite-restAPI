//Game helpers

exports.setGameStatus = (game, status) => game.status = status;

exports.checkGameReady = game => {
   // console.log('game in checkgame', game);
    console.log('game.gameStatus === \'Ready\'', game.gameStatus === 'Ready' );
    console.log('game.numberOfPlayers === game.table.length', game.numberOfPlayers === game.table.length);
    console.log('game.teamA.length === game.teamB.length', game.teamA.length === game.teamB.length);
    console.log(`game.gameStatus === 'waitingForPlayers'`, game.gameStatus === 'waitingForPlayers')
    if (game.gameStatus === 'Ready' || game.numberOfPlayers === game.table.length && game.teamA.length === game.teamB.length && game.gameStatus === 'waitingForPlayers') return true
    else return false;
}

//Socket helpers

exports.sendGameData = (io, socket) => io.to(socket.game._id).emit('send-game-data', socket.game);

exports.getUpdatedGame = (io, socket) => {
    const { game } = socket;
    const adminId = Object.keys(io.sockets.adapter.rooms[game._id].sockets)[0];
    return io.sockets.connected[adminId].game;
}

exports.updateGame = (io, socket) => {
    const { game } = socket;
    const clients = Object.keys(io.sockets.adapter.rooms[game._id].sockets);
    clients.forEach(client => {
       /* console.log(client);
        console.log(io.sockets.connected[client].game);
        console.log('Juego nuevo:', io.sockets.connected[client].game);
        console.log('Juego viejo', io.sockets.connected[client].game); */
        io.sockets.connected[client].game = game;
        //console.log('Juego actualizado', socket.game);
    });
}
exports.shuffleCards = (io, socket) => {

    const { game } = socket;

    const deck = [{ valor: 1, palo: 'oros' }, { valor: 2, palo: 'oros' }, { valor: 3, palo: 'oros' }, { valor: 4, palo: 'oros' }, { valor: 5, palo: 'oros' }, { valor: 6, palo: 'oros' }, { valor: 7, palo: 'oros' }, { valor: 'sota', palo: 'oros' }, { valor: 'caballo', palo: 'oros' }, { valor: 'rey', palo: 'oros' },
    { valor: 1, palo: 'copas' }, { valor: 2, palo: 'copas' }, { valor: 3, palo: 'copas' }, { valor: 4, palo: 'copas' }, { valor: 5, palo: 'copas' }, { valor: 6, palo: 'copas' }, { valor: 7, palo: 'copas' }, { valor: 'sota', palo: 'copas' }, { valor: 'caballo', palo: 'copas' }, { valor: 'rey', palo: 'copas' }, 
    { valor: 1, palo: 'bastos' }, { valor: 2, palo: 'bastos' }, { valor: 3, palo: 'bastos' }, { valor: 4, palo: 'bastos' }, { valor: 5, palo: 'bastos' }, { valor: 6, palo: 'bastos' }, { valor: 7, palo: 'bastos' }, { valor: 'sota', palo: 'bastos' }, { valor: 'caballo', palo: 'bastos' }, { valor: 'rey', palo: 'bastos' },
    { valor: 1, palo: 'espadas' }, { valor: 2, palo: 'espadas' }, { valor: 3, palo: 'espadas' }, { valor: 4, palo: 'espadas' }, { valor: 5, palo: 'espadas' }, { valor: 6, palo: 'espadas' }, { valor: 7, palo: 'espadas' }, { valor: 'sota', palo: 'espadas' }, { valor: 'caballo', palo: 'espadas' }, { valor: 'rey', palo: 'espadas' }];
    const clients = Object.keys(io.sockets.adapter.rooms[game._id].sockets);
    
    
    
    game.table.forEach(player => {
        const hand = [];
        for (i = 0; i < 3; i++) {
            hand.push(deck.splice(Math.ceil(Math.random()*deck.length-1),1)[0]);
        }
    //console.log(player, hand);
    
    clients.forEach(client => io.sockets.connected[client].user._id === player.id ?
        io.to(client).emit('new-hand', hand) : console.log(io.sockets.connected[client].user._id, player));
    });
    const cardTurntUp = deck.splice(Math.ceil(Math.random()*deck.length),1)[0];
    console.log('Vira', cardTurntUp);
    
    return cardTurntUp;
}