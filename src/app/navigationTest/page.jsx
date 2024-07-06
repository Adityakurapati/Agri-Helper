"use client"

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"

const page=() =>
{
        const router=useRouter();
        const search=useSearchParams();
        const handleClick=() =>
        {
                router.push( '/' )
        }
        const handleClick2=() =>
        {
                router.replace( '/' )
        }
        const handleClick3=() =>
        {
                router.refresh();
        }
        console.log( search.get( 'helo' ) )
        // console.log( helo )
        return (
                <div>
                        <Link href='/' prefetch={ false }>HOme</Link>
                        <button onClick={ handleClick }>Redirect</button>
                        <button onClick={ handleClick2 }>Replace</button>
                        <button onClick={ handleClick3 }>Refresh</button>
                </div>
        )
}

export default page
