export class InMemoryDataService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Genji' },
            { id: 12, name: 'McCree' },
            { id: 13, name: 'Pharah' },
            { id: 14, name: 'Reaper' },
            { id: 15, name: 'Soldier: 76' },
            { id: 16, name: 'Tracer' },
            { id: 17, name: 'Bastion' },
            { id: 18, name: 'Hanzo' },
            { id: 19, name: 'Junkrat' },
            { id: 20, name: 'Mei' },
            { id: 21, name: 'Torbjörn' },
            { id: 22, name: 'Widowmaker' },
            { id: 23, name: 'D.Va' },
            { id: 24, name: 'Reinhardt' },
            { id: 25, name: 'Roadhog' },
            { id: 26, name: 'Winston' },
            { id: 27, name: 'Zarya' },
            { id: 28, name: 'Ana' },
            { id: 29, name: 'Lúcio' },
            { id: 30, name: 'Mercy' },
            { id: 31, name: 'Symmetra' },
            { id: 32, name: 'Zenyatta' },

        ];
        return { heroes };
    }
}
