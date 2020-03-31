import React from 'react';
import './App.css';
import versionWithinSpec from './versionWithinSpec'

function App() {
    const [version, setVersion] = React.useState("");
    const [constraints, setConstraints] = React.useState("");
    const [isInSpec, setIsInSpec] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsInSpec(versionWithinSpec(version.toString(), constraints))
    }

  return (
    <div className="App">
      <header>
       <h1>Version Tester</h1>
      </header>
     <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>To check if the version supplied meets the given spec, enter a version and constraint/s into the inputs prior to submitting the request.</h2>
                <label className="label">
                    Version:
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
                    Constraints:
                    <input
                        className="input"
                        type="text"
                        name="constraints"
                        value={constraints}
                        onChange={e => setConstraints(e.target.value)}
                        placeholder=">=1.3,<2"
                    />
                    <p>The constraint is formatted as an operand and a number. Multiple constraints are separated with a comma.</p>
                </label>
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
    </div>
  );
}

export default App;
