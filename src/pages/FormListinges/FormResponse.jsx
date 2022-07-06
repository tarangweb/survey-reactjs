import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector, batch } from "react-redux";
import {saveResponse} from "./../../action/index";
import RespInput from "../../components/RespInput";

const FormResponse = ()=>{
    const dispatch = useDispatch();
    const formList = useSelector((state) => state.saveTheForm);
    const [response, setResponse] = useState(0);
    

    let segment_str = window.location.pathname;
    let segment_array = segment_str.split( '/' );
    let last_slug = segment_array.pop();

    console.log(last_slug);

    const history = createBrowserHistory();
    const backpage = ()=>{
        history.back();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target['indexname'].value);
        console.log(formList);
		//await setResponse(response + 1);
       
        
         dispatch(saveResponse(e.target['indexname'].value));
       // await console.log(formList);
       // await console.log('RESSSS',response);
        history.back();
    }


    return(
        <>
        <div class="container">
        <button className="btn btn-outline-primary mt-3 mb-3" onClick={backpage}>Back</button>
        <form onSubmit={handleSubmit}>
            <RespInput last_slug={last_slug} formList={formList}/>
        </form>
        </div>
        </>
    )
}
export default FormResponse;