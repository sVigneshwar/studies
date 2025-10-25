// Basic create async thunk format

export const fetchSomething = createAsyncThunk('slice/fetchSomething', async(_,thunkAPI) => {
  try{
    const res = await fetch("url")
    return await res.json()
  }catch(err){
    return thunkAPI.rejectWithValue(err.message)
  }
})