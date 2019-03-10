import {initVnode} from './LqbVdom'; 

function render(vdom,container ) {
  console.log('vdom: ', vdom);
  
  
  let rootNode = initVnode(vdom);
  console.log('rootNode: ', rootNode);
  
  container.appendChild(rootNode)
return initVnode(vdom)
  

}
export default { render };