const express = require('express');
const FollowingUserAService = require('../services/followingUserA');

function followingUserAApi(app) {
  const router = express.Router();
  app.use('/api/userA', router);
  const followingUserAService = new FollowingUserAService();

  router.get('/following', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    try {
      const followingUserA = await followingUserAService.getFollowingUserA();
      res.status(200).json({
        data: followingUserA,
        message: 'ok',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = followingUserAApi;
