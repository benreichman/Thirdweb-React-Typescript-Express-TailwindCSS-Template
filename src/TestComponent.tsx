import React from 'react'
import ethers from 'ethers'
import { MasterVaultABI } from './contract_abis/MasterVault';
import store from './Redux/store/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const TestComponent: React.FC = () => {
    const count = useSelector((state: any) => state.count);
    return (
        <>
            {/* <div>TestComponent</div> */}
            <div className='pb-4'>
                <Link to='/'>Go Back to Main Page</Link>
            </div>
            <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
            {MasterVaultABI.map((item,index) => {
                return (
                    <>
                        <div key={index}>
                            <li className='list-none' key={index}>{item}</li>
                        </div>
                    </>
                )
            })}
            <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
            <div className='pt-4 bg-red-500'>
                {count}
            </div>

            


        </>
    )
}

export default TestComponent