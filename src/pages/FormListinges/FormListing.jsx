import React,{useEffect,useContext} from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector, batch } from "react-redux";
import {SurveyTitle} from "../../App";

const FormListing = () =>{
    const surtitle = useContext(SurveyTitle);

    const dispatch = useDispatch();
    const formList = useSelector((state) => state.saveTheForm);
    //const { data: formList, totalResponses } = useSelector((state) => state.saveTheForm);

    
    return(
        <>
        
        <div className="container text-center">
           <label className="mt-3 font-weight-bold"> {surtitle} </label>
            <Link to="/create-form" className="">
                <div class="col-md-12 text-center mt-3">
                    <button id="create-form-btn" className="btn btn-primary">Create form</button>
                </div>
            </Link>
        
        {formList.length <= 0 && (
				<p className="no-form-text">No records found</p>
		)}
        </div>

    {formList.length > 0 && (  
        <div className="container">
        <table class="table mt-5">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Url</th>
                <th>Created At</th>
                <th>Responses</th>
            </tr>
            {formList.map((formVal,index)=>{
                const { action, title,date,totalresponse } = formVal;
                const formURL = "/form-response/" + action;
                return(
                    <>
                    
                    <tr>
                        <td>{index+1}</td>
                        <td>{title}</td>
                        <td><Link to={formURL}>{formURL}</Link></td>
                        <td>{date}</td>
                        <td>{totalresponse}</td>
                    </tr>
                    
                    </>
                )      
            })}
        </table>
        </div>  
    )}
        
        </>

    )

}

export default FormListing;