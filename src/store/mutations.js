export const addMenuItem = (state, { item }) => {
    state.tabMenu.find(menu => menu.path === item.path) || state.tabMenu.push(item);
}

export const removeMenuItem = (state, { item }) => {
    state.tabMenu.slice(state.tabMenu.indexOf(item), 1);
}