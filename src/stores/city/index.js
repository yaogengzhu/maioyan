const state = {
    nm: window.localStorage.getItem('city_nm') || '北京',
    id: window.localStorage.getItem('city_id') || 1
}
const actions = {

}
const mutations = {
    CITY_INFO(state, params) {
        state.nm = params.nm;
        state.id = params.id;
    }
}

//  导出
export default {
    namespaced: true,
    state,
    actions,
    mutations
}