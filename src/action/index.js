export const saveForm = (payload = {})=>{
    return {
        type: "SAVEFORM",
        payload,
    }
}

export const saveResponse = (arrindex)=>{
    return {
        type: "SAVERESPONSE",
        arrindex,
    }
}