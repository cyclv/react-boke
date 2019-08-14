import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import './css/layout.css';
import './css/bases.css';
import './css/animation.css';
import mobile from '../images/mobile.jpg';
import HomePage from '../view/homePage';
import BokeDetail from '../view/bokeDetail';
import BokeClassify from '../view/bokeClassify';
import Excellent from '../view/excellent';
class Index extends Component{
    constructor(props){
        super(props)
        this.state=({
            mobileNav:false,
        });
    }
    
    inputChange = (e)=>{
        console.log(e.target.value)
    }
    clickMobileNav= (item)=>{
        if(this.state.mobileNav){
            this.setState({mobileNav:!this.state.mobileNav})
        }else{
            this.setState({mobileNav:item})
        }
    }
    render(){
        return (
            <Router className='home'>
                <header className="home-header flexct">
                    <div className='info flexlb wt90mb80'>
                        <img src={logo} className="left" alt="logo" />
                        <div className="right flexfs">
                            <div className='list'><input onChange={(e)=>this.inputChange(e)} placeholder='输入该兴趣内容'></input> </div>
                            <div className={this.state.mobileNav?'list mobileNav flexcolct move-in-left':'list mobilenone flexfs move-out-left'}>
                                <NavLink exact onClick={this.clickMobileNav.bind(this,false)} activeClassName="nav-select" className='navlist' to='/' >首页</NavLink>
                                <NavLink exact  onClick={this.clickMobileNav.bind(this,false)} activeClassName="nav-select" className='navlist' to='/BokeClassify' >文章</NavLink>
                                <NavLink exact  onClick={this.clickMobileNav.bind(this,false)} activeClassName="nav-select" className='navlist' to='/excellent' >推荐</NavLink>
                            </div>
                            <div className='list pcnone' onClick={this.clickMobileNav.bind(this,true)}>
                                <img src={mobile} alt=''></img>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='home-main flexcolfs'>
                    {/* 中心内容 */}
                    <div className='center flexcollb wt90mb80'>
                        <div className='left flexfswrap'>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/bokeDetail" component={BokeDetail} />
                            <Route path="/bokeClassify" component={BokeClassify} />
                            <Route path="/excellent" component={Excellent} />
                        </div>
                       
                        <div className='home-right flexcolfs'>
                            <div className='right-info'>
                                <div className='bokeman'></div>
                                <div className='bokeman'></div>
                            </div>
                            <div className='right-info'>React 用于构建用户界面的 JavaScript 库 </div>
                            <div className='right-info'></div>
                        </div>
                        
                    </div>
                </main>
            </Router>
        );
    } 
}
export default Index;
