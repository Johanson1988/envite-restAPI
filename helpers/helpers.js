//Game helpers

exports.setGameStatus = (game, status) => game.status = status;

//Socket helpers

exports.sendGameData = (io, socket, game) => {
    if (game.numberOfPlayers === game.table.length && game.teamA.length === game.teamB.length && game.status === 'waitingForPlayers') game = this.setGameStatus(game, 'Ready');

    io.of('/').in(game._id).clients((error, data)=> {
        if (error) throw error;
        data.forEach(client => io.sockets.connected[client].game.table = game.table);
        io.to(socket.id).emit('send-game-data', socket.game);
    });
};