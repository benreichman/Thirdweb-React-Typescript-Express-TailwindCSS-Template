import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const RouteCompWithID = () => {
    const { id } = useParams();
    return (
        <>
            <div className='pb-4'>
                <Link to='/'>
                    Go Back to Main Page
                </Link>
            </div>
            <div>RouteCompWithID</div>
            <div>
                ID: {id}
            </div>
        </>
    )
}

export default RouteCompWithID