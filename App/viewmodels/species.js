define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = 'http://192.168.160.58/pokemons/api/PokemonSpecies/GetPage';
        self.displayName = 'Pokemón Species List';
        self.error = ko.observable('');
        self.pagesize = 20;
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //self.totalRecords = ko.observable(-1);
        self.totalRecords = ko.observable(250);
        self.currentPage = ko.observable(1);
        self.previousPage = ko.computed(function () {
            return self.currentPage() * 1 - 1;
        }, self);
        self.nextPage = ko.computed(function () {
            return self.currentPage() * 1 + 1;
        }, self);
        self.fromRecord = ko.computed(function () {
            return self.previousPage() * self.pagesize + 1;
        }, self);
        self.toRecord = ko.computed(function () {
            return Math.min(self.currentPage() * self.pagesize, self.totalRecords());
        }, self);
        self.totalPages = ko.computed(function () {
            return Math.ceil(self.totalRecords() / self.pagesize);
        }, self);
        self.pageArray = function () {
            var list = [];
            var size = Math.min(self.totalPages(), 9);
            var step;
            if (size < 9 || self.currentPage() === 1)
                step = 0;
            else if (self.currentPage() >= self.totalPages() - 4)
                step = self.totalPages() - 9;
            else
                step = Math.max(self.currentPage() - 5, 0);

            for (var i = 1; i <= size; i++)
                list.push(i + step);
            return list;
        };
        //--- Page Events
        self.activate = function (id) {
            // Activation code here
            if (id)
                self.currentPage(id);
            console.log('CALL: getSpecies...');
            var composedUri = baseUri + "?page=" + self.currentPage() + "&pageSize=" + self.pagesize;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data.Species);
                self.totalRecords(data.Total);
            });
        };
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
            });
        }
    };

    return vm;
});