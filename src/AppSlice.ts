import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// 为 slice state 定义一个类型
interface AppState {
  layoutStatus: number
}

// 使用该类型定义初始 state
const initialState: AppState = {
  layoutStatus: 0
}

export const AppState = createSlice({
  name: 'App',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    changeLayoutStatus: (state, action: PayloadAction<number>) => {
      state.layoutStatus = action.payload
    },
  }
})

export const { changeLayoutStatus } = AppState.actions
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectLayoutStatus = (state: RootState) => state.app.layoutStatus

export default AppState.reducer