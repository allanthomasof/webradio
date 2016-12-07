angular.module("starter")


.controller("ControllerPlayer", function($scope, $http, $location) {

	var diretorio = "/mp3/";
    var musicas = ["erasmo", "guns", "oasis"];
    var musicaAtual = 0;       

	var statusPlayer = false;
	$scope.statusPlayer = "play";



	$scope.playPause = function() {
		if (statusPlayer === false) {
			play();
		} else {
			$scope.pause();
		}
	}
	play = function() {
		var player = document.getElementById("player");
		$scope.statusPlayer = "pause";
		$scope.tocandoAgora = musicas[musicaAtual];
		player.innerHTML = '<source id="player-source" type="audio/mp3" src=' + diretorio+musicas[musicaAtual] + '.mp3' + '/>';
		player.play();
		statusPlayer = true;

		//Avança para a próxima musica da playlist
		player.addEventListener('ended', $scope.avancar , false);
	}
	$scope.pause = function() {
		$scope.statusPlayer = "play";
		document.getElementById('player').pause();
		statusPlayer = false;
	}
	$scope.avancar = function() {
		if (statusPlayer) {
			musicaAtual ++;
			$scope.tocandoAgora = musicas[musicaAtual];
			if(musicaAtual >= musicas.length) musicaAtual = 0;
			document.getElementById("player").innerHTML = 
				'<source id="player-source" type="audio/mp3" src=' + diretorio+musicas[musicaAtual] + '.mp3' + '/>';
	        document.getElementById("player").load();
	        document.getElementById("player").play();
		}
	}



})

