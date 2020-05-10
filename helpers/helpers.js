//Game helpers

exports.setGameStatus = (game, status) => game.status = status;

exports.checkGameReady = game => {
    if (game.numberOfPlayers === game.table.length && game.teamA.length === game.teamB.length && game.status === 'waitingForPlayers' || game.status === 'Ready') return true
    else return false;
}

//Socket helpers

exports.sendGameData = (io, socket) => {
    const { game } = socket;
    io.of('/').in(game._id).clients((error, clients)=> {
        if (error) throw error;
        clients.forEach(client => {io.sockets.connected[client].game = socket.game});
        io.to(socket.id).emit('send-game-data', socket.game);
    });
};

exports.getUpdatedGame = (io,socket) => {
    const { game } = socket;
    console.log('game dentro de updated game', game)
    io.of('/').in(game._id).clients((error, clients)=> {
        if (error) throw error;
        console.log(clients);
        console.log(io.sockets.connected[clients[0]].game);
        const updatedGame = io.sockets.connected[clients[0]].game ? io.sockets.connected[clients[0]].game : game;
        console.log('justo después de actualizr', updatedGame);
        return updatedGame;
    });
}