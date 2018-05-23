import React, { Component } from 'react';
import { Style } from '~/core/container';
import { withRouter } from "react-router-dom";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import InputNum from "./InputNum";
import HashNum from "./HashNum";
import SPonList from "./SPonList";

class SPonFrame extends Component {
    state = { 
        S2:[],
        S3:[],
        S4:[],
        open: false,
    }

    stepNext = (nowStep) => () => {
        let { star } = this.props.match.params
        if (nowStep < star) {
            this[`inputRef${nowStep+1}`].focus()
        }
    }

    bettingSlip = () => {
        let { star } = this.props.match.params
        let num = []
        let money
        let nowStar = this.state[`S${star}`]
        for (let index = 0; index < star; index++) {
            let temp = this[`inputRef${index}`].value
            if (temp.length == 0 || num.includes(temp)) {
                return this.handleOpen()
            }else if (temp.length < 2) {
                temp = `0${temp}`
            }
            num.push(temp)
        }
        if (this[`inputRef${star}`].value.trim()) {
            money = this[`inputRef${star}`].value
        }else{
            return this.handleOpen()
        }
        this.clearAllInput()
        this.setState({
            [`S${star}`] : [...nowStar,{
                'num': num,
                'bet': 999,
                'baseMoney': 50,
                'money': money,
            }]
        })
    }

    clearAllInput = () => {
        let { star } = this.props.match.params
        for (let index = 0; index <= star; index++) {
            this[`inputRef${index}`].value = ''  
        }
        this[`inputRef0`].focus()
    }

    clearAllBetting = () => {
        let { star } = this.props.match.params
        
        this.setState({
            [`S${star}`] : []
        })
    }
    
    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };
    
    

    render() {
        let { match } = this.props
        let { star, type } = match.params
        
        let nowStar = new Array(+star).fill(star)
        const actions = [
            <FlatButton
              label="確認"
              primary={true}
              onClick={this.handleClose}
            />,
        ];
      
        return (
            <div styleName="col-xs-7 ball">
                <div styleName="nav-content">
                    <div styleName="game-holder text-center">
                        <div styleName="title2"> { star } 星 單碰</div>
                        <div styleName="row full">
                            <div styleName="flex">
                                { 
                                    nowStar.map((item, index)=>{
                                        return(
                                            <InputNum key={`inputNum${index}`} 
                                                setRef={ref => (this[`inputRef${index}`] = ref)} 
                                                stepNext={this.stepNext(index)}
                                            />
                                        )
                                    })
                                }
                                <div styleName="col-xs-cash">
                                    <h4>金額</h4>
                                    <input type="text" 
                                        styleName="form-control text-center"
                                        ref={el => this[`inputRef${star}`] = el}
                                        onKeyUp={e => {
                                            e.target.value = e.target.value.replace(/\D/g,'')
                                            if(e.target.value.trim() && e.key === 'Enter') {
                                                this.bettingSlip()
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div styleName="col-xs-6">
                                <a styleName="btn-add btn-block" onClick={this.bettingSlip}>加入這一筆單碰</a>
                            </div>
                            <div styleName="col-xs-6">
                                <a styleName="btn-clear btn-block" onClick={this.clearAllInput}>清除號碼與金額</a>
                            </div>
                            <div styleName="col-xs-12">
                                <a styleName="btn-clearall btn-block" onClick={this.clearAllBetting}>清除所有的單碰</a>
                            </div>
                            <div styleName="subtitle row full">
                                <div styleName="flex">
                                    { 
                                        nowStar.map((item,index)=>{
                                            return(
                                                <HashNum key={`HashNum${index}`} />
                                            )
                                        }) 
                                    }
                                    <div styleName="col-xs-number-cash-title">賠率</div>
                                    <div styleName="col-xs-number-cash-title">本金</div>
                                    <div styleName="col-xs-number-cash-title">金額</div>
                                    <div styleName="col-xs-number-del-title-end">清除</div>
                                </div>
                            </div>
                            {
                                this.state[`S${star}`].length == 0 ? <div styleName="col-xs-12 nodata">沒有資料</div> : <SPonList data={this.state[`S${star}`]}/>
                            }
                        </div>
                        <Dialog
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            actionsContainerStyle={{textAlign:'center'}}
                            contentStyle={{maxWidth: 500,}}
                        >
                            請填寫正確！！
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Style()(SPonFrame));