define(['knockout'], function (ko) {
    var vm = function () {
        console.log('ViewModel initiated...')
        //---Variáveis locais
        var self = this;
        var baseUri = 'http://192.168.160.58/pokemons/api/PokemonSpecies/Colors';
        self.className = 'Colors';
        self.displayName=""
        self.description = 'This page aims to demonstrate ...' + baseUri + '</li></ul>';
        self.error = ko.observable();
        self.colors = ko.observableArray([]);
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
        getColors = function () {
            console.log('CALL: Colors...')
            ajaxHelper(baseUri, 'GET').done(function (data) {
                self.colors(data);
            });
        };

        //---- initial call
        getColors();
    };
    return vm;
});
