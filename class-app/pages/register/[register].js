import { useRouter} from 'next/router'


function registerPage(){
    const router= useRouter();

    

    return <container>
        <h1>register Page</h1>
        <h2> {router.query.register}</h2>
        </container>
    
}

export default registerPage;