function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function Ruby(){
    document.getElementById("output").innerHTML = "yap yap yap yapyypa yyap yapyap";
    document.getElementById("img").src="ruby.gif";
}
function Weiss(){
    document.getElementById("output").innerHTML = "hmph!";
    document.getElementById("img").src="weiss.gif";
}
function Blake(){
    document.getElementById("output").innerHTML = "cat.";
    document.getElementById("img").src="blake.gif";
}
function Yang(){
    document.getElementById("output").innerHTML = "pew pew bang bang ayaya";
    document.getElementById("img").src="yang.gif";
}

function rwby_fight_grimm(){
     document.getElementById("video_player").src="rwby_fight.mp4";
}

function rwby_fight_roman(){
     document.getElementById("video_player").src="rwby_roman_fight.mp4";
}

function ruby_fight_red(){
     document.getElementById("video_player").src="rwby_red_trailer.mp4";
}


const songs = ['red_like_roses_2.mp3','goodbye.mp3','die.mp3','path_to_isolation.mp3','one_thing.mp3'];
const song_names = ['Red Like Roses II','Time To Say Goodbye','Die','Path To Isolation','One Thing']
const song_covers = ['vol_1.jpg','vol_2.jpg', 'vol_2.jpg','vol_5.jpg','vol_6.jpg']
var song_num = 0;

function play_pause() {
    if(document.getElementById("music_player").paused){
        document.getElementById("play_pause").innerHTML = '<i class="fa fa-pause"</i>';
        document.getElementById("music_player").play();
        
    }
    else{
        document.getElementById("play_pause").innerHTML = '<i class="fa fa-play"</i>';
        document.getElementById("music_player").pause();
        
    }
} 
function back(){
    song_num = song_num - 1;
    if(song_num < 0){
        song_num = 4;
    }
    document.getElementById("music_player").src = songs[song_num];
    document.getElementById("test").innerHTML = song_num+1  + '/5';
    document.getElementById("display_song").innerHTML = song_names[song_num];
    document.getElementById("audio_cover").src = song_covers[song_num];
    document.getElementById("play_pause").innerHTML = '<i class="fa fa-play"</i>';
}

function next(){
    song_num = song_num + 1;
    if(song_num > 4){
        song_num = 0;
    }
    document.getElementById("music_player").src = songs[song_num];
    document.getElementById("test").innerHTML = song_num+1 + '/5';
    document.getElementById("display_song").innerHTML = song_names[song_num];
    document.getElementById("audio_cover").src = song_covers[song_num];
    document.getElementById("play_pause").innerHTML = '<i class="fa fa-play"</i>';
}

function mute(){
    if(document.getElementById("music_player").muted){
        document.getElementById("music_player").muted = false;
        document.getElementById("mute").innerHTML = '<i class="fa fa-volume-up"></i>';
    }
    else{
        document.getElementById("music_player").muted = true;
        document.getElementById("mute").innerHTML = '<i class="fa fa-volume-off"></i>';
    }
}