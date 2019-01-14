import React, { Component } from 'react';
import './text.css'
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            textArr: [],
            select: ['上海', '北京', '深圳', '广州'],
            selectArr: [],
        }
        this.handleClick = this.handleClick.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
    }
    onChangeText(e) {
        this.setState({
            text: e.target.value,
        });
    }
    handleClick() {
        console.log(this.refs.text.value)
        let textArr = this.state.textArr
            textArr.push(this.refs.text.value)
        this.setState({
            textArr: textArr,
        });
        this.state.text=''
    }
    onChangeSelect = (e)=> {
        this.setState({
            select: e.target.value, 
        });
    }
    handleClickSelect = () => {
        // let selectArr = this.state.select
            // selectArr.push(this.refs.select.value)
        console.log(this.state.select)

        // this.setState({
            // selectArr: selectArr,
        // })
    }
    render() {
        return (
            <div id='test'>
                <h3>测试部分</h3>
                <div>
                    <p className='title'>1.常规输入框</p>
                    <div className="output">
                        内容如下：{this.state.text}
                    </div>
                    <ul>
                        {
                            this.state.textArr.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <p>{v}</p>
                                        <hr/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <input type="text" ref='text' value={this.state.text} onChange={this.onChangeText} placeholder="请输入"/>
                    <button onClick={this.handleClick}>普通输入框提交</button>
                    <hr />

                    <p className='title'>2.下拉输入框</p>
                    <button onClick={this.handleClickSelect}>下拉输入框提交</button>
                    <div className="output">
                        内容如下：
                    </div>
                    <select>
                        {
                            this.state.select.map((v, i) => { 
                                return (
                                    <option key={i} value={this.state.select} onChange={this.onChangeSelect}>{v}</option>
                                )
                            })
                        }
                    </select>
                    
                </div>
            </div>
        )
    }
}
export default Test;