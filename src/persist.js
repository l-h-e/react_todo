import { createStore , applyMiddleware} from 'redux'
import { persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './redux/modules/reducers'
import thunk from 'redux-thunk'
const initialState = {}
const middleware = applyMiddleware(thunk)
// 永続化の設定
const persistConfig = {
  key: 'root', // Storageに保存されるキー名を指定する
  storage // 保存先としてlocalStorageがここで設定される
  //whitelist: ['todo'] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
}

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(middleware)
)

export const persistor = persistStore(store)
export default store