import React,{Component} from 'react';
import Boke from '../view/boke';
import './css/boke.css';
import './css/bases.css';
import http from '../api/api'
class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            bokeInfo:[]
        }
    }
    componentDidMount(){
        const that = this;
        http.get('Homeinfo').then(function(res){
            if(res.code === 0){
                that.setState({bokeInfo:res.data.bokeInfo})
            }
        })
    }
    render(){
        return (      
            <Boke bokeInfo={this.state.bokeInfo}></Boke>    
        );
    } 
}
export default HomePage;
