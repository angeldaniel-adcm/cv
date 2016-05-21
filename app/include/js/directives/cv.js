angular.module("cvDirectives",[])
.directive("coverInfo",["globalVariables",function(globalVariables){
	return{
		restrict:"E",
		templateUrl:globalVariables.hostname+"include/templates/coverInfo.html"
	}
}])
.directive("personalInfo",["globalVariables",function(globalVariables){
	return{
		restrict:"E",
		templateUrl:globalVariables.hostname+"include/templates/personalInfo.html"
	}
}])
.directive("footerInfo",["globalVariables",function(globalVariables){
	return{
		restrict:"E",
		templateUrl:globalVariables.hostname+"include/templates/footerInfo.html"
	}
}])