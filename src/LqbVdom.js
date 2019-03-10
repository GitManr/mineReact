
export function createVnode(vnode) {
  const { vtype, type, props } = vnode
  //创建虚拟dom

  return { vtype, type , props}
}

export function initVnode(vnode) {
  //初始化vnode
  const { vtype, type, props } = vnode;
    //vnode == > dom
   if(!vtype){
    //这个只是一个单纯的文本
    return document.createTextNode(vnode);
   }
   if(vtype === 1) {
    // 这是一个普通的div

    return initVelement(vnode)

   }else if (vtype === 2) {
      //这是一个class组件
    return initClassComp(vnode);
     
   }else if(vtype === 3) {
   //这是一个函数组件

   return initFuncComp(vnode)

   }
}

function initClassComp(vnode) {
  
  const {  type, props} = vnode;
  let component = new type(props);
  const newNode = component.render()
  return initVnode(newNode)
}

function initFuncComp (vnode) {
  //函数组件
  const {  type, props} = vnode;
  let newNode = type(props);
  
  return initVnode(newNode);
}

function initVelement(vnode) {
  const { vtype, type, props } = vnode;
  const node = document.createElement(type);
  const { key, style, children ,...reset} = props;
  Object.keys(reset).forEach(k => {
    node.setAttribute(k,reset[k]);
  })
  initVchildren(node, children)
  return node
}
function initVchildren(node , children) {
  children.forEach(c => {
    node.appendChild(initVnode(c))
  })
}