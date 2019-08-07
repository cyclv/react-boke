import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './css/boke.css';
import './css/bases.css';
class Boke extends Component{
    inputchange = (e)=>{
        console.log(e.target.value)
    }
    render(){
        const bokeinfo =[{id:1,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'},
        {id:2,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'},
        {id:3,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'},
        {id:4,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'},
        {id:5,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'},
        {id:6,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'},
        {id:7,updatatime:'2019年 08月06日',head:'源码阅读(1)：Java中主要的List结构——概述',subhead:'典型的数据结构中，对于“表”结构的定义是：在一维空间下元素按照某种逻辑结构进行线性连接排列的数据结构（一对一）。java中集合定义中所包括的链表（ArrayList）、链表（LinkedList）、各种队列（Queue/Deque）、栈（Stack）等都满足这样的定义。本文及后续的几篇文章中将介绍Java集合结构中关于List接口、Queue接口、Set接口下的重要实现类。'}
    ]
        return (
            <div className='boke'>
                <div className='boke-message'>最新消息通知</div>
                <div className='boke-list'>
                    {bokeinfo.map(function(item){
                        return(
                        <div key={item.id} className='boke-info'>
                            <div className='info'>{item.head}</div>
                            <div className='info'>{item.subhead}</div>
                            <div className='info flexlb'>{item.updatatime} <Link className='more' to={'/bokeDetail?id=' + item.id}>阅读全文 ></Link></div>
                        </div>)
                    })}
                    
                </div>    
            </div>
        );
    } 
}
export default Boke;
