//Game helpers

exports.setGameStatus = (game, status) => game.status = status;

exports.checkGameReady = game => {
    console.log('game in checkgame', game);
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