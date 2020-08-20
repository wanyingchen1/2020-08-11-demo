import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component{

    render(){
        return(
            <div>
                {/* <div className='out'>
                    {pictureArr.map(item=>{
                        return <Picture color={item.color} src={item.id} title={item.id}/>
                    })}
                </div> */}
                <Link to="/main" >Login</Link>
            </div>
        )
    }
}