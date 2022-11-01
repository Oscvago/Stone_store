import { ALL_PRODUCTS_REQUEST, 
<<<<<<< HEAD
  ALL_PRODUCTS_SUCCESS, 
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS} from "../constants/productConstants";

  //Status of all products --> Reducer
export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: []
      };

    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        quantity: action.payload.quantity
      };

    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }

    default:
      return state;
  }
}

//Details by product --> Reducer
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {

      case PRODUCT_DETAILS_REQUEST:
          return {
              ...state,
              loading: true
          }

      case PRODUCT_DETAILS_SUCCESS:
          return {
              loading: false,
              product: action.payload
          }

      case PRODUCT_DETAILS_FAIL:
          return {
              ...state,
              error: action.payload
          }

      case CLEAR_ERRORS:
          return {
              ...state,
              error: null
          }

      default:
          return state
  }
}


=======
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL, 
    CLEAR_ERRORS } from "../constants/productConstants";

export const productsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case ALL_PRODUCTS_REQUEST:  
            return{
                loading: true,
                products:[] 
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }

        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS: 
            return {
                ...state,
                error:null
            }
        

        default:
            return state;
    }
}
>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
