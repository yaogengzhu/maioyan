export default {
    path: '/movie',
    redirect: '/movie/nowPlaying',
    component: () => import('@/views/movie'),
    children: [
        {
            path: 'cityList',
            component: () => import('@/components/movieIndex/cityList')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/movieIndex/nowPlaying')
        },
        {
            path: 'willPlaying',
            component: () => import('@/components/movieIndex/willPlaying')
        },
        {
            path: 'search',
            component: () => import('@/components/movieIndex/search')
        },
        {
            path: 'detail/:movieId',
            components: {
                detail: () => import('@/views/movie/detail.vue'),
            },
            props: {
                detail: true
            }
        }
    ]
}