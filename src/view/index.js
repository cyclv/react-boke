import React,{Component} from 'react';
import logo from '../logo.svg';
import './css/layout.css';
import './css/bases.css';
class Index extends Component{
    inputchange = (e)=>{
        console.log(e.target.value)
    }
    render(){
        return (
            <div className='boke'>
                <header className="boke-header flexct">
                    <div className='info flexlb'>
                        <img src={logo} className="left" alt="logo" />
                        <div className="right flexfs">
                            <div className='list'><input onChange={(e)=>this.inputchange(e)} placeholder='输入该兴趣内容'></input> </div>
                            <div className='list mobilenone flexfs'><div className=''>首页</div><div>文章</div><div>推荐</div></div>
                        </div>
                    </div>
                </header>
                <main className='boke-mian flexcolfs'>
                    {/* 中心内容 */}
                    <div className='center flexlb'>
                        <div className='left'>
                            <div className='boke-list'>
                                <div className='info'>源码阅读(1)：Java中主要的List结构——概述</div>
                                <div className='info'>
    典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。
    java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。
    本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。                    
                                </div>
                                <div className='info'>2019年 08月06日</div>
                            </div>    
                        </div>
                        <div className='right'>
                            右侧菜单
                        </div>
                        
                    </div>
                </main>
            </div>
        );
    }
  
}

export default Index;
