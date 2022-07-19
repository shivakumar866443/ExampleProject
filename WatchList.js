import React from 'react'
import './index.css'

const WatchList=({WatchList})=>{
    
    return(
        <form className='form-design'>
        <center>
            <h3>this is watch list components</h3><br />
            {WatchList}
            </center>
            </form>
    )
}
export default WatchList;