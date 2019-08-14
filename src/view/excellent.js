import React,{Component} from 'react';
import './css/bases.css';
import './css/components.css';
import http from '../api/api'
class Excellent extends Component{
    constructor(props){
        super(props)
        this.state={
            excellentInfo:[]
        }
    }
    componentDidMount(){
        http.get('excellent').then((res)=>{
            if(res.code === 0){
                this.setState({excellentInfo:res.data.excellent})
            }
        })
    }
    render(){
        return (
            <div className='excellent wt100'>
                {this.state.excellentInfo.map((item)=>{
                    return(
                        <div className='list' key={item.id}>
                            <div className='content'>{item.title}</div>
                            <div className='content flexfs'>
                                {item.children.map(function(itemtwo){
                                    return(
                                        <a key={itemtwo.id} className='info flexfs' href={itemtwo.src} target='_blank' rel="noopener noreferrer">
                                            <img src={itemtwo.imgaddress} alt={itemtwo.head}></img>
                                            <div className='right flexcolfs'>
                                                <div className='right-info'>{itemtwo.head}</div>
                                                <div className='right-info'>{itemtwo.subhead}</div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}    
            </div>
        );
    } 
}
export default Excellent;
