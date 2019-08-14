import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './css/boke.css';
import './css/bases.css';
class Boke extends Component{
    bokedt= (item) =>{
        localStorage.setItem('bokedt',JSON.stringify(item))
    }
    render(){
        var that = this
        return (      
            <div className='boke-list flexcolfs wt100'>
                {this.props.bokeinfo.map(function(item){
                    return(
                    <div key={item.id} className='boke-info'>
                        <div className='info'>{item.head}</div>
                        <div className='info' dangerouslySetInnerHTML={{__html: item.htmlinfo}}></div>
                        <div className='info flexlb'>{item.updatatime} <Link onClick={that.bokedt.bind(that,item.htmlinfo)} className='more' to={'/bokeDetail?id=' + item.id}>阅读全文 ></Link></div>
                    </div>)
                })}
                
            </div>    
        );
    } 
}
export default Boke;
