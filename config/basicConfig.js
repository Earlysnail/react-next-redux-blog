const NAME_SPACE = {
    BLOG_NAME: 'EarlySnail_blog'
}
const MENU = [
    {
        title: '首页',
        url: '/',
        childrenMenu: []
    },{
        title: '数据图',
        url: '/radar',
        childrenMenu: []
    }, {
        title: '登录',
        url: '/signIn',
        childrenMenu: []
    }, {
        title: '错误页面',
        url: '/error',
        childrenMenu: []
    }, {
        title: '管理界面',
        url: '/manage',
        childrenMenu: []
    }, {
        title: '轮播图',
        url: '/playImgPage',
        childrenMenu: []
    }, {
        title: '滚动视差',
        url: '/parallax',
        childrenMenu: []
    }
];


const MEMBER_INFO = {
    ID: '',                                     // 学号(ID)
    name: '',                                   // 姓名(name)
    sex: '',                                    // 性别(sex)
    birthDate: '',                              // 出生日期(birthDate)
    graduateGrade: '',                          // 毕业届(graduateGrade)
    profession: '',                             // 专业(profession)
    joinCommunityData: '',                      // 加入社团日期(joinCommunityData)
    communityTeam: '',                          // 社团兴趣小组(communityTeam)
    email: '',                                  // 邮箱(email)
    phone: '',                                  // 手机号(phone)
    wechat: '',                                 // 微信(wechat)
    qq: '',                                     // QQ(qq)
    blogAddress: '',                            // 博客地址(blogAddress)
    currentAddress: '',                         // 现居住地址（城市、区）(currentAddress)
    companyAddress: '',                         // 公司(companyAddress)
    githubAddress: '',                          // github(githubAddress)
}
export {
    NAME_SPACE,
    MEMBER_INFO,
    MENU
}

