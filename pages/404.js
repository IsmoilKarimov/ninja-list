import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const NotFoutnd = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(1)
            router.push('/')
        },3000)
    },[])

    return(
        <div className="not-found">
            <h1>Oooooops...</h1>
            <h2>This page not be found</h2>
            <p>Go back to the <Link href='/'>Homepage</Link></p>
        </div>
    )
}
export default NotFoutnd