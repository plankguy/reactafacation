import express                   from 'express';
import React                     from "react";
import { RoutingContext, match } from "react-router";
import fs                        from 'fs';
import path                      from 'path';
import bodyParser                from 'body-parser';
import { renderToString }        from 'react-dom/server'
import createLocation            from 'history/lib/createLocation';

import routes                    from 'routes';

const app = express();
const COMMENTS_FILE = path.join(__dirname, 'comments.json');

// Set server port
app.set('port', (process.env.PORT || 3333));
// Mount at path
//app.use('/');
// app.get('/*', function (req, res) {
//   Router.run(routes, req.url, Handler => {
//     let content = React.renderToString(<Wrapper />);
//     res.render('index', { content: content });
//   });
// });
app.use((req, res) => {

  const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if ( err ) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if ( !renderProps ) {
      return res.status(404).end('Not found.');
    }
    
    const InitialComponent = (
      <RoutingContext {...renderProps} />
    );
    const componentHTML = renderToString(InitialComponent);
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>React Webpack template</title>
      </head>
      <body>
        <div id="content">${componentHTML}</div>
        <script type="application/javascript" src="scripts/bundle.js"></script>
      </body>
  </html>    
`
    res.end(HTML);
  });
});

// Set static file dirs
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'static')));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Bind and listen for connections
app.listen(app.get('port'), function() {
  console.info('Server started: http://localhost:' + app.get('port') + '/');
});


// Read comments json
app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

// Write comments json
app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
});

export default app