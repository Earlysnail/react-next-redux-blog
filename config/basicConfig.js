const NAME_SPACE = {
    BLOG_NAME: 'EarlySnail_blog'
}
const  MENU = [
    {
        title: '电影',
        url: '/movie',
        childrenMenu: [
            {
                title: '搞笑',
                url: '/movie/kids'
            }
        ]
    },{
        title: '文艺',
        url: '/literature',
        childrenMenu: [
            {
                title: '小说',
                url: '/literature/novel'
            }
        ]
    },{
        title: '体育',
        url: 'sports',
        childrenMenu: [
            {
                title: '足球',
                url: '/sports/soccer'
            }
        ]
    }
];


export {
    NAME_SPACE,
    MENU
}

