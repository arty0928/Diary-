import { combineReducers } from 'redux';
import reducer from './reducer';

//store안에 있는 여러개의 reducer를 combine reducer로 합쳐주고 => rootReducer
const rootReducer = combineReducers({
		//user reducer을 combine
        reducer
})


export default rootReducer;