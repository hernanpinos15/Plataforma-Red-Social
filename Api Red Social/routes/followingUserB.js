const express = require('express');
const FollowingUserBService = require('../services/followingUserB');

function followingUserBApi(app) {
  const router = express.Router();
  app.use('/api/userB', router);
  const followingUserBService = new FollowingUserBService();

  router.get('/following', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    try {
      const followingUserB = await followingUserBService.getFollowingUserB();
      res.status(200).json({
        data: followingUserB,
        message: 'ok',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = followingUserBApi;
