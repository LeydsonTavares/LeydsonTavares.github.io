app.service('appService', function(JsonFactory) {

    this.orcamentos = [];

    this.getCurriculo = function() {
        return JsonFactory.get();
    }

});