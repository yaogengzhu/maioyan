export default {
    path:'/movie',
    component:() => import('@/views/movie'),
    children:[
        {
            path:'cityList',
            component:()=> import('@/components/cityList')
        },
        {
            path:'nowPlaying',
            component:() => import ('@/components/nowPlaying')
        },
        {
            path:'willPlaying',
            component: () => import ('@/components/willPlaying')
        },
        {
            path:'search',
            component: () => import ('@/components/search')
        }
    ]
}