var cheerio = require('cheerio');

const fs = require('fs');
const path = require('path');
var download = require('download-file');
var mkdirp = require('mkdirp');

const mkdirSync = function(dirPath) {
  try {
    fs.mkdirSync(dirPath);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}



class Clip {

  constructor(metadata) {

    this.request = require('request');
    this.metadata = metadata;
    this.selected = false;
    console.log(this.metadata.broadcaster.display_name);
    //this.init();
  }
  createSRT(success) {
    fs.writeFile(this.path + "/sub.srt", "1 \n 00:00:01,000 --> 00:00:05,000 \n" + this.metadata.broadcaster.display_name, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      }
    });
  }

  init() {
    mkdirSync(path.resolve('./clips'));
    mkdirSync(path.resolve('./clips/Streamer_' + this.metadata.broadcaster.display_name + "_Title_" + this.metadata.title));
    this.path = './clips/Streamer_' + this.metadata.broadcaster.display_name + "_Title_" + this.metadata.title;
  }


  getClipUrl(successCb,errorCb) {
    if (this.metadata) {
      let self= this;
      this.request({
        method: 'get',
        url: this.metadata.embed_url,
      }, function(error, response, body) {
        if (error) {
          console.log("Error with getting the mp4-url");
          errorCb("Error with getting the mp4-url");
        }
        //Print the Response
        let $ = cheerio.load(body);
        let lines = $('script')[5].children[0].data.split('\n');
        lines.unshift('(');
        lines.splice(lines.length - 3, lines.length - 1);
        lines.push(')');
        let newtext = lines.join('\n');
        newtext = newtext.replace('var', "");
        newtext = newtext.replace(';', "");

        try {
          var clipInfo = eval((newtext));

        } catch (e) {
          errorCb('eval function error');
        }

        self.mp4url = clipInfo.quality_options[0].source;
        successCb(self.mp4url);
      })

    }
  }

  downloadMp4() {
    var options = {
      directory: this.path,
      filename: this.metadata.title + '.mp4'
    }

    download(this.mp4url, options, (err) => {
      if (err) throw err
      console.log(this.metadata.title+" downloaded!");
    })
  }

}

module.exports = Clip;
