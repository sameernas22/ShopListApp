

export const addData = (data,area,category) =>{   
    return {
        type: "ADD_DATA",
        data: data,
        area:area,
        category:category

    }
}
export const deleteData = (key) => { 
    return {
        type: "DELETE_DATA",
        key:key
}}

export const updateData = (data) => { 
    return {
        type: "UPDATE_DATA",
    }
}