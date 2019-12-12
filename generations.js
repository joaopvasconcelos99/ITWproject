define(['knockout'], function (ko) {
    var vm = function () {
        console.log('ViewModel initiated...')
        //---Variáveis locais
        var self = this;
        var baseUri = 'http://192.168.160.58/pokemons/api/PokemonSpecies/Generations';
        self.className = 'Generations';
        self.displayName=""
        self.description = 'This page aims to demonstrate ...' + baseUri + '</li></ul>';
        self.error = ko.observable();
        self.generations = ko.observableArray([]);
        //--- Internal functions
        function ajaxHelper(uri, method, data) {
            self.error(''); // Clear error message
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            })
        }
        //--- Externel functions (accessible outside)
        getGenerations = function () {
            console.log('CALL: Generations...')
            ajaxHelper(baseUri, 'GET').done(function (data) {
                self.generations(data);
            });
        };

        //---- initial call
        getGenerations();
    };
    return vm;
});
