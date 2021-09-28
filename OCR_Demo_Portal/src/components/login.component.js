import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from '../../src/logo.svg'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            transactionid : '',
            successMsg: false,
            error: false
        }
        this.handleTransactionID = this.handleTransactionID.bind(this)
    }
    handleSubmit(){
        
        if(this.state.transactionid.length>4){
            const api = `https://ocrdemoapi2.azurewebsites.net/api/values?RefId=${this.state.transactionid}`
            console.log("api",api)
            const headers = {
            'content-Type' : 'application/json' 
        }
            const data =  axios.post(
                `${api}`,
                { headers }).then(response=>{
                    console.log("data",response)
                })
            this.setState({
                successMsg : true,
            })
        }
        else{
            this.setState({
                error: true
            })
        }
    }

    handleTransactionID(e){
        this.setState({
            transactionid: e.target.value
        })
    }

    handleBack(){
        this.setState({
            transactionid: '',
            successMsg: false
        })
    }
    render() {
        const {successMsg} = this.state
        console.log("satate",this.state)
        return (
            <form>
                 {!successMsg ? 
                  <div>
                <svg className="svg-icon" id="Capa_1" enable-background="new 0 0 508.803 508.803" height="60" viewBox="0 0 508.803 508.803" width="60" xmlns="http://www.w3.org/2000/svg"><path id="XMLID_1081_" d="m50.895 82.642-45.73 12.734 45.73 164.226z"/><path id="XMLID_1084_" d="m115.182 483.167 7.139 25.636 92.064-25.636z"/><path id="XMLID_1087_" d="m387.709 453.167-96.883-96.883h-132.189v-30h102.189l-33.02-33.021h-69.168v-30h53.385l-14.445-33.021h-38.941v-30h25.817l-8.612-19.687 45.005 19.687h145.148v30h-79.721l33.021 33.021h46.701v30h-16.701l89.639 89.639v-382.902h-358.039v453.167zm-227.039-378.965h114.86v30h-114.86zm0 63.02h205.325v30h-205.325z"/><path id="XMLID_1091_" d="m266.611 253.007-32.561-14.244 14.244 32.562 195.109 195.109 18.317-18.318z"/><path id="XMLID_1092_" d="m482.934 469.33-18.318 18.318 17.043 17.043c4.875 4.875 12.804 4.873 17.678 0l.64-.641c2.361-2.361 3.661-5.5 3.661-8.838s-1.3-6.478-3.661-8.838z"/></svg>
                      <br/>
                <h5 style={{'text-align': 'center'}}>Enter Transaction Details</h5>
                <div className="form-group">
                    {/* <label>Transaction Number</label> */}
                    <input type="text" className="form-control" style={{'border-radius':'10px'}}onChange={this.handleTransactionID} value = {this.state.transactionid} placeholder="Transaction number" />
                </div>
                {this.state.error ? <span>{'Please enter valid 5 digit transaction Id'}</span> : ''}

                <button type="submit" className="btn btn-primary btn-block btn-purple" onClick={()=>{this.handleSubmit()}}>Submit</button>
                </div>
                : '' }
                
                { successMsg ? <div>
                  
    
                    <img src={logo} alt="" className="App-logo" />
                    
                    <div class="alert alert-info" role="alert">
                {`Notification Sent. OCR requested for Transaction id ${this.state.transactionid}`}
                </div>
                <div style={{textAlign:'center'}}>
                 <Link className="link" to={"/"} onClick={()=>{this.handleBack()}}> {`< Home`}</Link>
                 </div>
                 </div>
                : ''}
            </form>
        );
    }
}
