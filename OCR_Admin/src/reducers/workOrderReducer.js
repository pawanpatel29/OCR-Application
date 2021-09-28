import * as types from '../constants/ActionTypes';
let initialState = {
  apiErrorCode: '',
  workOrderData: '',
  errorData: '',
  step1Data: '',
  step1ProblemData: '',
  step2Data: '',
  step2ImageData: [],
  step3Data: '',
  step3ImageData: [],
  imageUploadedData: '',
  removeImageData: '',
  currentUploadStatus: false,
  workOrderItems: [],
  workOrderDetails: [],
  workOrderHistoryDetails: [],
  fixedWorkOrderDetails: [],
  assetCategoriesList: '',
  assetSubCategoriesList: '',
  assetLocationsList: '',
  notificationData: '',
  workOrderScriptData: '',
  questionnaireData: '',
  workOrderReasons: [],
  promptCheckFlag: false,
  pageFilterType: 'Open',
  currentPageFlag: 1,
  currentDuplicatePageFlag: '',
  reviewPageFilterType: 'ReviewFix',
  currentReviewPageFlag: 1,
  storeUserAccessFlag: '',
  storeWithoutAssetData: {},
  searchAssetData: [],
  problemDescriptionData: '',
  getWorkOrderType: '',
  getScrollYPositionValue: { show: false, id: ''},
  assetListPageFlag: false,
  storeSearchAssetData: {},
  storeCheckAssetData: '',
  storeAssetListPage: 1,
  step2ImageBase64: [],
  step3ImageBase64: [],
  getHelpDeskData: {},
  blobList:[],
}

const workOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_NOTIFICATION_REDUCER:
      return {
        ...state,
        workOrderData: action.payload
      } 
      case types.STORE_SCROLLY_POSITION:
      return {
        ...state,
        getScrollYPositionValue: action.payload
      } 
    case "ERROR":
      return {
        ...state,
        errorData: action.payload
      }
    default:
      return state;
  }
}



export default workOrderReducer;
