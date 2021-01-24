import React from 'react'
//Importing Components
import CalculatorTitle from './calculatorTitle'
import OutputScreen from './outputScreen'
import Button from './button'




class Calculator extends React.Component {
    constructor(){
        super();
        this.state ={
            question :'',
            answer :'',
        }
        this.userInputHandler = this.userInputHandler.bind(this) // this will allways refers to this component not the component where the function has been called
    }
    userInputHandler(event){
      const value = event.target.value;
      switch(value){
          case '=' :{
            if(this.state.question!== ''){
                var ans ='';
                try{
                    ans = eval(this.state.question)
                }
                catch(err)
                {
                    this.setState({answer:'ERROR'})
                }
                if(ans == undefined){
                    this.setState({answer:'ERROR'})
                }else{
                    this.setState({answer : ans, question : ''})
                }
                break;
                }
            }
          
          case 'Clear' :{
            this.setState({answer:'',question:''});
            break;
          }
          case 'Delete' : {

            var question = this.state.question;
            question = question.substr(0,question.length-1);
            this.setState({question:question});
            break;
          }
          default : {
            this.setState({question: this.state.question += value })
          }

      }
    }
    render()
    {
        return(
            <div className="mainCalc">
                <CalculatorTitle title ='Meriem Calculator' />
                <div className="mainCalc">
                    <OutputScreen operation ={this.state.question} result={this.state.answer}/>
                    <div className="button-row">
                    <Button onClick={this.userInputHandler} value='Clear'/>
                    <Button  onClick={this.userInputHandler} value='Delete'/>
                    <Button onClick={this.userInputHandler} value='.'/>
                    <Button onClick={this.userInputHandler} value='/'/>
                    </div>
                    <div className="button-row">
                    <Button onClick={this.userInputHandler} onClick={this.userInputHandler}  value='7'/>
                    <Button  onClick={this.userInputHandler}value='8'/>
                    <Button onClick={this.userInputHandler} value='9'/>
                    <Button  onClick={this.userInputHandler} value='*'/>
                    </div>
                    <div className="button-row">
                    <Button  onClick={this.userInputHandler} value='4'/>
                    <Button  onClick={this.userInputHandler} value='5'/>
                    <Button  onClick={this.userInputHandler} value='6'/>
                    <Button  onClick={this.userInputHandler}value='-'/>
                    </div>
                    <div className="button-row">
                    <Button  onClick={this.userInputHandler}value='1'/>
                    <Button  onClick={this.userInputHandler}value='2'/>
                    <Button  onClick={this.userInputHandler} value='3'/>
                    <Button  onClick={this.userInputHandler}  value='+'/>
                    </div>
                    <div className="button-row">
                    <Button  onClick={this.userInputHandler}value='0'/>
                    <Button  onClick={this.userInputHandler} value='='/>
               
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Calculator

const evaluate = ()=>{
    return(5)
}