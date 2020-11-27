const express = require("express");
const app = express();
const bodyParser = require("body-parser");


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests

// Route includes
const locationRouter = require('./routes/location.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(express.static('build'));

// // start up passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

/* Routes */
app.use('/api/location', locationRouter)


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
