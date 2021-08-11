// import React from 'react'
import React, { useState, useEffect } from 'react'

const css = {
    margin: '1rem'
}


/** Class Component */
/*class Count extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        document.title = `You Click ${this.state.count} times.`
    }
    componentDidUpdate(){
        document.title = `You Click ${this.state.count} times.`
    }

    render(){
        return(
            <div style={css}>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        )
    }

}*/



/** Function Component */
function Count() {
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 같은 방식으로
      useEffect(() => {
          console.log('useEffect')
        // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
        document.title = `You clicked ${count} times`;
      }, [count]); // count가 바뀔 때만 effect를 재실행합니다.

    return(
        <div style={css}>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <p> 
            useEffect Hook을 이용하여 우리는 리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다. <br/>
            컴포넌트를 렌더링할 때 리액트는 우리가 이용한 effect를 기억하였다가 DOM을 업데이트한 이후에 실행합니다. <br/>
            첫번째 렌더링과 이후의 모든 업데이트에서 수행 <br/>
            effect를 렌더링 이후에 발생<br/>
            effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장<br/>
            리렌더링하는 때마다 모두 이전과 다른 effect로 교체하여 전달합니다. <br/>
          </p>


        </div>
    )
}

export default Count

