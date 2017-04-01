app.factory('JsonFactory', function($resource) {
    return $resource('/data/curriculo.json', {}, {
        'get': { method: 'GET' }
    });

});