import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Redirect,NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import './css/layout.css';
import './css/bases.css';
import Boke from '../view/boke';
import BokeDetail from '../view/bokeDetail';
import BokeClassify from '../view/bokeClassify';
import Excellent from '../view/excellent';
class Index extends Component{
    inputchange = (e)=>{
        console.log(e.target.value)
    }
    render(){
        return (
            <Router className='boke'>
                <header className="boke-header flexct">
                    <div className='info flexlb'>
                        <img src={logo} className="left" alt="logo" />
                        <div className="right flexfs">
                            <div className='list'><input onChange={(e)=>this.inputchange(e)} placeholder='输入该兴趣内容'></input> </div>
                            <div className='list mobilenone flexfs'>
                                <NavLink className='navlist' to='/home' activeStyle={{fontWeight: "bold",color: "red"}}>首页</NavLink>
                                <NavLink className='navlist' to='/BokeClassify' activeStyle={{fontWeight: "bold",color: "red"}}>文章</NavLink>
                                <NavLink className='navlist' to='/excellent' activeStyle={{fontWeight: "bold",color: "red"}}>推荐</NavLink></div>
                        </div>
                    </div>
                </header>
                <main className='boke-mian flexcolfs'>
                    {/* 中心内容 */}
                    <div className='center flexcollb'>
                        <div className='left flexcolct'>
                            <Redirect path="/" to={{pathname: '/home'}} />
                            <Route exact path="/home" component={Boke} />
                            <Route path="/bokeDetail" component={BokeDetail} />
                            <Route path="/bokeClassify" component={BokeClassify} />
                            <Route path="/excellent" component={Excellent} />
                        </div>
                        <div className='right'>
                            右侧菜单
                        </div>
                        
                    </div>
                </main>
            </Router>
        );
    } 
}
export default Index;
