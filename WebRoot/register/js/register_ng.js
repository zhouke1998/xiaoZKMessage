
    var myApp = angular.module("myApp", []);

    myApp.controller('form_con', ['$scope',function ($scope) {
        $scope.hobbies = [
            {
                id:1,
                name:'玩游戏'
            },
            {
                id:2,
                name:'睡觉'
            },
            {
                id:3,
                name:'唱歌'
            },
            {
                id:4,
                name:'敲代码'
            }
        ];


        $scope.data = {
            hobbies:[1,3],
        }
        $scope.oriData = angular.copy($scope.data);

        $scope.reset = function () {
            if (confirm('确定重置？')) {
                $('#reg')[0].reset();
                $scope.data = angular.copy($scope.oriData);
                $scope.myForm.$setPristine();
            }
        }
        $scope.changeCheck= function (id){
            if($scope.data.hobbies.indexOf(id) === -1){
                $scope.data.hobbies.push(id);
            }else {
                $scope.data.hobbies.splice($scope.data.hobbies.indexOf(id),1);
            }
        }
    }])

