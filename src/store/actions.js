export const addMenuItem = ({ commit }, item) => {
    commit('addMenuItem', { item })
}

export const removeMenuItem = ({ commit }) => {
    commit('removeMenuItem')
}