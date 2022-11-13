import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST })

    // let link = `/api/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`

    const { data } = await axios.get("api/products")

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message
    })
  }
}

// Detail by product
export const getProductDetails = (id) => async(dispatch)=>{
  try {
      dispatch({type: PRODUCT_DETAILS_REQUEST})

      const {data} = await axios.get(`/api/product/${id}`)

      dispatch({
          type:PRODUCT_DETAILS_SUCCESS,
          payload: data.product
      })
  }catch (error){
      dispatch({
          type:PRODUCT_DETAILS_FAIL,
          payload: error.response.data.message
      })
  }
}

// Clear error in dispatch

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}