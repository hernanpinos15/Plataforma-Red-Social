const { followinUserBMock } =require('../utils/mocks/followingUserB');

class FollowingUserBService{
    async getFollowingUserB(){
        const about = await Promise.resolve(followinUserBMock);
        return about || [];
    }
}

module.exports = FollowingUserBService;