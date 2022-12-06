function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function Ruby(){
    document.getElementById("output").innerHTML = "Ruby Rose is the main protagonist of RWBY. Ever since she was little, Ruby had idealized the Huntsman profession due to the stories her parents used to read her. Due to this, she's developed a strong sense of moral justice. However, she's shown to be quite naive due to her romanticizing the view of being a Huntsman. Despite this, she's shown to be a capable leader through being compassionate towards her teammates, as well as her ability for critical thinking during battles. Ruby's weapon of choice is a Scythe; she designed herself with a high-caliber sniper rifle attached to the end. The scythe gun shoots dust and can transform into a compact version for transportation. Ruby's Semblance is called 'Petal Burst'; this allows her to dash in whichever direction she chooses, leaving a trail of rose petals in her wake.";
    document.getElementById("img").src="ruby.gif";
    document.getElementById("weapon").src="crescant_rose.png";
    document.getElementById("semblance").src="rose_petal.gif";
}
function Weiss(){
    document.getElementById("output").innerHTML = "Weiss Schnee is one of the main protagonists of RWBY. Born into the prestigious Schnee Dust Company, she was taught to keep up appearances in public due to her family's name. Due to her being the heir to the Schnee dust company, everything in her life had already been decided for her, and because of this, she is somewhat rebellious. Due to her upbringing, she's always felt lonely throughout her life, causing her to develop a 'difficult personality. Weiss' characterization can be summarized through her song 'This Life is Mine'. The song describes her 'so-called family, treating her only as a pawn. However, as the song continues, she starts breaking free from the shackles that bound her, and now a sense of freedom, she's finally claiming her life as her own. Due to Weiss being raised by a less-than-savory family, she was educated to believe that faunas were lesser beings. This caused internal conflict in team RWBY, seeing how Blake was a fauna. However, the concept was swiftly dismissed in the next volume. Although in the anime 'RWBY: IceQueendom' (yes, that's really the name),  Weiss remained racist, which is horrible. However, this allowed for much better character growth and development as they had time to resolve their issues. Weiss uses a multi-action dust rapier called 'Myrtenaster'. The Rapier has six revolving chambers inside the guard. The chamber is stocked with red, cyan, purple, white, yellow, and blue dust. Weiss can use the dust within the revolvers in its raw form or combined with her semblance, 'glyphs.' Using dust with her glyphs produces a variety of effects. Her most notable glyphs are time dilation, gravity glyphs, summoning glyphs, movement glyphs, and projective glyphs.";
    document.getElementById("img").src="weiss.gif";
    document.getElementById("weapon").src="weiss_weapon.jpg";
    document.getElementById("semblance").src="glyph.gif";
}
function Blake(){
    document.getElementById("output").innerHTML = "Blake Belladonna is one of the main protagonists of RWBY. Being a Fauna, blake has animal-like characteristics. In her case, she has the traits of a cat. Being the daughter of Ghira Belladonna (the previous leader of the White Fang. tl;dr the white fang was a peaceful group of Faunas advocating for equality. However, due to a change in leadership, they turned to a terrorist organization, trying to find freedom through violence.) she became a member of the White Fang until she went AWOL after realizing the path towards equality should not be laid with violence. 'An eye for an eye and the world goes blind.' Blake's weapon, 'Gambol Shroud,' is a combination of 3 weapon archetypes; a sword, a gun, and a grappling hook. Blake's semblance is creating a 'shadow-clone' of herself. Her semblance allows her to dash in any direction of her choosing, leaving behind a clone of herself. With the use of dust, her clones can inherit a property based on what dust is used.";
    document.getElementById("img").src="blake.gif";
    document.getElementById("weapon").src="blake_weapon.gif";
    document.getElementById("semblance").src="clone.gif";
}
function Yang(){
    document.getElementById("output").innerHTML = "Yang Xiao Long is one of the main protagonists of RWBY. She is also the half-sister of the main protagonist, Ruby. Yang's personality can be described as outgoing and energetic. Yang uses her anger as an asset during battles in the form of her semblance. However, overall her anger is tied back to her abandonment issues on her mother's side. Yang adapts more of a 'brawler' fighting style, which is evocative of her personality. This is further personified through her choice of weapon; a shotgun gauntlet named 'Ember Celica.' Her semblance, 'Burn,' allows her to absorb kinetic energy from the blows she takes and redirect this energy toward her opponents. Additionally, this incidentally makes her hair glow and turns her eyes red.";
    document.getElementById("img").src="yang.gif";
    document.getElementById("weapon").src="yang_weapon.gif";
    document.getElementById("semblance").src="super_saiyan.gif";
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
