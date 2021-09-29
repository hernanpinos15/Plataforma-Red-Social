const { followinUserAMock } =require('../utils/mocks/followingUserA');

class FollowingUserAService{
    async getFollowingUserA(){
        const about = await Promise.resolve(followinUserAMock);
        return about || [];
    }
}

module.exports = FollowingUserAService;