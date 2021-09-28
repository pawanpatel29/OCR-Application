import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getNotification} from '../actions/workOrderActions'
import equal from 'fast-deep-equal'
import { storeScrollYPosition} from '../actions/workOrderActions'





class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      inputFile: []
    };
    this.faultImageInput = React.createRef()
  }

  componentDidUpdate(prevProps) {

    debugger
    if(this.props.getScrollYPositionValue && prevProps.getScrollYPositionValue) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
    //   if(!equal(this.props.getScrollYPositionValue.length, prevProps.getScrollYPositionValue.length)){
    //     this.updateUser();
    //   }

    //this.props.storeScrollYPosition(true)
      
    }
  } 


     notify  (){toast("Wow so easy !");} 

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

    setImageStep2(file) {
      if (file) {
        const step2ImageItem = [...this.props.step2ImageData,file].filter(item => item !== undefined && item !== "")
        this.props.storeStep2Images(step2ImageItem)
      }
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
  
  render() {
    console.log("this.state.show",this.state.inputFile.length)
    const {getScrollYPositionValue} = this.props
    console.log("getScrollYPositionValue",this.props)
    //const ImageArray = this.props && this.props.step2ImageBase64 && this.props.step2ImageBase64.length > 0 ? this.props.step2ImageBase64.filter(data => data !== undefined) : []
    return (

      
  getScrollYPositionValue ?
     <div>
       <div className="auth-wrapper">
        <div className="auth-inner">
         <h3>OCR Trigger</h3>
                {/* {!successMsg ? */}
                <div>
                  <div className="form-group">
                    <label>Transaction Number</label>
                    <input type="text" className="form-control" placeholder="Transaction Number" />
                  </div>
                  <div className="form-group">
                    {this.state.inputFile && this.state.inputFile.length == 0 ? 
                    <button className="btn btn-primary btn-block" onClick={this.focusImageInput}>Capture Photo  </button>
                    : ''}
                  
                    <input type="file"  id="step3Image"   style={{ display: 'none' }} onChange={this.handleChangeStep2Image}  accept=".jpg, .jpeg"  ref={this.faultImageInput} />

                    {this.state.inputFile && this.state.inputFile.length > 0 ? 
                      <div><img key={1} src={this.state.inputFile} id='imgtag' alt={`Image of fault ${1 + 1}   `} role="presentation" />
                      </div>
                    : ''}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                </div>
          </div>
        </div>
      </div>
      : ''    
    
      )
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
    }
  }

const mapDispatchToProps = dispatch => {
      return {
      getNotification:()=> dispatch(getNotification()),
      storeScrollYPosition:() => dispatch(storeScrollYPosition())
      }
    }
  
    Homepage = connect(mapStateToProps, mapDispatchToProps)(Homepage)

export default Homepage
