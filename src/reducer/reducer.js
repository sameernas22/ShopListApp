const initialData = {
    data : [],
}
var count = 0;
export const addDataReducer = (state = initialData,action) => {
    switch (action.type) {
        case "ADD_DATA" :
            action.data['key'] = count
            count++;
            return {
                ...state,
                data: [
                    ...state.data,
                    action.data
                ],
                area: action.area,
                category: action.category,

            }
        case "DELETE_DATA" :
            const newData = state.data.filter((e) => e['key'] !== action.key)
            return {
                ...state,
                data: newData,

            }
        default: return state;
                
    }
}