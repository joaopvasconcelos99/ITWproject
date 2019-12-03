define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = 'http://192.168.160.58/pokemons/api/Pokemons/';
        self.displayName = 'Pokemón Details';
    };

    return vm;
});