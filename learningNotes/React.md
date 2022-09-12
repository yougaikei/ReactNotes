# React

---

## 1. 自定义搭建

- 这里使用的是 WebPack 搭建 React 的开发环境





---

## 2. 使用 Vite 搭建







---

## 3. JSX 的基础语法 







---

## 4. JSX 事件触发

- 在 JSX 中想要触发指定的事件可以直接定义事件然后将事件以驼峰命名法添加到元素中即可, 如: onClick ( 单击 )

``` jsx
import React, { Component } from 'react'

const clicks = () =>{
  let eles = document.getElementById('oNums');
  let count = parseInt(eles.innerHTML);
  eles.innerHTML = ++ count ;
}

class Practice extends Component{
  render(){
    return (
      <div>
        <h1>Practice</h1>
        <div className='"btns-box"'>
          <p id='oNums'>0</p>
          <button onClick={ clicks }>点击触发</button>
        </div>
      </div>
    )
  }
}

export default Practice
```

- 当然也可以设置有形参的函数, 并让其可以从标签中读取参数

```jsx
import React, { Component } from 'react'

const { log } = console

const logParameter = (num1, num2, ...num3) =>{
    log(`num1: ${num1}`)
    log(`num2: ${num2}`)
    log(`num3: ${num3}`)
}

class Practice extends Component{
  render(){
    return (
      <div>
        <h1>Practice</h1>
        <div className='"btns-one"'>
          <h2>本组是 箭头函数 触发</h2>
          <button onClick={ () => { logParameter( 1, 2, 3, 4 ) } }>点击触发</button>
        </div>
        <div className='"btns-two"'>
          <h2>本组是 bind 函数 触发</h2>
          <button onClick={ logParameter.bind( null, 1, 2, 3, 4 ) }>点击触发</button>
        </div>
      </div>
    )
  }
}

export default Practice
```

- 获取事件对象

``` jsx
import React, { Component } from 'react'

const { log } = console

const logParameter = (num1, num2, ...num3) =>{
    log(`num1: ${num1}`)
    log(`num2: ${num2}`)
    log(`num3: ${num3}`)
}

const logParameter2 = (num1, num2, e) =>{
  log(`num1: ${num1}`)
  log(`num2: ${num2}`)
  log('e:', e)
}

const logParameter3 = (e) =>{
  log(e)
}
const isBlue = () =>{
  document.querySelector('#oBox').style.backgroundColor = 'blue'
}

const isRed = () =>{
  document.querySelector('#oBox').style.backgroundColor = 'red'
}

class Practice extends Component{
  render(){
    return (
      <div>
        <h1>Practice</h1>
        <div className='"btns-one"'>
          <h2>本组是 箭头函数 触发</h2>
          <button onClick={ () => { logParameter( 1, 2, 3, 4 ) } }>点击触发</button>
          <button onClick={ (e) => { logParameter2( e, 1, 2 ) } }>点击触发</button>
        </div>
        <div className='"btns-two"'>
          <h2>本组是 bind 函数 触发</h2>
          <button onClick={ logParameter.bind( null, 1, 2, 3, 4 ) }>点击触发</button>
          <button onClick={ logParameter2.bind( null, 1, 2 ) }>点击触发</button>
          <button onClick={ logParameter3.bind( null) }>点击触发</button>
        </div>

        <div>
          <div style={{  width: 100, height: 100, backgroundColor: 'red' }} id="oBox" onMouseOver={ isBlue } onMouseOut={ isRed }></div>
        </div>
      </div>
    )
  }
}

export default Practice
```

---

## 5. 数据循环







---

## 6. 内联样式





