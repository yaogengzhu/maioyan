export default {
    path:'/city',
    redirect:'/city/allCity',
    component:() => import('@/views/city'),
    children:[
        {
            path:'allCity',
            component:() => import('@/components/cityIndex/allCity')
        },
        {
            path:'grand',
            component:() => import('@/components/cityIndex/grand')
        },
        {
            path:'feature',
            component:() => import('@/components/cityIndex/feature')
        }
    ]
}

// component:()=> import()  是按需加载路由，避免在不需要路由的地方加载。