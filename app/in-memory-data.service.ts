export class InMemoryDataService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Genji', ultimate: 'Dragonblade' },
            { id: 12, name: 'McCree', ultimate: 'Deadeye' },
            { id: 13, name: 'Pharah', ultimate: 'Barrage' },
            { id: 14, name: 'Reaper', ultimate: 'Death Blossom' },
            { id: 15, name: 'Soldier: 76', ultimate: 'Tactical Visor' },
            { id: 16, name: 'Tracer', ultimate: 'Pulse Bomb' },
            { id: 17, name: 'Bastion', ultimate: 'Configuration: Tank' },
            { id: 18, name: 'Hanzo', ultimate: 'Dragonstrike' },
            { id: 19, name: 'Junkrat', ultimate: 'RIP-Tire' },
            { id: 20, name: 'Mei', ultimate: 'Blizzard' },
            { id: 21, name: 'Torbjörn', ultimate: 'Molten Core' },
            { id: 22, name: 'Widowmaker', ultimate: 'Infra-Sight' },
            { id: 23, name: 'D.Va', ultimate: 'Self-Destruct' },
            { id: 24, name: 'Reinhardt', ultimate: 'Earthshatter' },
            { id: 25, name: 'Roadhog', ultimate: 'Whole Hog' },
            { id: 26, name: 'Winston', ultimate: 'Primal Rage' },
            { id: 27, name: 'Zarya', ultimate: 'Graviton Surge' },
            { id: 28, name: 'Ana', ultimate: 'Nano Boost' },
            { id: 29, name: 'Lúcio', ultimate: 'Sound Barrier' },
            { id: 30, name: 'Mercy', ultimate: 'Resurrect' },
            { id: 31, name: 'Symmetra', ultimate: 'Teleporter' },
            { id: 32, name: 'Zenyatta', ultimate: 'Transcendence' },

        ];
        return { heroes };
    }
}
