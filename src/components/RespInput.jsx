const RespInput = (prop) => {
    return (
        <>
            {prop.formList.map((formVal, index) => {
                const { action, title, date, body } = formVal;

                return (
                    <>

                        {action === prop.last_slug && (
                            <>
                                <h2>{title}</h2>
                                <input
                                    className="inputname"
                                    type="hidden"
                                    name="indexname"
                                    value={index}
                                    placeholder="Enter the Work"
                                />
                            </>
                        )}

                        {action === prop.last_slug && (

                            body.map((bodyVal, index) => {
                                return (
                                    <>
                                        <hr/>
                                        <label for="sel1" className="font-weight-bold">{bodyVal.id}. {bodyVal.question}</label>

                                        {bodyVal.type == '1' && (
                                            <div>
                                                <input required className="form-control" type='text' name="textbox" />
                                            </div>
                                        )}
                                        <div className="form-group">
                                            {bodyVal.type == '2' && (
                                                <div>
                                                    {bodyVal.options.map((bodyVal, index) => {
                                                        return (
                                                            <>
                                                            <div class="form-check">
                                                            <label class="form-check-label" for="check2">
                                                                <input
                                                                    name="check"
                                                                    className="form-check-input"
                                                                    type='checkbox'
                                                                    value={bodyVal}
                                                                    key={index}
                                                                />
                                                                {bodyVal}
                                                            </label>
                                                            </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            )}

                                            {bodyVal.type == '3' && (
                                                <div>
                                                    {bodyVal.options.map((bodyVal, index) => {
                                                        return (
                                                            <>
                                                        <div class="form-check">
                                                        <label class="form-check-label" for="check2">
                                                                <input
                                                                    name="rad"
                                                                    required
                                                                    type='radio'
                                                                    className="form-check-input"
                                                                    value={bodyVal}
                                                                    key={index}
                                                                />
                                                                {bodyVal}
                                                            </label>
                                                            </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            )}

                                            {bodyVal.type == '4' && (
                                                <div>
                                                    <select name="sele" className="form-control" required>
                                                        {bodyVal.options.map((bodyVal, index) => {
                                                            return (
                                                                <>
                                                                    <option value={bodyVal}>{bodyVal}</option>
                                                                </>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            )}

                                        </div>
                                    </>
                                )
                            })

                        )}

                    </>
                )

            })
            }
            <button type="submit" className="btn btn-primary">Submit</button>

        </>
    )
}

export default RespInput;