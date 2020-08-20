import React from 'react'
import './login.less'
import {Switch,Route,Redirect,HashRouter,Link,Router}from 'react-router-dom'
import { Layout, Menu,Drawer } from 'antd';
import { createBrowserHistory } from 'history'
import Game from '../game/game'
import Login from '../login'
const { Header, Content } = Layout;

const history = createBrowserHistory()
// 登陆的页面

export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
    }
    }
    onShow=()=>{
        this.setState({visible:true})
    }
    onClose=()=>{
        this.setState({visible:false})
    }
    render(){
        return(
            <div className='login'>
                {/* <HashRouter> */}
                 <Layout>
                    <Header>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="0"onClick={this.onShow}>三</Menu.Item>
                            <Menu.Item key="1"><Link to="/main/music">音乐</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/main/game'>游戏</Link></Menu.Item>
                            <Menu.Item key="3">乱七八糟</Menu.Item>
                        </Menu>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280, 
                        }}
                    >
                        <Switch>
                            <Route path="/main/game" component={Game}/>
                            <Route path="/main/music" component={Login} />
                            <Redirect to='/main/music'/>
                        </Switch>    
                    </Content>
                </Layout>
                <Drawer
                    title="cebianlan"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                </Drawer>
                {/* </HashRouter> */}
            </div>
        )
    }
}