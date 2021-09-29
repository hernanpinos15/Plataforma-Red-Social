const { followinUserCMock } =require('../utils/mocks/followingUserC');

class FollowingUserCService{
    async getFollowingUserC(){
        const about = await Promise.resolve(followinUserCMock);
        return about || [];
    }
}

module.exports = FollowingUserCService;