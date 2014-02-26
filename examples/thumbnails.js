var ffmpeg = require('../index');

var proc = new ffmpeg({ source: '/path/to/your_movie.avi', nolog: true })
  // set the size of your thumbnails
  .withSize('150x100')
  // setup event handlers
  .on('end', function(files) {
    console.log('screenshots were saved as ' + files.join(', '));
  })
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  // take 2 screenshots at predefined timemarks
  .takeScreenshots({ count: 2, timemarks: [ '00:00:02.000', '6' ] }, '/path/to/thumbnail/folder');
