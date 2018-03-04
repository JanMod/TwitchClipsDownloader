
  
  const request = require('request');
  var download = require('download-file')
  var cheerio = require('cheerio');
  const Clip = require('./Clip.js');
  var clipsObj = [];
  
  
  var myRequest = function(query,successCb, errorCb) {
    console.log(query.streamer);
    clipsObj = [];
    request({
      method: 'get',
      url: 'https://api.twitch.tv/kraken/clips/top?limit='+query.limit.data+'&trending='+query.trending.data+'&game='+query.game.name+'&period=month&channel='+query.streamer.name,
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'ztix9khyx6urq2hzmhr4o2ie3ezlhz'
      },
    }, function(error, response, body) {
      //Print the Response  
    
        if(error)
        {
          console.log(error);
          errorCb();
        }
     
      var clips = JSON.parse(body).clips;
       if(!(clips instanceof Array)){
         console.log(response);
        errorCb("Wrong query");
       }
      for (var i = 0; i < clips.length; i++) {
        
        clipsObj.push(new Clip(clips[i]));
     
   //     clipsObj[i].getClipUrl();
   //     clipsObj[i].createSRT();
      }
      successCb(clipsObj);
      //  console.log(response);
    })
  };
 
  


module.exports = myRequest;