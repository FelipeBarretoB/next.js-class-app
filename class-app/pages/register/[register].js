import { useRouter} from 'next/router'
import { useRef } from 'react'

function registerPage(){
    const router= useRouter();
    const type= router.query.register
    const nameInputRef = useRef();
    const mailInputRef = useRef();
    const passwordInputRef = useRef();
    const passwordConfirmInputRef = useRef();



    function submitHandler(event){
        event.preventDefault();
        let create =true;
        if(passwordConfirmInputRef.current.value !=passwordInputRef.current.value){
            alert (`The passwords dont match`)
            create= !create;
        }
        if(create)
            console.log(nameInputRef.current.value)
        
    }
   

    return <form onSubmit={submitHandler}>
        <h1>register Page</h1>
        <h2> {type}</h2>
        <h2></h2>
        <div>
            <label>Nombre del {type}</label>
            <br></br>
            <input type='text' required id='name' placeholder='Nombre'ref={nameInputRef}></input>
        </div>
        <div>
        <label>Mail del {type}</label>
            <br></br>
            <input type='email' required placeholder='Mail'ref={mailInputRef}></input>
        </div>
        <div>
        <label>contraseña del {type}</label>
            <br></br>
            <input type='password' required placeholder='contraseña'ref={passwordInputRef}></input>
        </div>
        <div>
        <label>Confirmar contraseña</label>
            <br></br>
            <input type='password' required placeholder='contraseña'ref={passwordConfirmInputRef}></input>
        </div>
        <div>
            <button>Registrar {type}</button>
        </div>
        </form>
    
}

export default registerPage;