import React from 'react';
import './FormPanel.css';
import versionWithinSpec from '../utils/versionWithinSpec'

function FormPanel() {
    const [version, setVersion] = React.useState("");
    const [constraints, setConstraints] = React.useState("");
    const [isInSpec, setIsInSpec] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsInSpec(versionWithinSpec(version.toString(), constraints))
    }

    return (
            <div className="formPanel">
                <h1>Version Tester</h1>
                <form onSubmit={handleSubmit} className="form">
                    <label className="label">
                        Version
                        <input
                            className="input"
                            type="number"
                            name="version"
                            value={version}
                            onChange={e => setVersion(e.target.value)}
                            placeholder="1.6"
                        />
                    </label>
                    <label className="label">
                        Constraints
                        <input
                            className="input"
                            type="text"
                            name="constraints"
                            value={constraints}
                            onChange={e => setConstraints(e.target.value)}
                            placeholder=">=1.3,<2"
                        />
                    </label>
                    <p>The constraint is formatted as an operand and a number. Multiple constraints are separated with a comma.</p>
                    <button
                        className="submitBtn"
                        type="submit"
                        onClick={e=>handleSubmit(e)}
                        disabled={version === "" || constraints === ""}
                    >Validate</button>
                </form>
                <div className="resultArea">
                    {
                        isInSpec !== "" ?(
                            <React.Fragment>
                                <p>Result:</p>
                                <p>{isInSpec}</p>
                            </React.Fragment>
                        ) : null
                    }

                </div>
            </div>
    );
}

export default FormPanel;
