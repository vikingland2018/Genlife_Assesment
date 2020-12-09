//Policy services
//
var policiesMod = angular.module('policiesMod', []);

policiesMod.service('policiesSv', function ($http) {

    this.getData = function () {
        return $http({
            method: 'GET',
            url: "../api/Policies/",
        }).then(function (data) {
            return data;
        }, function (error) {});
    }

    this.getPolicyById= function (Id) {
        return $http({
            method: 'GET',
            url: "../api/Policies/" + Id,
        }).then(function (data) {
            return data;
        }, function (error) {});
    }

    this.updatePolicies = function (policy, id) {
        return $http({
            method: "PUT",
            url: "../api/Policies/" + id,
            data: policy
        });
    }

    this.savePolicies = function (policy) {
        return $http({
            method: "POST",
            url: "../api/Policies/" ,
            data: policy
        });
    }
   
    this.deletePolicies = function (Id) {
        return $http({
            method: "DELETE",
            url: "../api/Policies/" + Id
        });
    }

});