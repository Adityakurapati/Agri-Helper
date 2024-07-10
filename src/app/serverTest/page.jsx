import { action } from '@/lib/actions'

const ServerTest=() =>
{
        const actionInComponent=async () =>
        {
                'use server'
                console.log( "action In" )
        }
        return (
                <div>
                        <form action={ actionInComponent }>
                                <button type='submit'>Test Me </button>
                        </form>
                </div>
        )
}

export default ServerTest
