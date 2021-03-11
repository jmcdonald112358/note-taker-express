// Call dependencies
const express = require('express');
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 8080;

// Set up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Map to route files
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`App listening on: http://localhost:${PORT}`));