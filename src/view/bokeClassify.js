import React,{Component} from 'react';
import './css/boke.css';
import './css/bases.css';
import Boke from '../view/boke';
import http from '../api/api';
class bokeDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            classify:[],
            bokeAll:[],
            bokeList:[],
            bokeDetail:[],
            bokeSelect:0
        }
    }
    componentDidMount(){
        const that = this;
        http.get('bokeinfo').then(function(res){
            if(res.code === 0){
                var allinfo = [];
                const info =  res.data.bokeinfo;
                for(var i= 0;i<info.length;i++){
                    allinfo = allinfo.concat(info[i])
                }
                that.setState({classify:res.data.classify,bokeAll:allinfo,bokeList:info,bokeDetail:allinfo})
            }
        })
    }
    clickClassify = (index) =>{
        if(index === 0){
            this.setState({bokeSelect:index,bokeDetail:this.state.bokeAll})
        }else{
            this.setState({bokeSelect:index,bokeDetail:this.state.bokeList[index - 1]})
        }
        
    }
    render(){
        var that = this;
        return (
            <div className='boke-classify bkgdffff wt100'>
                <div className='boke-info flexfswrapfs'>
                    {this.state.classify.map(function(item,index){
                        return(
                            <div key={item.id} onClick={that.clickClassify.bind(that,index)} className={that.state.bokeSelect === index?'classify-list mgt20 selected':'classify-list mgt20'}>{item.name}</div>
                        )
                    })}
                </div>   
                <div className='mgt20 flexctfs'><Boke bokeinfo={this.state.bokeDetail}></Boke></div>
            </div>
        );
    } 
}
export default bokeDetail;
