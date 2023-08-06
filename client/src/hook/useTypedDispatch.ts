import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"

const actions = {}

export const useTypedDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
