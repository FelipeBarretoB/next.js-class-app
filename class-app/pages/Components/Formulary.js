
function Formulary(props) {
    return <div className="mb-3 border border-success rounded p-3">
        <label className="form-label h4">Pregunta #{props.form + 1}</label>
        <input type="text" className="form-control" name={"examen-" + props.form}></input>

        <label className="form-label">Opción A</label>
        <input type="text" className="form-control" name={"pregunta-"+ props.form + "-A"}></input>
        <label className="form-label">Opción B</label>
        <input type="text" className="form-control" name={"pregunta-"+ props.form + "-B"}></input>
        <label className="form-label">Opción C</label>
        <input type="text" className="form-control" name={"pregunta-"+ props.form + "-C"}></input>
        <label className="form-label">Opción D</label>
        <input type="text" className="form-control" name={"pregunta-"+ props.form + "-D"}></input>

        <fieldset>
            <legend>Elige la opción correcta</legend>
            <label>
                <input type="radio" name={"pregunta-" + props.form} value="A" style={{margin: ".5em"}}/> A
                <input type="radio" name={"pregunta-" + props.form} value="B" style={{margin: ".5em"}}/> B
                <input type="radio" name={"pregunta-" + props.form} value="C" style={{margin: ".5em"}}/> C
                <input type="radio" name={"pregunta-" + props.form} value="D" style={{margin: ".5em"}}/> D
            </label>
        </fieldset>

        <label className="form-label" style={{marginRight: ".5em"}}>Porcentaje de la pregunta (En numeros 1 - 100):</label>
        <input type="number" name={"pregunta-"+props.form + "-porcentaje"} min="1" max="100" />
        
    </div>
}

/**/

export default Formulary;