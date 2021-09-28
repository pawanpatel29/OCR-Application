import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../src/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import axios from "axios";
import Path from 'path';
import { useAlert } from 'react-alert';

import { getNotification, storeScrollYPosition } from '../actions/workOrderActions'
import uploadFileToBlob,{ uploadFileToBlob2, getBlobsInContainer} from './azure-storage-blob.js';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Barcode from './Barcode.component';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";



// let fileData = '';
let fileData1 = '';
let fileData2 = '';
toast.configure();

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      inputFile: [],
      inputFile2: [],
      listItems: [],
      actualFile: '',
      actualFile2: '',
      blobList: [],
      next: false,
      next2: false,
      fileSelected: null,
      fileSelected2: null,
      result: 'No result',
      scanning: false,  
      barcodeResult: 'Barcode'
    };
    this.faultImageInput = React.createRef();
    this.faultImageInput2 = React.createRef();
    this.handleScan = this.handleScan.bind(this)
  }

  componentDidMount() {
    //this.getBlobsInContainer();
    this.updateUser();
  }

  updateUser() {
    this.props.getNotification().then(data => {
      console.log("1234567", data)
      const temp = data && data.payload ? data.payload : []
      this.setState({
        listItems: temp,
      })
    })
  }

  notify() { toast("Wow so easy !"); }

  backToDashboard(data) {
    let arr = []
    var list = this.state.notItems
    if (list && list.length > 0) {
      list.map(item => {
        item.show = false
        arr.push(item)
      })
      this.setState({
        notItems: arr,
        selectedId: data
      })
    }
    this.setState({
      banner: true,
      show: false,
      notificationOpen1: false,
      notificationOpen2: false
    })
  }


  // onFileChange = (event) => {
  //   // capture file into state
  //   this.setState({fileSelected: event});   
  // };

  // onFileChange = (event) => {
  //   let file = event
  //   const transId = this.props.getScrollYPositionValue ? this.props.getScrollYPositionValue.id : ''
  //   let fileName = `#${transId}_OCR.${event.name.split('.').pop()}`
  //   file = new File([file], fileName, { type: file.type });
  //   console.log("file", file)
  //   fileData = file;
  //   this.setState({ fileSelected: file });
  //   debugger;
  // };

   onFileChange1 = (event) => {
    let file1 = event
    const transId = this.props.getScrollYPositionValue ? this.props.getScrollYPositionValue.id : ''
    let fileName1 = `${transId}_Reason.${event.name.split('.').pop()}`
    file1 = new File([file1], fileName1, { type: file1.type });
    console.log("file", file1)
    fileData1 = file1;
    this.setState({ fileSelected: file1 });
    // debugger;
  };

   onFileChange2 = (event2) => {
     console.log("file2 selec")
    let file2 = event2
    const transId = this.props.getScrollYPositionValue ? this.props.getScrollYPositionValue.id : ''
    const barcode= this.state.barcodeResult;
    let fileName2 = `${transId}_${barcode}.${event2.name.split('.').pop()}`
    file2 = new File([file2], fileName2, { type: file2.type });
    console.log("file", file2)
    fileData2 = file2;
    this.setState({ fileSelected2: file2 });
    // debugger;
  };


  focusImageInput1 = () => {
    this.faultImageInput.current.click()
  }

  focusImageInput2 = () => {
    this.faultImageInput2.current.click()
  }

  setImageStep2(file) {
    if (file) {
      const step2ImageItem = [...this.props.step2ImageData, file].filter(item => item !== undefined && item !== "")
      this.props.storeStep2Images(step2ImageItem)
    }
  }

  // handleChangeStep2Image = ({ target }) => {
  //   if (target && target.type === "file") {
  //     if (this.checkMimeType(target)) {
  //       if (target.files[0]) {
  //         this.getImagePreviewUrl(target.files[0])
  //         //this.setImageStep2(target.files[0])
  //         this.onFileChange(target.files[0])
  //       }
  //     }
  //     target.value = ''
  //   }
  // }

    handleChangeStep2Image1 = ({ target }) => {
        if (target && target.type === "file") {
          if (this.checkMimeType(target)) {
            if (target.files[0]) {
              this.getImagePreviewUrl1(target.files[0])
              //this.setImageStep2(target.files[0])
              this.onFileChange1(target.files[0])
            }
          }
          target.value = ''
        }
      }
    
    handleChangeStep2Image2 = ({ target }) => {
        if (target && target.type === "file") {
          if (this.checkMimeType(target)) {
            if (target.files[0]) {
              this.getImagePreviewUrl2(target.files[0])
              //this.setImageStep2(target.files[0])
              this.onFileChange2(target.files[0])
            }
          }
          target.value = ''
        }
      }

  getImagePreviewUrl1(file1) {
    let reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        inputFile: reader.result,
        actualFile: file1
      })
    }
    reader.readAsDataURL(file1)
  }

  getImagePreviewUrl2(file2) {
    let reader2 = new FileReader()
    reader2.onloadend = () => {
      this.setState({
        inputFile2: reader2.result,
        actualFile2: file2
      })
    }
    reader2.readAsDataURL(file2)
  }

  checkMimeType = (target) => {
    //getting file object
    let files = target.files
    //define message container
    let err = ''
    // list allow mime type
    const types = ['image/jpg', 'image/jpeg', 'image/png']
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every(type => files[x].type !== type)) {
        // create error message and assign to container
        err +=
          files[x].type +
          ' is not a supported format. Only .jpg, .jpeg, and .png is allowed'
      }
    }

    if (err !== '') {
      // if message not same old that mean has error
      target.value = null // discard selected file
      alert(err)
      console.log(err)
      return false
    }
    return true
  }

  handleClose = () => {
    fileData1 = ''
    fileData2 = ''
    var obj = {
      show: false,
      id: ''
    }
    this.setState({
      inputFile: [],
      inputFile2: [],
      next: false,
      next2: false,
      barcodeResult: 'Barcode'
    })
    
    this.props.storeScrollYPosition(obj)
  }

  handleCancel = () => {
    // fileData = ''
    fileData1 = ''
    fileData2 = ''
    var obj = {
      show: false,
      id: ''
    }
    this.setState({
      successMsg: false,
      next: false,
      next2: false,
      inputFile: [],
      inputFile2: [],
      barcodeResult: 'Barcode'
    })
    this.props.storeScrollYPosition(obj)
    this.updateUser();
  }



  handleNext = () => {  
    if (this.state.inputFile !== undefined && this.state.inputFile.length ==0){ 
      confirmAlert({
        // title: "Don't Have A Reason",
        message: 'Are you sure you want to skip?',        
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.setState({next:true})
          },
          {
            label: 'No ',
            
          }
        ]
      });
    }
    else{
      this.setState({next:true})
    }    
  }

  handleNext2 = () => {  
    if (this.state.barcodeResult == 'Barcode'){ 
      confirmAlert({
        // title: "Don't Have A Reason",
        message: 'Are you sure you want to skip?',        
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.setState({next2:true})
          },
          {
            label: 'No ',
            
          }
        ]
      });
    }
    else{
      this.setState({next2:true})
    }    
  }
  
  handleBack =()=>{
    this.setState({
        next: false,
      })
  }

  handleScan=(data)=>{
    this.setState({
      result: data,
    })
  }
  handleError=(err)=>{
    console.error(err)
  }

  handleSubmit = async () => {
    const temp = this.props.getScrollYPositionValue;
    const value = temp.id;
    if (this.state.inputFile2 !== undefined && this.state.inputFile2.length > 1) {

      // delete notification.

      const api = `https://ocrdemoapi2.azurewebsites.net/api/values?RefId=${value}`

      const headers = {
        'content-Type': 'application/json'
      }

      const data = axios.delete(
        `${api}`,
        { headers }).then(response => {
          console.log("data", response)
          this.props.getNotification().then(data => {
          })
        })
      // const onFileUpload = async () => {

      //const [blobList, setBlobList] = useState([]);
      // *** UPLOAD TO AZURE STORAGE ***
      //const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);
      console.log('aaaaaaaaaaaaf', fileData1);
      console.log('aaaaaaaaaaaaf', fileData2);

      
      if(this.state.inputFile && this.state.inputFile.length > 0){
        const blobsInContainer= await uploadFileToBlob2(fileData1);
        } 

      const blobsInContainer2 = await uploadFileToBlob(fileData2);

      // setBlobList(blobsInContainer);
      // prepare UI for results
      //this.state.blobList(blobsInContainer);


      // delete notification   

      //fileRename
      // this.fileNameCall(value)

      this.setState({
        show: true,
        inputFile: [],
        inputFile2: [],
        successMsg: true,        
        blobList: [blobsInContainer2],
        barcodeResult: 'Barcode'
      })
      console.log("here it is"+this.state.blobList);
    }
  }


  handleremoveImage1 = () => {
    this.setState({
      inputFile: []
    })
  }

    handleremoveImage2 = () => {
    this.setState({
      inputFile2: []
    })
  }

  getBarcodeResult=(barcodeResult)=>{
    console.log(barcodeResult);
  this.setState({
    scanning:false,
    barcodeResult: barcodeResult
  })
  }

  
  scanToggle=()=>{
  if(!this.state.scanning){
    this.setState({
      scanning:true
    })
      } 
  else
  if(this.state.scanning){
    this.setState({
      scanning:false
    })
      } 
  
  }
  

notify = () => {
toast('Kuch Bhi',{position: toast.POSITION.TOP_CENTER})
}
  // fileNameCall(){
  //   let date = new Date();
  //   let currentTime = moment(date).format('YYYYMMDDHHmmss')
  //   let filename = `#_${currentTime}.${data['name'].split('.').pop()}`
  //   formData.append('file', data, filename)
  // }


  render() {

    const { getScrollYPositionValue } = this.props
    const { listItems } = this.state
    
    //debugger;
    let DisplayMessage = <div className="awoinfo-container">
      <div className="margin-top-small awoinfo-inner-container ln-u-padding-sides*2 ln-u-padding-bottom*4">
        <p className="text-align-center">{`Thank you for attending Transaction id :${1234567}. Details are now captured`}</p>
      </div>
      
      <NavLink onClick={this.cancelForm} to="/" activeClassName="is-active activeTab">
        Open Notifications
      </NavLink> </div>

    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      {getScrollYPositionValue && getScrollYPositionValue.show == false ?
        
            <div>          
              {listItems && listItems.length > 0 ?
                <h3>{`You have ${listItems.length} open transactions to attend`}</h3>
                : ''}
              {listItems && listItems.length == 0 ?
                <div>
                  <h3>You don't have any transactions to look</h3>
                  {/* <img src={logo} alt="" className="App-logo" /> */}
                </div>
                : ''}
            </div>        
          :
            <div>{!this.state.next ? 
                  <div>
                    <div className="form-group">
                    {/* <svg class="svg-icon" viewBox="0 0 20 20" width="80" height="80" >
							<path d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"></path>
						</svg> */}

                      <svg class="svg-icon" id="Capa_1" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m106 0c-41.355 0-75 33.645-75 75v437h360v-362h90v-90c0-33.084-26.916-60-60-60zm255 482h-300v-407c0-24.813 20.187-45 45-45.01h263.072c-5.123 8.843-8.072 19.085-8.072 30.01zm90-422v60h-60v-60c0-16.542 13.458-30 30-30s30 13.458 30 30z"/><path d="m91 270h180v30h-180z"/><path d="m91 90h240v30h-240z"/><path d="m91 150h210v30h-210z"/><path d="m91 210h240v30h-240z"/><path d="m91 330h210v30h-210z"/><path d="m91 390h150v30h-150z"/></g></svg>
                      <h5 style={{ 'text-align': 'center' }}>Transaction Number</h5>
                      <input type="text" className="form-control" placeholder="Transaction Number" value={getScrollYPositionValue ? getScrollYPositionValue.id : ''} disabled />
                    </div>
                    <div className="form-group">
                      {this.state.inputFile && this.state.inputFile.length == 0 ?
                        <button className="btn btn-default btn-block" onClick={this.onFileChange1} onClick={this.focusImageInput1} >Capture Problem Area</button>
                      : ''}

                      <input type="file" id="step3Image" style={{ display: 'none' }} onChange={this.handleChangeStep2Image1} accept=".jpg, .jpeg" ref={this.faultImageInput} />

                      {this.state.inputFile && this.state.inputFile.length > 0 ?
                        <div className="test-div"><img key={1} src={this.state.inputFile} width={"100%;"} id='imgtag' alt={`Image of fault ${1 + 1}   `} role="presentation" />
                          <button type="button" className="icon-top-left" aria-label="Close" onClick={this.handleremoveImage1}>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      : ''}
                    </div>
                    {this.state.inputFile && this.state.inputFile.length > 0 ?<button type="submit" className="btn btn-default btn-block" onClick={this.notify} onClick={this.handleNext}>Read Barcode</button>:
                    <button type="submit" className="btn btn-info btn-block" onClick={this.notify} onClick={this.handleNext}>Read Barcode</button>}
                    <button type="submit" className="btn btn-block" style={{ color: '#367bbc', 'font-weight':"bold" }} onClick={this.handleClose}>Cancel</button>
                  </div>:  
                  <div> {this.state.next && !this.state.next2? 
                            <div>
                              {!this.state.successMsg ?
                                <div>
                                  <div className="form-group">                                                                                                            
                                  <svg class="svg-icon" id="Capa_1" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m106 0c-41.355 0-75 33.645-75 75v437h360v-362h90v-90c0-33.084-26.916-60-60-60zm255 482h-300v-407c0-24.813 20.187-45 45-45.01h263.072c-5.123 8.843-8.072 19.085-8.072 30.01zm90-422v60h-60v-60c0-16.542 13.458-30 30-30s30 13.458 30 30z"/><path d="m91 270h180v30h-180z"/><path d="m91 90h240v30h-240z"/><path d="m91 150h210v30h-210z"/><path d="m91 210h240v30h-240z"/><path d="m91 330h210v30h-210z"/><path d="m91 390h150v30h-150z"/></g></svg>
                                  <h5 style={{ 'text-align': 'center' }}>Transaction Number</h5>
                                    <input type="text" className="form-control" placeholder="Transaction Number" value={getScrollYPositionValue ? getScrollYPositionValue.id+'_'+this.state.barcodeResult : ''} disabled />
                                  </div>
                                  
                                  <div className="form-group">                                  
                                  {/* <div style={{ 'text-align':'center' }}><Barcode getBarcodeResult ={this.getBarcodeResult}/></div> */}
                                  {this.state.barcodeResult && this.state.barcodeResult=='Barcode'?<div><h6>Barcode Reader</h6><BarcodeScannerComponent width={250} height={240} onUpdate={(err, result) => {
                                        if (result) {this.getBarcodeResult(result.text);} }}  /></div>:''}
                                  {/* {this.state.scanning?<div style={{ width:'fit-content' }}><BarcodeScannerComponent width={240} height={200} onUpdate={(err, result) => {
                                        if (result) {this.getBarcodeResult(result.text);} }}  /></div>:''} */}


                                    {/* {this.state.inputFile2 && this.state.inputFile2.length == 0 ?
                                      <button className="btn btn-primary btn-block" onClick={this.onFileChange2} onClick={this.focusImageInput2} >Capture <br/>Supplier Details</button>
                                    : ''} */}
                                    {/* {this.state.inputFile2 && this.state.inputFile2.length == 0 ?
                                      <div><button className="btn btn-primary" style={{ width: '48%',marginRight:'2px'}} onClick={this.scanToggle}>Capture <br/>Barcode</button><button className="btn btn-primary" style={{ width: '50%',marginLeft:'2px'}} onClick={this.onFileChange2} onClick={this.focusImageInput2} >* Capture <br/>Supplier</button></div>
                                    : ''} */}
                                    {/* <input accept="image/*" capture="environment" type="file" id="step3Image2" style={{ display: 'none' }} onChange={this.handleChangeStep2Image2} accept=".jpg, .jpeg" ref={this.faultImageInput2} /> */}
                                    {/* <input accept="image/*" capture="camera" type="file" id="step3Image2" style={{ display: 'none' }} onChange={this.handleChangeStep2Image2} ref={this.faultImageInput2} /> */}
                                  
                                    {/* {this.state.inputFile2 && this.state.inputFile2.length > 0 ?
                                      <div className="test-div"><img key={2} src={this.state.inputFile2} width={"100%;"} id='imgtag2' alt={`Image of fault ${2 + 1}   `} role="presentation" />
                                        <button type="button" className="icon-top-left" aria-label="Close" onClick={this.handleremoveImage2}>
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                    : ''} */}
                                  </div>   
                                  {this.state.barcodeResult && this.state.barcodeResult=='Barcode'?
                                  <button type="submit" className="btn btn-info btn-block" onClick={this.handleNext2}> Next </button>:<button type="submit" className="btn btn-default btn-block" onClick={this.handleNext2}> Next </button>}
                                  <button type="submit" className="btn btn-block" style={{ color: '#367bbc', 'font-weight':"bold" }} onClick={this.handleClose}>Cancel</button>
                                </div>
                                  : ''}                                
                            
                            </div>:
                            
                            <div>
                            {!this.state.successMsg && this.state.next2 ?
                              <div>
                                <div className="form-group">                                                                                                            
                                <svg class="svg-icon" id="Capa_1" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m106 0c-41.355 0-75 33.645-75 75v437h360v-362h90v-90c0-33.084-26.916-60-60-60zm255 482h-300v-407c0-24.813 20.187-45 45-45.01h263.072c-5.123 8.843-8.072 19.085-8.072 30.01zm90-422v60h-60v-60c0-16.542 13.458-30 30-30s30 13.458 30 30z"/><path d="m91 270h180v30h-180z"/><path d="m91 90h240v30h-240z"/><path d="m91 150h210v30h-210z"/><path d="m91 210h240v30h-240z"/><path d="m91 330h210v30h-210z"/><path d="m91 390h150v30h-150z"/></g></svg>
                                <h5 style={{ 'text-align': 'center' }}>Transaction Number</h5>
                                  <input type="text" className="form-control" placeholder="Transaction Number" value={getScrollYPositionValue ? getScrollYPositionValue.id+'_'+this.state.barcodeResult : ''} disabled />
                                </div>
                                <div className="form-group">                                  
                                {/* <div style={{ 'text-align':'center' }}><Barcode getBarcodeResult ={this.getBarcodeResult}/></div> */}
                                {/* {this.state.barcodeResult && this.state.barcodeResult=='Barcode'?<BarcodeScannerComponent width={240} height={200} onUpdate={(err, result) => {
                                      if (result) {this.getBarcodeResult(result.text);} }}  />:''} */}
                                {/* {this.state.scanning?<div style={{ width:'fit-content' }}><BarcodeScannerComponent width={240} height={200} onUpdate={(err, result) => {
                                      if (result) {this.getBarcodeResult(result.text);} }}  /></div>:''} */}


                                  {this.state.inputFile2 && this.state.inputFile2.length == 0 ?
                                    <button className="btn btn-default btn-block" onClick={this.onFileChange2} onClick={this.focusImageInput2} >Capture Supplier Details</button>
                                  : ''}
                                  {/* {this.state.inputFile2 && this.state.inputFile2.length == 0 ?
                                    <div><button className="btn btn-primary" style={{ width: '48%',marginRight:'2px'}} onClick={this.scanToggle}>Capture <br/>Barcode</button><button className="btn btn-primary" style={{ width: '50%',marginLeft:'2px'}} onClick={this.onFileChange2} onClick={this.focusImageInput2} >* Capture <br/>Supplier</button></div>
                                  : ''} */}
                                  {/* <input accept="image/*" capture="environment" type="file" id="step3Image2" style={{ display: 'none' }} onChange={this.handleChangeStep2Image2} accept=".jpg, .jpeg" ref={this.faultImageInput2} /> */}
                                  <input accept="image/*" capture="camera" type="file" id="step3Image2" style={{ display: 'none' }} onChange={this.handleChangeStep2Image2} ref={this.faultImageInput2} />
                                
                                  {this.state.inputFile2 && this.state.inputFile2.length > 0 ?
                                    <div className="test-div"><img key={2} src={this.state.inputFile2} width={"100%;"} id='imgtag2' alt={`Image of fault ${2 + 1}   `} role="presentation" />
                                      <button type="button" className="icon-top-left" aria-label="Close" onClick={this.handleremoveImage2}>
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                  : ''}
                                </div>   
                                
                                {this.state.inputFile2 && this.state.inputFile2.length > 0 ?
                                <button type="submit" className="btn btn-default btn-block" onClick={this.handleSubmit}>Submit</button>:''}
                                <button type="submit" className="btn btn-block" style={{ color: '#367bbc', 'font-weight':"bold" }} onClick={this.handleClose}>Cancel</button>
                              </div>
                                :               
                              <div>  
                                {this.state.successMsg ? 
                                  <div>
                                    <img src={logo} alt="" className="App-logo" />
                                    <div class="alert alert-info" role="alert">
                                      {`Notification Sent. OCR requested for Transaction id ${getScrollYPositionValue && getScrollYPositionValue.id}`}
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                      <Link className="navbar-brand" to={"/"} onClick={() => { this.handleCancel() }}>Home</Link>
                                    </div>
                                  </div>
                                : ''}                                  
                              </div>
                            }
                              
                          
                          </div>
                            
                            
                            }
                </div>}
            </div>
  }</div>
  </div>
        
    )
  }
}


const mapStateToProps = state => {
  return {
    getScrollYPositionValue: state.workOrderReducer && state.workOrderReducer.getScrollYPositionValue,
    blobList:state.blobList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNotification: () => dispatch(getNotification()),
    storeScrollYPosition: payload => dispatch(storeScrollYPosition(payload)),
  }
}


Home = connect(mapStateToProps, mapDispatchToProps)(Home)


export default Home