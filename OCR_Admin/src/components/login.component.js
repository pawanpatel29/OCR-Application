import React, { Component } from "react";
import equal from 'fast-deep-equal'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getNotification, storeScrollYPosition} from '../actions/workOrderActions'
  


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          locationErrorTag: false,
          imgErr: false,
          show: false,
          banner: false,
          notificationOpen1: true,
          notificationOpen2: true,
          notItems: [],
          selectedId: '',
          inputFile: [],
          successMsg: false,
          isOpen: false,
          ocrComponent: false,
          listItems:[]
        }
        //this.handleSubmit = this.handleSubmit.bind(this)
        //this.cancelForm = this.cancelForm.bind(this)
        //this.handleChangeStep2Image = this.handleChangeStep2Image.bind(this)
        //this.textInput = React.createRef()
        this.faultImageInput = React.createRef()
        //this.focusTextInput = this.focusTextInput.bind(this)
        //this.focusImageInput = this.focusImageInput.bind(this)
        // this.removeImage = this.removeImage.bind(this)
        // this.backToDashboard = this.backToDashboard.bind(this)
    }

    componentDidMount()
    {
     this.updateUser();
    }

    componentDidUpdate(prevProps){
      if(!equal(this.props.workOrderData, prevProps.workOrderData)){
        this.updateUser();
      }
    }

    updateUser(){
      this.props.getNotification().then(data=>{
        console.log("1234567dhjfghgjhdjfghjdfhgjkdk", data.data)
        const temp = data && data.payload ?  data.payload : [];
        this.setState({
          listItems: temp,
        })
      })
    }
    


    backToDashboard(data){
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
    

      focusImageInput = () => {
            this.faultImageInput.current.click()
          }
    
        handleChangeStep2Image = ({target}) => {
          if (target && target.type === "file") {
            if (this.checkMimeType(target)) {
              if (target.files[0]) {
                this.getImagePreviewUrl(target.files[0])
                //this.setImageStep2(target.files[0])
              }
            }
            target.value = ''
          }
        }
    
        getImagePreviewUrl(file) {
              let reader = new FileReader()
              reader.onloadend = () => {
                this.setState({
                    inputFile: reader.result
                })
              }
              reader.readAsDataURL(file)
            }
    
           checkMimeType = (target) => {
              //getting file object
              let files = target.files
              //define message container
              let err = ''
              // list allow mime type
              const types = ['image/jpg', 'image/jpeg']
              // loop access array
              for (var x = 0; x < files.length; x++) {
                // compare file type find doesn't matach
                if (types.every(type => files[x].type !== type)) {
                  // create error message and assign to container
                  err +=
                    files[x].type +
                    ' is not a supported format. Only .jpg and .jpeg is allowed'
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



      handleSubmit() {
          if(this.state.inputFile.length >1){
            this.setState({
                show : true,
                inputFile: [],
                successMsg : true
              })
          }
      }

      removeImage() {
        this.setState({
            inputFile: ''
          })
      }

      handleBack(){
        this.setState({
            successMsg: false
        })
    }

    handleImageChange(e) {
      console.log("11",e)
     // e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }

    showAlert = ()=>{
      this.setState({ isOpen: true })
    }

    showOCR = (Id)=>{
      // debugger;
       var obj = {
         show: true,
         id: Id
       }
     this.props.storeScrollYPosition(obj)
    
    }
    

    render() {
      const {getScrollYPositionValue} = this.props
        const {successMsg, listItems, selectedId} = this.state
        console.log("state",this.state)
        return (
          <div>
          
                {/* <h3>OCR Trigger</h3> */}

                <div className="container float" onClick={() =>
                  this.showAlert()
                }>
                  <div className="division">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg>
            <sup style={{color:'red'}}>{listItems && listItems.length > 0 ? listItems.length : ''}</sup>
            </div>
           </div> 
     
      
       <div className="auth-wrapper">
        {this.state.isOpen && getScrollYPositionValue && getScrollYPositionValue.show == false ? 
     <div className="parent-div">
       {listItems && listItems.length > 0 ?
            listItems
              .map(item => (
     <div className="alert alert-warning alert-dismissible fade show" role="alert" onClick={()=>this.showOCR(item.refId)}>
     <strong>{`Transaction Id: ${item.refId}`}</strong> 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true"></span>
  </button>
</div> 
              )) : ''}
     </div> : '' }
     </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    assetData: state.cameraScanReducer && state.cameraScanReducer.getAssetData,
    step2Data: state.workOrderReducer && state.workOrderReducer.step2Data,
    step2ImageData: state.workOrderReducer && state.workOrderReducer.step2ImageData,
    storeWithoutAssetData: state.workOrderReducer && state.workOrderReducer.storeWithoutAssetData,
    getWorkOrderType: state.workOrderReducer && state.workOrderReducer.getWorkOrderType,
    step2ImageBase64: state.workOrderReducer && state.workOrderReducer.step2ImageBase64,
    step3ImageBase64: state.workOrderReducer && state.workOrderReducer.step3ImageBase64,
    workOrderScriptData: state.workOrderReducer && state.workOrderReducer.workOrderScriptData,
    userData: state.userActionReducer && state.userActionReducer.userData,
    step3ImageData: state.workOrderReducer && state.workOrderReducer.step3ImageData,
    getScrollYPositionValue:
    state.workOrderReducer && state.workOrderReducer.getScrollYPositionValue,
    workOrderData: state.workOrderReducer && state.workOrderReducer.workOrderData,
  }
}


const mapDispatchToProps = dispatch => {
    return {
    getNotification:()=> dispatch(getNotification()),
    storeScrollYPosition: payload=> dispatch(storeScrollYPosition(payload)),
    }
  }

Login = connect(mapStateToProps, mapDispatchToProps)(Login)
    
export default Login
