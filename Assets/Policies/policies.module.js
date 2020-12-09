var app = angular.module('policiesRoutingEx', ['ui.router', 'policiesMod']);

app.component('policiesMainComp', {
    bindings: {
    },
    templateUrl: 'main_layout.htm',
    controller: function policiesMainCompController($scope, $document, policiesSv, $stateParams) {

        function loadPolicies() {
            policiesSv.getData().then(function (response) {

                $scope.policies = response.data;
            });
        }

        $scope.DeletePolicy = function (Id) {
            policiesSv.deletePolicies(Id);
            //TODO Cant get the digest to work correctly so I did this
            location.reload();
        }

        $scope.Pdf = function (Id) {

            var doc = new jsPDF();
            var tableData = $document[0].getElementById("pdfTable").innerHTML;
            doc.fromHTML(
                tableData, 15, 15, {
                'width': 170
            });

            doc.save('policies.pdf');
        }
        loadPolicies();
    }
});

app.component('policiesViewComp', {
    bindings: {
    },
    templateUrl: 'view.htm',
    controller: function policiesViewCompController($scope, policiesSv, $stateParams) {
        policiesSv.getPolicyById($stateParams.id).then(function (response) {
            $scope.policy = response.data;
        });
    }
});

app.component('policiesUpdateComp', {
    bindings: {
    },
    templateUrl: 'update.htm',
    controller: function policiesUpdateCompController($scope, $state, $stateParams, policiesSv) {

        policiesSv.getPolicyById($stateParams.id).then(function (response) {
            $scope.policy = response.data;
        });

        $scope.Save = function (newPol) {
            policiesSv.updatePolicies(newPol, $stateParams.id);
            $state.go('main');
        }
    }
});

app.component('policiesCreateComp', {
    bindings: {
    },
    templateUrl: 'create.htm',
    controller: function policiesCreateCompController($scope, $state, $stateParams, policiesSv) {

        $scope.Save = function (newPol) {
            policiesSv.savePolicies(newPol);
            $state.go('main');
        }
    }
});

