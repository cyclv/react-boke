import React,{Component} from 'react';
import './css/bases.css';
import './css/components.css';
class Excellent extends Component{
    render(){
        const info = [{id:1,name:'php之家',url:''},{id:2,name:'菜鸟教程',url:''},{id:3,name:'软件下载',url:''}]
        return (
            <div className='excellent wt100'>
                <div className='list'>
                    <div className='content'>推荐网址</div>
                    <div className='content flexfswrap'>
                        {info.map(function(itemtwo){
                            return(
                                <div key={itemtwo.id} className='info'>{itemtwo.name}</div>
                            )
                        })}
                    </div>
                </div>    
            </div>
        );
    } 
}
export default Excellent;
