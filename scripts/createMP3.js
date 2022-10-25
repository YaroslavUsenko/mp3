'use strict'

function createMP3(memory, songs) {
  return {
    memory: memory,
    songs: songs,
    currentSong: 0,
    currentTime: 0,
    volume: 5,
    play: function () {
      this.currentTime += 1
    },
    getSongs: function () {
      var songList = []

      for (let i = 0; i < this.songs.length; i++) {
        var numberOfSong = i + 1
        songList.push(numberOfSong + '. ' + this.songs[i][0])
      }

      return songList
    },
    addSong: function (song) {
      if (this.songs.length < this.memory) {
        this.songs.push(song)
      }
    },
    removeSong: function (songName) {
      for (let i = 0; i < this.songs.length; i++) {
        if (this.songs[i][0] === songName) {
          this.songs.splice(i, 1)
          break
        }
      }
    },
    nextSong: function () {
      if (this.currentSong < this.songs.length - 1) {
        this.currentSong++
        this.currentTime = 0
      }
    },
    previousSong: function () {
      if (this.currentSong > 0) {
        this.currentSong--
        this.currentTime = 0
      }
    },
    setSong: function (songNumber) {
      this.currentSong = songNumber
    },
    increaseVolume: function () {
      if (this.volume < 100) {
        this.volume++
      }
    },
    decreaseVolume: function () {
      if (this.volume > 0) {
        this.volume--
      }
    },
  }
}

var MP3 = new createMP3(memory, songs)
