import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const mystyles = StyleSheet.create({
  myblue:{
    color:'blue'
  }
})

export class MyComp extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return <View>
      <Text style={mystyles.myblue}>{this.props.myname}</Text>
    </View>
  }
}

export default class HelloWorld extends Component{
  

  render(){
   // return <Text style={mystyles.myblue}>Hello Wolrd</Text>
   return <MyComp myname="Hello World"></MyComp>
  }
}
