define(['durandal/app'], function (app) {
    var vm = function () {
        this.displayName = 'Pokemóns List';
        this.description = '';
        this.records = [
            { name: 'Pokemón 1' },
            { name: 'Pokemón 2' },
            { name: 'Pokemón 3' },
            { name: 'Pokemón 4' },
            { name: '...' }
        ];
    };

    return vm;
});