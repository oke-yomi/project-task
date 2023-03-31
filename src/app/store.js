import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "../features/todoSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  todos: todoReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
