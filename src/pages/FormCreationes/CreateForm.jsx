import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {useSelector, useDispatch} from "react-redux";
import {saveForm} from "./../../action/index";
import { createBrowserHistory } from "history";
import ListInput from "../../components/ListInput"

let subtitle;
const CreateForm = ()=>{
    const myState = useSelector((state)=> state.saveTheForm );
    console.log(myState);
    const history = createBrowserHistory();
    const [modalIsOpen,setmodalIsOpen] = useState(false);
    const [QuestionType,setQuestionType] = useState();  
    const [NameQues,setNameQues] = useState();
    const [Option,setOption] = useState();
    const [FormData,setFormData]=useState([]);
    const [FormTitle, setFormTitle] = useState();
    const dispatch = useDispatch();


    const addQuestion = ()=>{
        setmodalIsOpen(true);;
    }
    const afterOpenModal = ()=>{
        subtitle.style.color = '#f00';
    }
    const closeModal = ()=>{
        setmodalIsOpen(false);
        restformmodel();
    }
    const changequestiontype = (e)=>{
        setQuestionType(e.target.value);
        //console.log(e.target.value);        
    }
    const changenameques = (e)=>{
        setNameQues(e.target.value)
    }
    const changetextarea = (e)=>{
        let rawOptions = e.target.value;
		let optionsArr = [...rawOptions.trim().split("\n")];
        optionsArr = optionsArr.filter((item) => !!item);
        setOption(optionsArr);
    }

    const addnewquestion = (e)=>{
       
        let formBodyArr = [...FormData];
        let formDataval = {
                id: formBodyArr.length + 1,
                type: QuestionType,
                question: NameQues,
                options: Option, 
            }
        
        formBodyArr.push(formDataval);
        setFormData(formBodyArr)
        
    }
    useEffect(()=>{
        closeModal();
    },[FormData])

    const restformmodel = ()=>{
       console.log('AB');
       setQuestionType(0);
       setNameQues('');
    }

    const savedis = ()=>{
        const formJson = {
			title: FormTitle,
			body: FormData,
            action: (Math.random() + 1).toString(36).substring(7),
            date: new Date().toLocaleString(),
            totalresponse:0,
		};
        dispatch(saveForm(formJson));
        history.back();
    }
    

    return(
        <>
       
        <div className="container">
			<div className="form-header mt-2">
            Survey Name
				<input
					type="text"
					placeholder="Survey Name"
					className="form-control"
                    onChange={(e)=>setFormTitle(e.target.value)}
				/>
			</div>
        </div>

        <div className="container">
            <ListInput FormData={FormData}/>
        </div>

        <div className="form-footer container mt-2">
            <button className="btn btn-primary mr-3" onClick={addQuestion}>
                Add Question
            </button>

            <button className="btn btn-primary" onClick={savedis}>
                Save
            </button>

            
		</div>

     
      <Modal isOpen={modalIsOpen}>
				<div className="new-question-container">
					<div className="new-question-header">
						Enter Question:
						<input
							type="text"
                            name="namequestion"
							placeholder="Enter your question"
							className="form-control"
                            onChange={changenameques}
						/>
					</div>
					<div className="new-question-body mt-2">
                        <div className="select-question-type-container">
							Select the answer type:
							<select className="form-control"  defaultValue={0} onChange={changequestiontype}>
								<option value="0" hidden>
									--Select--
								</option>
								<option value="1"> Text </option>
								<option value="2"> Checkbox </option>
								<option value="3"> Radio </option>
                                <option value="4"> Drop Down </option>
							</select>
						</div>
                        <div className="answer-container">
                            {QuestionType > 1 && (
                                <>
                                Enter Options (line seperated):
                                <textarea
                                    onChange={changetextarea}
                                    className="form-control"
                                    cols="60"
                                    rows="4"
                                    placeholder="Enter your options here"
                                />
                                </>
                            )}
                            
                        </div>
					</div>
                    
					<div className="add-new-question-btn-container mt-3">
						<button
							className="btn btn-primary mr-2" onClick={addnewquestion} disabled={QuestionType <= 0 || NameQues == ''}>
							Add
						</button>
						<button className="btn btn-danger" onClick={() => closeModal()}>
							Cancel
						</button>
					</div>
				</div>
			</Modal>

        </>
    )
}

export default CreateForm;