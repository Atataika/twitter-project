const initialState = JSON.parse(localStorage.getItem('regions'))

export default function regionInfo (state = initialState, action) {
	switch (action.type) {
		case "SET_CONTENT":
			return {...state, content: action.payload}
		default:
			return state
	}
}