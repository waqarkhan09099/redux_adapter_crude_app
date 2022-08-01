import { createSlice , createEntityAdapter} from "@reduxjs/toolkit";
const studentAdapter=createEntityAdapter()
export const studentSelector=studentAdapter.getSelectors((state)=>state.student)
export const studentSlice = createSlice({
  name: "student",
  initialState:studentAdapter.getInitialState(),
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      studentAdapter.addOne(state,action.payload)
    },
    updateStudent: (state, action) => {
      const {id,...remainingData}=action.payload
      const update_Student={
          id:id,
          changes:remainingData
      }
      studentAdapter.updateOne(state,update_Student)
    },
    deleteStudent: (state, action) => {
      studentAdapter.removeOne(state,action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
