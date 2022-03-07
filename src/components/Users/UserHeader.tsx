import *  as React from 'react'

const UserHeader = () => {
    return (
        <>
            <thead>
                <tr className='d-flex'>
                    <th scope="col" style={{ width: "24rem" }}>Name</th>
                    <th scope="col" style={{ width: "14rem" }}>Status</th>
                    <th scope="col">Access</th>
                    <th scope="col"></th>
                </tr>
            </thead>
        </>
    )
}

export default UserHeader

