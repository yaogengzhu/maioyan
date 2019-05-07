export default {
    path:'/city',
    component:() => import('@/views/city')
}

// component:()=> import()  是按需加载路由，避免在不需要路由的地方加载。