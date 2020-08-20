import React from 'react'
import propTypes from 'prop-types'
import './index.less'

// 图片组件
export default class Picture extends React.Component{
    render(){
        const {color}=this.props
        return(
                <div className='pictureDiv'style={{backgroundColor:`${color}`}}></div>
        )
    }
}
Picture.propTypes = { //.propTypes是react规定的名称,不可以修改
    title: propTypes.string //设置title的类型
};