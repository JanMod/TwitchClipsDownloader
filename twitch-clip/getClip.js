const request = require('request');
var download = require('download-file')
var cheerio = require('cheerio');
const Clip = require('./Clip.js');
var clipsObj = [];


function myRequest() {
  request({
    method: 'get',
    url: 'https://api.twitch.tv/kraken/clips/top?limit=1&trending=true&period=month',
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'ztix9khyx6urq2hzmhr4o2ie3ezlhz'
    },
  }, function(error, response, body) {
    //Print the Response


    var clips = JSON.parse(body).clips;
    for (var i = 0; i < clips.length; i++) {

      clipsObj.push(new Clip(clips[i]));
      clipsObj[i].getClipUrl();
      clipsObj[i].createSRT();
    }
    //  console.log(response);
  })
};
myRequest();



/*
<div class="view-clip__bc flex__item--no-shrink flex flex--nowrap flex--verticalCenter"><div class="view-clip__bc-meta flex flex--verticalCenter flex--nowrap"><div class="flex__item--noShrink view-bc-pic"><a href="https://www.twitch.tv/lirik/clips?tt_medium=clips_web&amp;tt_content=player_profile_img" target="_blank" class="block"><img src="https://static-cdn.jtvnw.net/jtv_user_pictures/lirik-profile_image-476e7a592cdfed74-150x150.png" width="32" height="32" alt="LIRIK"></a></div><div class="view-bc-meta"><div class="view-bc-meta__name ellipsis"><a href="https://www.twitch.tv/lirik/clips?tt_medium=clips_web&amp;tt_content=player_channel_name">LIRIK</a></div><div class="sub-text ellipsis"><span><!-- react-text: 21 -->playing <!-- /react-text --><a target="_blank" class="inline" rel="nofollow" title="Fortnite" href="https://www.twitch.tv/directory/game/Fortnite/clips?tt_medium=clips_web&amp;tt_content=player_game">Fortnite</a></span></div></div></div><div class="flex__item flex-shrink-0"><a class="button button--hollow button--icon block clips-button ellipsis button--following button--disabled"><figure class="icon"><svg class="svg-heart" height="16px" version="1.1" viewBox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M8,14L1,7V4l2-2h3l2,2l2-2h3l2,2v3L8,14z" fill-rule="evenodd"></path></svg></figure></a></div></div>
*/
