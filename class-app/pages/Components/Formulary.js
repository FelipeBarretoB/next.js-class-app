
function Formulary(props) {
    return <div className="mb-3 border border-success rounded p-3">
        <label className="form-label h4">Pregunta #{props.form}</label>
        <input type="text" className="form-control"></input>
        <label className="form-label">Opción A</label>
        <input type="text" className="form-control"></input>
        <label className="form-label">Opción B</label>
        <input type="text" className="form-control"></input>
        <label className="form-label">Opción C</label>
        <input type="text" className="form-control"></input>
        <label className="form-label">Opción D</label>
        <input type="text" className="form-control"></input>

        <fieldset>
            <legend>Elige la opción correcta</legend>
            <label>
                <input type="radio" name={"pregunta" + props.form} value="A" style={{margin: ".5em"}}/> A
                <input type="radio" name={"pregunta" + props.form} value="B" style={{margin: ".5em"}}/> B
                <input type="radio" name={"pregunta" + props.form} value="C" style={{margin: ".5em"}}/> C
                <input type="radio" name={"pregunta" + props.form} value="D" style={{margin: ".5em"}}/> D
            </label>
        </fieldset>
        
    </div>
}

/**/

export default Formulary;