// utils/localStorageUtils.js

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        console.warn("Could not load state:", e);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (e) {
        console.warn("Could not save state:", e);
    }
};
