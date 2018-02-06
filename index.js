const request = require('request');
var download = require('download-file')
var cheerio = require('cheerio');

function myRequest(){
  request(
        {
        method:'get',
        url:'https://api.twitch.tv/kraken/clips/top?limit=1&channel=lirik&trending=true&period=day',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'ztix9khyx6urq2hzmhr4o2ie3ezlhz'
 },
    }, function (error, response, body) {
        //Print the Response
        var clips = JSON.parse(body).clips;
        for (var i = 0; i < clips.length; i++) {
          console.log(clips[i].embed_url);
          getMp4Url(i, clips[i].embed_url);

        }
      //  console.log(response);
})};
myRequest();

function getMp4Url(name,url_e)
{
request(
        {
        method:'get',
        url:url_e,

    }, function (error, response, body) {
      if (error) {
        console.log("Error with getting the mp4-url");
      }
        //Print the Response
         var $ = cheerio.load(body);
      try {
         eval($('script')[5].children[0].data);
      } catch (e) {

      } finally {

      }
         console.log(clipInfo.quality_options[0].source);

         downloadMp4(name, clipInfo.quality_options[0].source)

  });
}
function downloadMp4(name, uurl)
{
  var options = {
      directory: "downloaded_clips",
      filename: name+".mp4"
  }

  download(uurl, options, function(err){
      if (err) throw err
      console.log(name+ " Downloaded!")
  })
}
