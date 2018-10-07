const team = {
    _players: [
        {
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11
        },
        {
            firstName: "Pete",
            lastName: "Wheeler",
            age: 54
        },
        {
            firstName: "Pia",
            lastName: "Gray",
            age: 43
        }
    ],
    _games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentsPoints: 27
        },
        {
            opponent: "Dallas",
            teamPoints: 26,
            opponentsPoints: 18
        },
        {
            opponent: "Ricardos",
            teamPoints: 35,
            opponentsPoints: 7
        }
    ],
    get getPlayers () {
        return this._players;
    },
    get getGames () {
        return this._games;
    },
    addPlayer (firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this._players.push(player);
    },
    addGame (opponentsName, teamsPoints, opponentsPoints) {
        let game = {
            opponentsName: opponentsName,
            teamsPoints: teamsPoints,
            opponentsPoints: opponentsPoints
        };

        this._games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("The Magic", 12, 6);
team.addGame("The Chiefs", 51, 16);
team.addGame("The Wasters", 9, 55);
console.log(team._players);
console.log(team._games);