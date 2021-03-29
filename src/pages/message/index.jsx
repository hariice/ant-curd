import React from "react";

import "./message.scss";

const Message = () => {
    return (<div>

        <div className="main-container">

            <div className="tag">
                <div className="inputs">
                    <p><label>
                        Name:<br />
                        <input type="text" name="name" />
                    </label></p>
                    <p><label>
                        Age:<br />
                        <input type="number" name="name" />
                    </label></p>
                    <p><label>
                        Qualification:<br />
                        <input type="text" name="name" />
                    </label> </p>
                    <p> <label>
                        Can gender:<br />

                        <input type="text" name="name" />
                    </label></p>
                    <input type="submit" value="Submit" />

                    <div className="line"></div>

                    <div className="new"> <p><label>
                        Name:<br />
                        <input type="text" name="name" />
                    </label></p><p><label>
                        Age:<br />
                        <input type="number" name="name" />
                    </label></p><p><label>
                        Qualification:<br />
                        <input type="text" name="name" />
                    </label></p><p><label>
                        can render:<br />
                        <input type="text" name="name" />
                    </label></p>
                    </div>



                </div>
            </div>

        </div>
    </div>)
}
export default Message;
