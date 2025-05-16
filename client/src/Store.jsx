import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userLoginReducer } from './redux/reducers/LoginReducers';
import { loaderReducer } from './redux/reducers/LoaderReducers';
import storage from 'redux-persist/lib/storage'; // ✅ Correct import for sessionStorage
import { persistStore, persistReducer } from 'redux-persist';

// Combine reducers first
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  loader: loaderReducer,
});

const persistConfig = {
  key: 'root',
  storage, // ✅ Now valid
};

// Wrap the combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
