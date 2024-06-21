// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items']
};

// export const store = createStore(rootReducer);
const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
	reducer: {
		contacts: persistedReducer,
		filters: filtersReducer,
	},
	middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
})

export const persistor = persistStore(store);