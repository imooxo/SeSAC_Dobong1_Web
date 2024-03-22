import {Component} from "react";

class MyComponent extends Component {
    // mount(생성) 되었을 때
    componentDidMount(){
        console.log("class component, mount됨!")
    }

    // update(업데이트) 되었을 때
    componentDidUpdate(){
        console.log("class component, update됨!")
    }

    // unmount(제거) 예정일 때
    componentWillUnmount(){
        console.log("class component, unmount됨!")
    }

    render() {
        return <p>My Component {this.props.number}</p>
    }
}

class LifeCycleFunc extends Component{
    state = {
        number:0,
        visible: true,
    };

    changeNumberState = () => {
        this.setState({number: this.state.number + 1});
    }

    changeVisibleState = () => {
        this.setState({visible: !this.state.visible});
    }

    render(){
        return(
            <>
            <button onClick = {this.changeNumberState}>number + 1</button>
            <button onClick = {this.changeVisibleState}>onoff</button>
            {this.state.visible && <MyComponent number = {this.state.number}/>}
            </>
        )
    }
}

export default LifeCycleFunc;