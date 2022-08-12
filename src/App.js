
import './App.css';
import React from 'react';

export default class  App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        description:false
    };

   
}

   render(){
    return(
    <div className="conteiner">
        <div className="head">{this.props.data.Name +'   '+ this.props.data.SurName}</div>
        <div className="mainBody">
            <div className="picture"> <img src={this.props.data.image} alt={this.props.data.id}/></div>
            <div className="description">
                <p><span>Имя:</span> {this.props.data.Name}</p>
                <p><span>Фамилия:</span> {this.props.data.SurName}</p>
                <p><span>Возраст:</span> {this.props.data.fullYearsOld}</p>
                <p><span>Семейное положение:</span> {this.props.data.family}</p>
                <p><span>Cтрана:</span> {this.props.data.country}</p>
                <p><span>Тел.:</span> {this.props.data.tell}</p>
                <p><span>Email:</span> {this.props.data.email}</p>
                <p className="lsDesc">{this.props.data.description}</p>
               
            </div>
        </div>
        <div className="footer">
        <button 
            onClick={()=>this.setState({description:this.state.description?false:true})}
            >{this.state.description? 'Cкрыть':'Подробнее..'}</button>
            {this.state.description && <p>{this.props.data.allDescription}</p>}
        </div>
        
     </div>
  
    )
   }
}


