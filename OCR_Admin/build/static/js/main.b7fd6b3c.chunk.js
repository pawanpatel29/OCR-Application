(window["webpackJsonpreact-login-signup-ui-template"]=window["webpackJsonpreact-login-signup-ui-template"]||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/logo.49c078ba.svg"},139:function(e,t,a){e.exports=a(230)},144:function(e,t,a){},146:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(22),s=a.n(o),i=a(40),c=(a(144),a(129)),l=(a(145),a(146),a(46)),u=a(45),p=a(49),d=a(35);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={apiErrorCode:"",workOrderData:"",errorData:"",step1Data:"",step1ProblemData:"",step2Data:"",step2ImageData:[],step3Data:"",step3ImageData:[],imageUploadedData:"",removeImageData:"",currentUploadStatus:!1,workOrderItems:[],workOrderDetails:[],workOrderHistoryDetails:[],fixedWorkOrderDetails:[],assetCategoriesList:"",assetSubCategoriesList:"",assetLocationsList:"",notificationData:"",workOrderScriptData:"",questionnaireData:"",workOrderReasons:[],promptCheckFlag:!1,pageFilterType:"Open",currentPageFlag:1,currentDuplicatePageFlag:"",reviewPageFilterType:"ReviewFix",currentReviewPageFlag:1,storeUserAccessFlag:"",storeWithoutAssetData:{},searchAssetData:[],problemDescriptionData:"",getWorkOrderType:"",getScrollYPositionValue:{show:!1,id:""},assetListPageFlag:!1,storeSearchAssetData:{},storeCheckAssetData:"",storeAssetListPage:1,step2ImageBase64:[],step3ImageBase64:[],getHelpDeskData:{},blobList:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_NOTIFICATION_REDUCER":return h({},e,{workOrderData:t.payload});case"STORE_SCROLLY_POSITION":return h({},e,{getScrollYPositionValue:t.payload});case"ERROR":return h({},e,{errorData:t.payload});default:return e}},b=Object(p.c)({workOrderReducer:f}),v=a(26),O=a(27),w=a(29),k=a(28),y=a(30),E=a(74),I=a.n(E),S=a(20),D=a.n(S),R=a(31),C=a(63),j=a.n(C),N="https://ocrdemoapi2.azurewebsites.net/api/values",F=(localStorage.getItem("id_token"),{"Content-Type":"application/json"}),x=function(){return function(){var e=Object(R.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(N),{headers:F});case 2:return a=e.sent,e.prev=3,e.abrupt("return",t({type:"STORE_NOTIFICATION_REDUCER",payload:a.data}));case 7:return e.prev=7,e.t0=e.catch(3),e.abrupt("return",t({type:"ERROR",payload:a}));case 10:case"end":return e.stop()}}),e,null,[[3,7]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return{type:"STORE_SCROLLY_POSITION",payload:e}},T=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).focusImageInput=function(){a.faultImageInput.current.click()},a.handleChangeStep2Image=function(e){var t=e.target;t&&"file"===t.type&&(a.checkMimeType(t)&&t.files[0]&&a.getImagePreviewUrl(t.files[0]),t.value="")},a.checkMimeType=function(e){for(var t=e.files,a="",n=["image/jpg","image/jpeg"],r=0;r<t.length;r++)n.every((function(e){return t[r].type!==e}))&&(a+=t[r].type+" is not a supported format. Only .jpg and .jpeg is allowed");return""===a||(e.value=null,alert(a),console.log(a),!1)},a.showAlert=function(){a.setState({isOpen:!0})},a.showOCR=function(e){var t={show:!0,id:e};a.props.storeScrollYPosition(t)},a.state={locationErrorTag:!1,imgErr:!1,show:!1,banner:!1,notificationOpen1:!0,notificationOpen2:!0,notItems:[],selectedId:"",inputFile:[],successMsg:!1,isOpen:!1,ocrComponent:!1,listItems:[]},a.faultImageInput=r.a.createRef(),a}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.updateUser()}},{key:"componentDidUpdate",value:function(e){I()(this.props.workOrderData,e.workOrderData)||this.updateUser()}},{key:"updateUser",value:function(){var e=this;this.props.getNotification().then((function(t){console.log("1234567dhjfghgjhdjfghjdfhgjkdk",t.data);var a=t&&t.payload?t.payload:[];e.setState({listItems:a})}))}},{key:"backToDashboard",value:function(e){var t=[],a=this.state.notItems;a&&a.length>0&&(a.map((function(e){e.show=!1,t.push(e)})),this.setState({notItems:t,selectedId:e})),this.setState({banner:!0,show:!1,notificationOpen1:!1,notificationOpen2:!1})}},{key:"getImagePreviewUrl",value:function(e){var t=this,a=new FileReader;a.onloadend=function(){t.setState({inputFile:a.result})},a.readAsDataURL(e)}},{key:"handleSubmit",value:function(){this.state.inputFile.length>1&&this.setState({show:!0,inputFile:[],successMsg:!0})}},{key:"removeImage",value:function(){this.setState({inputFile:""})}},{key:"handleBack",value:function(){this.setState({successMsg:!1})}},{key:"handleImageChange",value:function(e){var t=this;console.log("11",e);var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=this.props.getScrollYPositionValue,a=this.state,n=(a.successMsg,a.listItems);a.selectedId;return console.log("state",this.state),r.a.createElement("div",null,r.a.createElement("div",{className:"container float",onClick:function(){return e.showAlert()}},r.a.createElement("div",{className:"division"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-bell-fill",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"})),r.a.createElement("sup",null,n&&n.length>0?n.length:""))),r.a.createElement("div",{className:"auth-wrapper"},this.state.isOpen&&t&&0==t.show?r.a.createElement("div",{className:"parent-div"},n&&n.length>0?n.map((function(t){return r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",onClick:function(){return e.showOCR(t.refId)}},"Attend the ",r.a.createElement("strong",null,"Transaction Id: ".concat(t.refId)),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})):""):""))}}]),t}(n.Component),_=T=Object(u.b)((function(e){return{assetData:e.cameraScanReducer&&e.cameraScanReducer.getAssetData,step2Data:e.workOrderReducer&&e.workOrderReducer.step2Data,step2ImageData:e.workOrderReducer&&e.workOrderReducer.step2ImageData,storeWithoutAssetData:e.workOrderReducer&&e.workOrderReducer.storeWithoutAssetData,getWorkOrderType:e.workOrderReducer&&e.workOrderReducer.getWorkOrderType,step2ImageBase64:e.workOrderReducer&&e.workOrderReducer.step2ImageBase64,step3ImageBase64:e.workOrderReducer&&e.workOrderReducer.step3ImageBase64,workOrderScriptData:e.workOrderReducer&&e.workOrderReducer.workOrderScriptData,userData:e.userActionReducer&&e.userActionReducer.userData,step3ImageData:e.workOrderReducer&&e.workOrderReducer.step3ImageData,getScrollYPositionValue:e.workOrderReducer&&e.workOrderReducer.getScrollYPositionValue,workOrderData:e.workOrderReducer&&e.workOrderReducer.workOrderData}}),(function(e){return{getNotification:function(){return e(x())},storeScrollYPosition:function(t){return e(P(t))}}}))(T),B=a(68),L=a(43),U=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).focusImageInput=function(){a.faultImageInput.current.click()},a.handleChangeStep2Image=function(e){var t=e.target;t&&"file"===t.type&&(a.checkMimeType(t)&&t.files[0]&&a.getImagePreviewUrl(t.files[0]),t.value="")},a.checkMimeType=function(e){for(var t=e.files,a="",n=["image/jpg","image/jpeg"],r=0;r<t.length;r++)n.every((function(e){return t[r].type!==e}))&&(a+=t[r].type+" is not a supported format. Only .jpg and .jpeg is allowed");return""===a||(e.value=null,alert(a),console.log(a),!1)},a.state={show:!1,inputFile:[]},a.faultImageInput=r.a.createRef(),a}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.getScrollYPositionValue&&e.getScrollYPositionValue}},{key:"notify",value:function(){Object(L.b)("Wow so easy !")}},{key:"backToDashboard",value:function(e){var t=[],a=this.state.notItems;a&&a.length>0&&(a.map((function(e){e.show=!1,t.push(e)})),this.setState({notItems:t,selectedId:e})),this.setState({banner:!0,show:!1,notificationOpen1:!1,notificationOpen2:!1})}},{key:"setImageStep2",value:function(e){if(e){var t=[].concat(Object(B.a)(this.props.step2ImageData),[e]).filter((function(e){return void 0!==e&&""!==e}));this.props.storeStep2Images(t)}}},{key:"getImagePreviewUrl",value:function(e){var t=this,a=new FileReader;a.onloadend=function(){t.setState({inputFile:a.result})},a.readAsDataURL(e)}},{key:"handleSubmit",value:function(){this.state.inputFile.length>1&&this.setState({show:!0,inputFile:[],successMsg:!0})}},{key:"render",value:function(){console.log("this.state.show",this.state.inputFile.length);var e=this.props.getScrollYPositionValue;return console.log("getScrollYPositionValue",this.props),e?r.a.createElement("div",null,r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement("h3",null,"OCR Trigger"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Transaction Number"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Transaction Number"})),r.a.createElement("div",{className:"form-group"},this.state.inputFile&&0==this.state.inputFile.length?r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.focusImageInput},"Capture Photo  "):"",r.a.createElement("input",{type:"file",id:"step3Image",style:{display:"none"},onChange:this.handleChangeStep2Image,accept:".jpg,\xa0.jpeg",ref:this.faultImageInput}),this.state.inputFile&&this.state.inputFile.length>0?r.a.createElement("div",null,r.a.createElement("img",{key:1,src:this.state.inputFile,id:"imgtag",alt:"Image of fault ".concat(2,"   "),role:"presentation"})):""),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleSubmit},"Submit"))))):""}}]),t}(r.a.Component),A=U=Object(u.b)((function(e){return{assetData:e.cameraScanReducer&&e.cameraScanReducer.getAssetData,step2Data:e.workOrderReducer&&e.workOrderReducer.step2Data,step2ImageData:e.workOrderReducer&&e.workOrderReducer.step2ImageData,storeWithoutAssetData:e.workOrderReducer&&e.workOrderReducer.storeWithoutAssetData,getWorkOrderType:e.workOrderReducer&&e.workOrderReducer.getWorkOrderType,step2ImageBase64:e.workOrderReducer&&e.workOrderReducer.step2ImageBase64,step3ImageBase64:e.workOrderReducer&&e.workOrderReducer.step3ImageBase64,workOrderScriptData:e.workOrderReducer&&e.workOrderReducer.workOrderScriptData,userData:e.userActionReducer&&e.userActionReducer.userData,step3ImageData:e.workOrderReducer&&e.workOrderReducer.step3ImageData,getScrollYPositionValue:e.workOrderReducer&&e.workOrderReducer.getScrollYPositionValue}}),(function(e){return{getNotification:function(){return e(x())},storeScrollYPosition:function(){return e(P())}}}))(U),Y=a(115),V=a(53),M=(a(96),a(116)),W=a.n(M),z=(a(169),a(61)),X=a(64),H=a(245),q=Object({NODE_ENV:"production",PUBLIC_URL:""}).storagesastoken||"?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-03-31T15:22:13Z&st=2021-01-01T07:22:13Z&spr=https&sig=FVhtgV8zmhwD6I%2BCUDURS3ghXmP8Q%2FY%2FaP%2BXoW0ShrU%3D",Z=Object({NODE_ENV:"production",PUBLIC_URL:""}).storageresourcename||"ocrfilesharestorageact01",J=function(){var e=Object(R.a)(D.a.mark((function e(t){var a,n,r,o,s,i,c,l;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=!0,r=!1,e.prev=3,s=Object(X.a)(t.listBlobsFlat());case 5:return e.next=7,s.next();case 7:return i=e.sent,n=i.done,e.next=11,i.value;case 11:if(c=e.sent,n){e.next=18;break}l=c,a.push("https://".concat(Z,".blob.core.windows.net/").concat("ocrappinputimage01","/").concat(l.name));case 15:n=!0,e.next=5;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),r=!0,o=e.t0;case 24:if(e.prev=24,e.prev=25,n||null==s.return){e.next=29;break}return e.next=29,s.return();case 29:if(e.prev=29,!r){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(24);case 34:return e.abrupt("return",a);case 35:case"end":return e.stop()}}),e,null,[[3,20,24,34],[25,,29,33]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(D.a.mark((function e(t,a){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getBlockBlobClient(a.name),r={blobHTTPHeaders:{blobContentType:a.type}},e.next=4,n.uploadBrowserData(a,r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K=function(){var e=Object(R.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return a=new H.a("https://".concat(Z,".blob.core.windows.net/?").concat(q)),n=a.getContainerClient("ocrappinputimage01"),e.next=6,n.createIfNotExists({access:"container"});case 6:return e.next=8,Q(n,t);case 8:return e.abrupt("return",J(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(R.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return a=new H.a("https://".concat(Z,".blob.core.windows.net/?").concat(q)),n=a.getContainerClient("ocrreasonimage"),e.next=6,n.createIfNotExists({access:"container"});case 6:return e.next=8,Q(n,t);case 8:return e.abrupt("return",J(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=K,ee=a(124),te=(a(211),a(55)),ae=a.n(te),ne=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).onDetected=function(e){ae.a.stop(),a.props._onDetected(e)},a}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){ae.a.init(Object(d.a)({inputStream:{name:"Live",type:"LiveStream",numberOfWorkers:navigator.hardwareConcurrency,target:document.querySelector("#Barcode"),constraints:{width:1280,height:720,facingMode:"environment"}},locator:{patchSize:"large",halfSample:!0},numOfWorkers:4,decoder:{readers:["code_39_reader"]},locate:!0,multiple:!1},"locator",{halfSample:!0,patchSize:"large",debug:{showCanvas:!1,showPatches:!1,showFoundPatches:!1,showSkeleton:!1,showLabels:!1,showPatchLabels:!1,showRemainingPatchLabels:!1,boxFromPatches:{showTransformed:!1,showTransformedBox:!1,showBB:!1}}}),(function(e){if(e)return console.log(e);ae.a.start()})),ae.a.onDetected(this._onDetected)}},{key:"render",value:function(){return r.a.createElement("div",null,"hello world")}}]),t}(r.a.Component),re=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e)))._scan=function(){a.setState({scanning:!a.state.scanning})},a._onDetected=function(e){a.setState({scanning:!a.state.scanning,isDetected:!0,result:a.state.result.concat([e])})},a.state={scanning:!0,result:[],isDetected:!1},a}return Object(y.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.state.scanning;return r.a.createElement("div",null,e?r.a.createElement(ne,{_onDetected:this._onDetected}):"")}}]),t}(r.a.Component),oe="",se="";L.b.configure();var ie=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).onFileChange1=function(e){var t=e,n=a.props.getScrollYPositionValue?a.props.getScrollYPositionValue.id:"",r="".concat(n,"_Reason.").concat(e.name.split(".").pop());t=new File([t],r,{type:t.type}),console.log("file",t),oe=t,a.setState({fileSelected:t})},a.onFileChange2=function(e){console.log("file2 selec");var t=e,n=a.props.getScrollYPositionValue?a.props.getScrollYPositionValue.id:"",r="".concat(n,"_OCR_image.").concat(e.name.split(".").pop());t=new File([t],r,{type:t.type}),console.log("file",t),se=t,a.setState({fileSelected2:t})},a.focusImageInput1=function(){a.faultImageInput.current.click()},a.focusImageInput2=function(){a.faultImageInput2.current.click()},a.handleChangeStep2Image1=function(e){var t=e.target;t&&"file"===t.type&&(a.checkMimeType(t)&&t.files[0]&&(a.getImagePreviewUrl1(t.files[0]),a.onFileChange1(t.files[0])),t.value="")},a.handleChangeStep2Image2=function(e){var t=e.target;t&&"file"===t.type&&(a.checkMimeType(t)&&t.files[0]&&(a.getImagePreviewUrl2(t.files[0]),a.onFileChange2(t.files[0])),t.value="")},a.checkMimeType=function(e){for(var t=e.files,a="",n=["image/jpg","image/jpeg","image/png"],r=0;r<t.length;r++)n.every((function(e){return t[r].type!==e}))&&(a+=t[r].type+" is not a supported format. Only .jpg, .jpeg, and .png is allowed");return""===a||(e.value=null,alert(a),console.log(a),!1)},a.handleClose=function(){oe="",se="";a.setState({inputFile:[],inputFile2:[],next:!1}),a.props.storeScrollYPosition({show:!1,id:""})},a.handleCancel=function(){oe="",se="";a.setState({successMsg:!1,next:!1,inputFile:[],inputFile2:[]}),a.props.storeScrollYPosition({show:!1,id:""}),a.updateUser()},a.handleNext=function(){void 0!==a.state.inputFile&&0==a.state.inputFile.length?Object(ee.confirmAlert)({message:"Are you sure you want to skip?",buttons:[{label:"Yes",onClick:function(){return a.setState({next:!0})}},{label:"No "}]}):a.setState({next:!0})},a.handleBack=function(){a.setState({next:!1})},a.handleScan=function(e){a.setState({result:e})},a.handleError=function(e){console.error(e)},a.handleSubmit=Object(R.a)(D.a.mark((function e(){var t,n,r,o,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.getScrollYPositionValue,n=t.id,!(void 0!==a.state.inputFile2&&a.state.inputFile2.length>1)){e.next=17;break}if(r="https://ocrdemoapi2.azurewebsites.net/api/values?RefId=".concat(n),o={"content-Type":"application/json"},j.a.delete("".concat(r),{headers:o}).then((function(e){console.log("data",e),a.props.getNotification().then((function(e){}))})),console.log("aaaaaaaaaaaaf",oe),console.log("aaaaaaaaaaaaf",se),!(a.state.inputFile&&a.state.inputFile.length>0)){e.next=12;break}return e.next=11,$(oe);case 11:e.sent;case 12:return e.next=14,G(se);case 14:s=e.sent,a.setState({show:!0,inputFile:[],inputFile2:[],successMsg:!0,blobList:[s]}),console.log("here it is"+a.state.blobList);case 17:case"end":return e.stop()}}),e)}))),a.handleremoveImage1=function(){a.setState({inputFile:[]})},a.handleremoveImage2=function(){a.setState({inputFile2:[]})},a.notify=function(){Object(L.b)("Kuch Bhi",{position:L.b.POSITION.TOP_CENTER})},a.state={show:!1,inputFile:[],inputFile2:[],listItems:[],actualFile:"",actualFile2:"",blobList:[],next:!1,fileSelected:null,fileSelected2:null,result:"No result"},a.faultImageInput=r.a.createRef(),a.faultImageInput2=r.a.createRef(),a.handleScan=a.handleScan.bind(Object(V.a)(a)),a}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.updateUser()}},{key:"updateUser",value:function(){var e=this;this.props.getNotification().then((function(t){console.log("1234567",t);var a=t&&t.payload?t.payload:[];e.setState({listItems:a})}))}},{key:"notify",value:function(){Object(L.b)("Wow so easy !")}},{key:"backToDashboard",value:function(e){var t=[],a=this.state.notItems;a&&a.length>0&&(a.map((function(e){e.show=!1,t.push(e)})),this.setState({notItems:t,selectedId:e})),this.setState({banner:!0,show:!1,notificationOpen1:!1,notificationOpen2:!1})}},{key:"setImageStep2",value:function(e){if(e){var t=[].concat(Object(B.a)(this.props.step2ImageData),[e]).filter((function(e){return void 0!==e&&""!==e}));this.props.storeStep2Images(t)}}},{key:"getImagePreviewUrl1",value:function(e){var t=this,a=new FileReader;a.onloadend=function(){t.setState({inputFile:a.result,actualFile:e})},a.readAsDataURL(e)}},{key:"getImagePreviewUrl2",value:function(e){var t=this,a=new FileReader;a.onloadend=function(){t.setState({inputFile2:a.result,actualFile2:e})},a.readAsDataURL(e)}},{key:"render",value:function(){var e=this,t=this.props.getScrollYPositionValue,a=this.state.listItems;r.a.createElement("div",{className:"awoinfo-container"},r.a.createElement("div",{className:"margin-top-small awoinfo-inner-container ln-u-padding-sides*2 ln-u-padding-bottom*4"},r.a.createElement("p",{className:"text-align-center"},"Thank you for attending Transaction id :".concat(1234567,". Details are now captured"))),r.a.createElement(i.c,{onClick:this.cancelForm,to:"/",activeClassName:"is-active activeTab"},"Open Notifications")," ");return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},t&&0==t.show?r.a.createElement("div",null,r.a.createElement(re,null),a&&a.length>0?r.a.createElement("h3",null,"You have ".concat(a.length," open transactions to attend")):"",a&&0==a.length?r.a.createElement("div",null,r.a.createElement("h3",null,"You don't have any transactions to look")):""):r.a.createElement("div",null,this.state.next?r.a.createElement("div",null," ",this.state.next?r.a.createElement("div",null," ",r.a.createElement("h3",null,"OCR Trigger"),this.state.successMsg?r.a.createElement("div",null,this.state.successMsg?r.a.createElement("div",null,r.a.createElement("img",{src:W.a,alt:"",className:"App-logo"}),r.a.createElement("div",{class:"alert alert-success",role:"alert"},"Notification Sent. OCR requested for Transaction id ".concat(t&&t.id)),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(i.b,{className:"navbar-brand",to:"/",onClick:function(){e.handleCancel()}},"Home"))):""):r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Transaction Number"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Transaction Number",value:t?t.id:"",disabled:!0})),r.a.createElement("div",{className:"form-group"},this.state.inputFile2&&0==this.state.inputFile2.length?r.a.createElement("button",Object(d.a)({className:"btn btn-primary btn-block",onClick:this.onFileChange2},"onClick",this.focusImageInput2),"Capture ",r.a.createElement("br",null)," Barcode And Supplier Details"):"",r.a.createElement("input",{type:"file",id:"step3Image2",style:{display:"none"},onChange:this.handleChangeStep2Image2,accept:".jpg,\xa0.jpeg",ref:this.faultImageInput2}),this.state.inputFile2&&this.state.inputFile2.length>0?r.a.createElement("div",{className:"test-div"},r.a.createElement("img",{key:2,src:this.state.inputFile2,width:"100%;",id:"imgtag2",alt:"Image of fault ".concat(3,"   "),role:"presentation"}),r.a.createElement("button",{type:"button",className:"icon-top-left","aria-label":"Close",onClick:this.handleremoveImage2},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):""),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleSubmit},"Submit"),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleClose},"Cancel"))):""):r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Transaction Number"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Transaction Number",value:t?t.id:"",disabled:!0})),r.a.createElement("div",{className:"form-group"},this.state.inputFile&&0==this.state.inputFile.length?r.a.createElement("button",Object(d.a)({className:"btn btn-primary btn-block",onClick:this.onFileChange1},"onClick",this.focusImageInput1),"Capture ",r.a.createElement("br",null)," Problem Area"):"",r.a.createElement("input",{type:"file",id:"step3Image",style:{display:"none"},onChange:this.handleChangeStep2Image1,accept:".jpg,\xa0.jpeg",ref:this.faultImageInput}),this.state.inputFile&&this.state.inputFile.length>0?r.a.createElement("div",{className:"test-div"},r.a.createElement("img",{key:1,src:this.state.inputFile,width:"100%;",id:"imgtag",alt:"Image of fault ".concat(2,"   "),role:"presentation"}),r.a.createElement("button",{type:"button",className:"icon-top-left","aria-label":"Close",onClick:this.handleremoveImage1},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):""),r.a.createElement("button",Object(d.a)({type:"submit",className:"btn btn-primary btn-block",onClick:this.notify},"onClick",this.handleNext),"Next"),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleClose},"Cancel")))))}}]),t}(r.a.Component),ce=ie=Object(u.b)((function(e){return{getScrollYPositionValue:e.workOrderReducer&&e.workOrderReducer.getScrollYPositionValue,blobList:e.blobList}}),(function(e){return{getNotification:function(){return e(x())},storeScrollYPosition:function(t){return e(P(t))}}}))(ie),le=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).getBlobsInContainer=Object(R.a)(D.a.mark((function e(){var t,n,r,o,s,i,c,l,u,p,d,m,h,g,f,b,v,O;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return(i=Object(R.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FileReader,e.abrupt("return",new Promise((function(e,n){a.onloadend=function(t){e(t.target.result)},a.onerror=n,a.readAsText(t)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)},s=function(e){return i.apply(this,arguments)},t=Object({NODE_ENV:"production",PUBLIC_URL:""}).storagesastoken||"sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-03-31T15:22:13Z&st=2021-01-01T07:22:13Z&spr=https&sig=FVhtgV8zmhwD6I%2BCUDURS3ghXmP8Q%2FY%2FaP%2BXoW0ShrU%3D","ocrappinputimage01",n=Object({NODE_ENV:"production",PUBLIC_URL:""}).storageresourcename||"ocrfilesharestorageact01","ocroutput01",r=new H.a("https://".concat(n,".blob.core.windows.net/?").concat(t)),o=r.getContainerClient("ocroutput01"),console.log("test"+o),c=[],e.t0=console,e.next=13,o.listBlobsFlat();case 13:e.t1=e.sent,e.t2="A"+e.t1,e.t0.log.call(e.t0,e.t2),l=1,u=!0,p=!1,e.prev=19,m=Object(X.a)(o.listBlobsFlat());case 21:return e.next=23,m.next();case 23:return h=e.sent,u=h.done,e.next=27,h.value;case 27:if(g=e.sent,u){e.next=47;break}return f=g,console.log("Blob ".concat(l++,": ").concat(f.name)),b=o.getBlobClient(f.name),e.next=34,b.download();case 34:return v=e.sent,e.t3=s,e.next=38,v.blobBody;case 38:return e.t4=e.sent,e.next=41,(0,e.t3)(e.t4);case 41:O=e.sent,console.log("Downloaded blob content",O),c.push(JSON.parse(O));case 44:u=!0,e.next=21;break;case 47:e.next=53;break;case 49:e.prev=49,e.t5=e.catch(19),p=!0,d=e.t5;case 53:if(e.prev=53,e.prev=54,u||null==m.return){e.next=58;break}return e.next=58,m.return();case 58:if(e.prev=58,!p){e.next=61;break}throw d;case 61:return e.finish(58);case 62:return e.finish(53);case 63:a.setState({blobList:c}),console.log("c"+a.state.blobList);case 66:case"end":return e.stop()}}),e,null,[[19,49,53,63],[54,,58,62]])}))),a.state={blobList:[],returnedBlobs:[]},a}return Object(y.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.getBlobsInContainer()}},{key:"render",value:function(){var e;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("button",{className:"btn btn-success",style:{marginLeft:"auto",marginRight:"20px",marginTop:"20px"},onClick:this.getBlobsInContainer},"Refresh")),r.a.createElement("table",(e={className:"table"},Object(d.a)(e,"className","styled-table"),Object(d.a)(e,"border",""),e),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction ID"),r.a.createElement("th",null,"Image ID"),r.a.createElement("th",null,"Supplier Code"),r.a.createElement("th",null,"Transaction Date and Time")),this.state.blobList&&this.state.blobList.map((function(e){return r.a.createElement("tr",{className:"active-row",key:e.transaction_id},r.a.createElement("td",null,e.transaction_id),r.a.createElement("td",null,e.image_id),r.a.createElement("td",null,e.supplier_code),r.a.createElement("td",null,e.transaction_date_time))})))))}}]),t}(r.a.Component),ue=a(127),pe=function(e){return r.a.createElement(ue.slide,e,r.a.createElement("a",{className:"menu-item",href:"/"},"Home"),r.a.createElement("a",{className:"menu-item",href:"/Results"},"Results"))},de=Object(p.d)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(p.a)(Y.a));var me=function(){var e=Object(n.useState)({isOpen:!1}),t=Object(c.a)(e,2);return t[0],t[1],r.a.createElement(u.a,{store:de},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(pe,{pageWrapId:"page-wrap",outerContainerId:"App"}),"  "),r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light top-bar"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"OCR Admin Application")),r.a.createElement(_,null))),r.a.createElement(L.a,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:ce}),r.a.createElement(l.a,{path:"/ocr_admin",component:A}),r.a.createElement(l.a,{component:le})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(128),ge={position:z.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:z.c.SCALE};s.a.render(r.a.createElement(i.a,null,r.a.createElement(z.a,Object.assign({template:he.a},ge),r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t){}},[[139,1,2]]]);
//# sourceMappingURL=main.b7fd6b3c.chunk.js.map