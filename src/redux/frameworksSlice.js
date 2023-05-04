import { createSlice } from "@reduxjs/toolkit";
import { setFrameWorks } from "../data/framefork";

const initialState = {
    frameworks: setFrameWorks(),
    point: 200,
    status: "idle",
    isOkay: false,
    openFramework: [],
    count:90,
    current:0,

}
export const frameworksSlice = createSlice({
    name: "frameworks",
    initialState,
    reducers: {
        open: (state, action) => {
            const frame = action.payload;
            const findFramework = state.frameworks.find((framework) => framework.id === frame)
            findFramework.status = true;
            state.openFramework = [...state.openFramework, findFramework]
            state.status="success"
        },

        close:(state, action)=>{
            const closeFramwork = action.payload;
            const closeFind =  state.frameworks.find((framework)=>framework.id === closeFramwork )
            closeFind.status=false;
            state.status="unsuccess";
            state.openFramework=[];
        },

        matchFrameworks:(state)=>{         
            state.point = state.point + 50;
            state.openFramework=[]
            state.status="win"           
        },

        unMatchFrameworks:(state)=>{
            state.point= state.point -10;
            state.status="error";
            state.openFramework=[]
        },

        resetFrameworks:(state)=>{
            state.frameworks=setFrameWorks();
            state.point=200
            state.status="idle"
            state.openFramework=[]
            state.count=90
            state.isOkay = true
        
            
        },

        countFramework:(state, action)=>{
            state.count -= action.payload
       
        },

       
    }
})
export const {open, close, unMatchFrameworks, matchFrameworks, resetFrameworks, countFramework} = frameworksSlice.actions
export default frameworksSlice.reducer