const initialStateaa  =  {
	data: {},
	totalResponses: {},
	action: null,
};

let initialState = [];
/*
const saveTheForm = (state = initialState, action) =>{
    let formlist = localStorage.getItem('formlist');
    switch(action.type){
        case "SAVEFORM":
            
        localStorage.setItem('formlist',JSON.stringify([...state, action.payload]));
        let formlistnew = localStorage.getItem('formlist');

        return JSON.parse(formlistnew); 
        case "SAVERESPONSE":
            console.log('RESP Call')
        return state; 
        default: return JSON.parse(formlist);
    }
}
*/

let formlist = localStorage.getItem('formlist');
const saveTheForm = (state = initialState, action) =>{
    

    switch(action.type){
        case "SAVEFORM":
            
        localStorage.setItem('formlist',JSON.stringify([...state, action.payload]));
        let formlistnew = localStorage.getItem('formlist');

        return JSON.parse(formlistnew); 
        case "SAVERESPONSE":

            var data = [...state];
            var valcount = data[action.arrindex]['totalresponse'];
            var valcount = data[action.arrindex]['totalresponse'] = valcount + 1;
            localStorage.setItem('formlist',JSON.stringify(state));

        return state; 
        default: return (formlist === null)? state : JSON.parse(formlist);
    }
}
export default saveTheForm;
