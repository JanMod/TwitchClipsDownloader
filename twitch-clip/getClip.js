
  
  const request = require('request');
  var download = require('download-file')
  var cheerio = require('cheerio');
  const Clip = require('./Clip.js');
  var clipsObj = [];
  
  
  var myRequest = function(successCb, errorCb) {
    clipsObj = [];
    request({
      method: 'get',
      url: 'https://api.twitch.tv/kraken/clips/top?limit=5&trending=true&period=month',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'ztix9khyx6urq2hzmhr4o2ie3ezlhz'
      },
    }, function(error, response, body) {
      //Print the Response  
        if(error)
        {
          return errorCb;
        }
     
      var clips = JSON.parse(body).clips;
            
      for (var i = 0; i < clips.length; i++) {
        
        clipsObj.push(new Clip(clips[i]));
     
      }
      return successCb(clipsObj);
    
    })
  };
 
  


module.exports = myRequest;