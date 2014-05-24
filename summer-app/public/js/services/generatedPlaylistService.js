//generatedPlaylistService.js


summerApp.factory('generatedPlaylistService', function () {
	var generatedPlaylistService = {
		sharedObjects :{
			spotifyPlaylist: [],
			soundcloudPlaylist : []
		},
		updatePlayListSpotify: function (spotifyPlaylist_) {
			console.log("update soundcloudPlaylist");
			console.log(spotifyPlaylist_);
			generatedPlaylistService.sharedObjects.spotifyPlaylist = spotifyPlaylist_;
		},
		updatePlayListSoundcloud: function (soundcloudPlaylist_) {
			console.log("update soundcloudPlaylist");
			console.log(soundcloudPlaylist_);
			generatedPlaylistService.sharedObjects.soundcloudPlaylist = soundcloudPlaylist_;
		}
	};
	return generatedPlaylistService;
});