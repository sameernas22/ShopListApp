const initialData = {
    data : [],
    area:[],
    category:[],
}
var count = 0;
export const addDataReducer = (state = initialData,action) => {
    switch (action.type) {
        case "ADD_DATA" :
            if(!state.area.includes(action.area)){
            state.area.push(action.area)
            }
            if(!state.category.includes(action.category)){
            state.category.push(action.category)
            }
            console.log(state.area,state.category)
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
