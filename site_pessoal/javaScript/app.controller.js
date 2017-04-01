app.controller('bodyController', function($scope, appService) {

    $scope.myProfile = {
        nome: 'Leydson Tavares',
        cargo: 'Development Software by Stefanini',
        ano: new Date().getFullYear(),
        foto: 'img/myImagem.jpg'
    };
});


app.controller('appController', function($scope, appService) {

    // VARIAVEIS
    $scope.listOrcamentos = [];
    $scope.orcamento = {};

    $scope.curriculo = appService.getCurriculo();

    // $scope.resumo = ['Graduado 6º período no curso de Sistemas de Informação',
    //     'Monitor na disciplina cálculo Diferencial e Integral',
    //     'Aluno com CRE 9, 04 '
    // ];
    // $scope.academico = [{
    //         data: '(2014 - 2017)',
    //         formacao: 'Bacharel em Sistemas de Informação na UniFacisa'
    //     },
    //     {
    //         data: '(2017)',
    //         formacao: 'Estagio na Stefanini'
    //     }
    // ];

    $scope.solicitarOrcamento = function() {
        appService.orcamentos.push($scope.orcamento);
        limparCampos()


    };

    function limparCampos() {
        $scope.orcamento = {};
    }

});

app.controller('dashboardController', function($scope, appService) {

    $scope.listOrcamentos = appService.orcamentos;




});