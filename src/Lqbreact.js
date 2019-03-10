
import { createVnode } from './LqbVdom';

function createElement (type ,props, ...children) {
  // console.log('children: ', children);
  // console.log('props: ', props);
  // console.log('type: ', type);
  delete props.__source;
  delete props.__self;
  // 区分不同的组件类型
  if(props.className){
    props.class = props.className;
    delete props.className;
  }
  let vtype
  if(typeof type==='string'){
    vtype = 1;  //是个普通的标签元素, 如 div
  }else if (typeof type === 'function'){
    //函数组件
    //继承的类组件，也是函数， 所以加一个是否是纯函数组件
    if(type.isReactComponent){
      //class 组件，
      vtype = 2
    }else {
      //纯函数组件
      vtype = 3
    }
  }

  props.children = children;  //把children 挂载到props上
  // console.log(JSON.stringify({ type, vtype,props}))
  return createVnode({ vtype, type , props})
}

class Component  {

  constructor(props){
    this.props = props;
    this.state = {}
  }

  static isReactComponent = true;

  setState(){
    //异步更新队列 
  }
}

// class Updatar{
  
//   constructor(){

//   }
// }
export default { createElement, Component}