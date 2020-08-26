import React from 'react'
import Picture from '../../components/login/index'
import './game.less' 

const pictureArr=[{id:0,color:'blue'},{id:1,color:'pink'},{id:2,color:'red'},{id:3,color:'orange'}]

export default class Game extends React.Component{

    render(){
        return(
                <div className='out'>
                    {pictureArr.map(item=>{
                        return (
                        <div className='outpicture'>
                            <Picture color={item.color} src={item.id} title={item.id}/>
                        </div>)
                    })}
                </div>
        )
    }
}