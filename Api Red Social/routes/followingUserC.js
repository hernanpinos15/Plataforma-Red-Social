const express = require('express');
const FollowingUserCService = require('../services/followingUserC');

function followingUserCApi(app) {
  const router = express.Router();
  app.use('/api/userC', router);
  const followingUserCService = new FollowingUserCService();

  router.get('/following', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    try {
      const followingUserC = await followingUserCService.getFollowingUserC();
      res.status(200).json({
        data: followingUserC,
        message: 'ok',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = followingUserCApi;
