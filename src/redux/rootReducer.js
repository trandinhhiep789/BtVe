import { combineReducers } from 'redux'

import BaiTapDatVeReducer from './BaiTapDatVeReducer'

const rootReducer = combineReducers({
    BaiTapDatVeReducer: BaiTapDatVeReducer,
})

export default rootReducer