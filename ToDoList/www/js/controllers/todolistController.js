(function () {
	angular.module('starter')
	.controller('listController', function ($scope) {

    $scope.items = [
      { name: 'Casa',
        tasks: [
          {
            name: 'Estudar Ionic',
            status: false
          },
          {
            name: 'Estudar React Native',
            status: true
          }
        ]
      },
      { name: 'UFCG',
        tasks: [
          {
            name: 'Estudar OAC',
            status: false
          },
          {
            name: 'Estudar LES',
            status: false
          },
          {
            name: 'Estudar Métodos Estatísticos ',
            status: false
          }
        ]
      }
    ];

	});
})();
