import { useRouter} from 'next/router'
import { Fragment } from "react"

function registerPage(){
    const router= useRouter();

    

    return <Fragment>
        <h1>register Page</h1>
        <h2> {router.query.register}</h2>
        </Fragment>
    
}

export default registerPage;