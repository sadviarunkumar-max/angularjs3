
var app = angular.module('myApp', []);
//parent controller
app.controller('collegecontroller',function($scope){
    $scope.collegename="abc college";
});
//child controller
app.controller('studentcontroller', function($scope)
{
    $scope.name="Sadvi",
    $scope.department= "Information Science and Engineering";
    $scope.semester=3;
    $scope.students=[
        "Bhoomika K C",
        "Manya",
        "Dimple S N",
        "Lavanya U M",
    ];
    $scope.USN=[
        "4MH25IS004",
        "4MH25IS028",
        "4MH25IS057",
        "4MH25IS025",
    ];
    $scope.addstudents=function(){
        if($scope.name.trim()!==""){
            $scope.students.push($scope.name);
            $scope.name="";
        }
        else{
            alert("please enter a student name:")
        }
    };
    $scope.addUSN=function(){
        if($scope.usn.trim()!==""){
            $scope.USN.push($scope.usn);
            $scope.usn="";
        }
        else{
            alert("please enter a student usn:")
        }
    };
}
);