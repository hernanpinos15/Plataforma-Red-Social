const express = require('express');
const app = express();
const { config } = require('./config/index');
const {
    logErrors,
    errorHandler,
    wrapErrors
} = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

const followingUserAApi = require('./routes/followingUserA');
const followingUserBApi = require('./routes/followingUserB');
const followingUserCApi = require('./routes/followingUserC');

//routes
followingUserAApi(app);
followingUserBApi(app);
followingUserCApi(app);

//Catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});
