define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'species', title: 'Species', moduleId: 'viewmodels/species', nav: true },
                { route: 'species(/:id)', title: 'Species', moduleId: 'viewmodels/species', hash: '#species', nav: false },
                { route: 'specieDetails(/:id)', title: 'Specie Details', moduleId: 'viewmodels/specieDetails', hash: '#specieDetails', nav: false },
                { route: 'pokemons', title:'Pokemóns', moduleId: 'viewmodels/pokemons', nav: true },
                { route: 'pokemonDetails(/:id)', title: 'Pokemón Details', moduleId: 'viewmodels/pokemonDetails', hash: '#pokemonDetails', nav: false },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
                { route: 'search(/:id)', title: 'Pesquisar', moduleId: 'viewmodels/search', hash: '#search', nav: false },

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});