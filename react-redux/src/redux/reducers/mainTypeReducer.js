import {
  REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS,
  REQUEST_FOR_GET_MAINTYPE_SUCCESS,
  REQUEST_FOR_GET_MAINTYPE_ERROR,
  REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS,
  REQUEST_FOR_ADD_MAINTYPE_SUCCESS,
  REQUEST_FOR_ADD_MAINTYPE_ERROR,
} from '../actions/mainTypeAction';

const initialState = {
  getMainTypeInProgress: false,
  mainTypes: null,
  getMainTypeError: false,
  addMainTypeInProcess: false,
  addMainTypeError: null,
};

const getMainTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS: {
      return {
        ...state,
        getMainTypeInProgress: true,
        mainTypes: null,
        getMainTypeError: false,
        addMainTypeInProcess: false,
        addMainTypeError: null,
      };
    }
    case REQUEST_FOR_GET_MAINTYPE_SUCCESS: {
      return {
        ...state,
        getMainTypeInProgress: false,
        mainTypes: action.data,
        getMainTypeError: false,
      };
    }
    case REQUEST_FOR_GET_MAINTYPE_ERROR: {
      return {
        ...state,
        getMainTypeInProgress: false,
        mainTypes: null,
        getMainTypeError: action.data,


      };
    }
    case REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS: {
      return {
        ...state,
        addMainTypeInProcess: true,
        addMainTypeError: null,
      };
    }
    case REQUEST_FOR_ADD_MAINTYPE_SUCCESS: {
      return {
        ...state,
        addMainTypeInProcess: false,
        addMainTypeError: null,
        //TODO add new data in mainType field
      };
    }
    case REQUEST_FOR_ADD_MAINTYPE_ERROR: {
      return {
        ...state,
        addMainTypeInProcess: false,
        addMainTypeError: action.data,
      };
    }

    default:
      return state;
  }
};

export default getMainTypeReducer;
