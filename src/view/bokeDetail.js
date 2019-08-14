import React,{Component} from 'react';
import './css/boke.css';
import './css/bases.css';
class BokeDetail extends Component{    
    constructor(props){
        super(props)
        this.state = ({
            bokedt:[],
        })
    }
    componentDidMount(){
        this.setState({bokedt:JSON.parse(localStorage.getItem('bokedt'))})
    }
    render(){
        return (
            <div className='boke-detail wt100 flexct'><div className='detail-inf0' dangerouslySetInnerHTML={{__html: this.state.bokedt}}></div></div> 
        );
    } 
}
export default BokeDetail;
