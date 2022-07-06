const ListInput = (prop)=>{
return(
<>
<div className="form-group">

    {prop.FormData.map((quearry, index) => {
        return (
            <>
                <hr />
                <label for="sel1" className="font-weight-bold">{quearry.id}. {quearry.question}:</label>

                {quearry.type == '1' && (
                    <div>
                        <input type='text' className="form-control" />
                    </div>
                )}

                {quearry.type == '2' && (
                    <div>
                        {quearry.options.map((quearry, index) => {
                            return (
                                <>
                                    <div class="form-check">
                                        <label class="form-check-label" for="check2">
                                            <input
                                                type='checkbox'
                                                className="form-check-input"
                                                value={quearry}
                                                key={index}
                                                checked={false}
                                                readOnly={true}
                                            />{quearry}
                                        </label>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                )}

                {quearry.type == '3' && (
                    <div>
                        {quearry.options.map((quearry, index) => {
                            return (
                                <>
                                    <div class="form-check">
                                        <label class="form-check-label" for="radio2">
                                            <input
                                                className="form-check-input"
                                                type='radio'
                                                value={quearry}
                                                key={index}
                                                checked={false}
                                                readOnly={true}
                                            />{quearry}
                                        </label>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                )}

                {quearry.type == '4' && (
                    <div className="">

                        <select className="form-control">
                            {quearry.options.map((quearry, index) => {
                                return (
                                    <>
                                        <option value={quearry}>{quearry}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                )}

            </>
        )
    })}
</div>
</>
)
}

export default ListInput;