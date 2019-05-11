import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const mystyles = StyleSheet.create({
  myblue:{
    color:'blue'
  }
})



export class MyComp extends Component{

  constructor(props){
    super(props)
    this.state = {myValue: 1};

    const timer = setInterval(()=>{
      this.setState(oldObj=>(
        {myValue:oldObj.myValue+1}
      ))
    },1000);
   // clearInterval(t)
  }

  

  render(){
    return <View>
      <Text style={mystyles.myblue}>{this.props.myname} : {this.state.myValue}</Text>
    </View>
  }
}

export default class HelloWorld extends Component{
  
  constructor(props){
    super(props)
    this.state = {text: "Button Default Title"}
  }
 

  onMyBtnPressed = () => this.setState({text:"Value changed"})

  render(){
   // return <Text style={mystyles.myblue}>Hello Wolrd</Text>
   return <View>
     <MyComp myname="Hello World"></MyComp>
     <Button title={this.state.text} color="#841584" onPress={this.onMyBtnPressed}></Button>
   </View>
   
  }
}
