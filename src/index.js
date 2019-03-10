import React from './Lqbreact';
import ReactDOM from './Lqbreact-dom';

import './index.css';
// import App from './App';
console.log('ReactDOM: ', ReactDOM);
// class Lqb extends React.Component{
//   render(){
//     return<h2>lqb的React</h2>
//   }
// }

//1、Component 
//2、render
//3、createElement
function Lqb(props) {
  return <h3 key='h3'>this is a function component;{props.name}</h3>
}

class Lqb2 extends React.Component{
  render(){
    return <h4>this is a class component</h4>
  }
}

ReactDOM.render(
<div id='lqb' className='demo' key='xx'>
  今天天气不太好
  <Lqb name="lqb"/>
  <Lqb2></Lqb2> 
</div>, document.getElementById('root'));

//JSX 是什么： 表面上是html, 其实是js是React.creatElement返回的数据