import axios from "axios";

import {
  ALL_VENTAS_REQUEST,
  ALL_VENTAS_SUCCESS,
  ALL_VENTAS_FAIL,
  CLEAR_ERRORS
} from '../constants/ventasConstants';

export const getVentas = async () => {
  const response = await axios.get("api/ventas")
  const data = await response.data.ventas
  return data
}

// export const getVentas = () => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_VENTAS_REQUEST })

//     const { data } = await axios.get("api/ventas")
//     console.log("Primer dispatch ventas request")

//     dispatch({
//       type: ALL_VENTAS_SUCCESS,
//       payload: data
//     })
//     console.log("Segundo dispatch ventas success")
//   } catch (error) {
//     dispatch({
//       type: ALL_VENTAS_FAIL,
//       payload: error.response.data.message
//     })
//   }
// }

// // Detail by product
// export const getProductDetails = (id) => async(dispatch)=>{
//   try {
//       dispatch({type: PRODUCT_DETAILS_REQUEST})

//       const {data} = await axios.get(`/api/product/${id}`)

//       dispatch({
//           type:PRODUCT_DETAILS_SUCCESS,
//           payload: data.product
//       })
//   }catch (error){
//       dispatch({
//           type:PRODUCT_DETAILS_FAIL,
//           payload: error.response.data.message
//       })
//   }
// }

// Clear error in dispatch

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}