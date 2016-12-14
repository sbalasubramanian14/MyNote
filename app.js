var mynote=angular.module("myNote",[]);
mynote.controller('NotesController',function($scope,$window){
	
	$scope.notes=[];
	$scope.current=undefined;
	setTimeout(update,2000);
	function update(){
		localStorage.notes=JSON.stringify($scope.notes);
		setTimeout(update,2000);
		console.log("updating");
	}

	$scope.init=function(){
		if(localStorage.notes!=undefined){
			console.log("initialised");
			$scope.notes=JSON.parse(localStorage.notes);
		}else{
			console.log("not initialised");
		}
	}
	$scope.newNote=function(){
		var note={"title":"No Title","content":""};
		$scope.notes.push(note);
		$scope.current=$scope.notes[$scope.notes.length-1];
		console.log($scope.current);
	}
	$scope.showNote=function(ele){
		console.log($scope.current);
		$scope.current=$scope.notes[ele.$index];
	}
	$scope.resetNote=function(){
		console.log("contents cleared");
		$scope.current.content="";
	}
	$scope.deleteNote=function(){
		i=$scope.notes.indexOf($scope.current);
		$scope.notes.splice(i,1);
		console.log("index "+i);
		console.log("note deletedd");
		$scope.current=undefined;
	}
});