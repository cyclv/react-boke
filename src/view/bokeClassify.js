import React,{Component} from 'react';
import './css/boke.css';
import './css/bases.css';
class BokeDetail extends Component{
    inputchange = (e)=>{
        console.log(e.target.value)
    }
    render(){
        return (
            <div className='boke'>
                <div className='boke-list'>
                    boke分类
                </div>    
            </div>
        );
    } 
}
export default BokeDetail;
