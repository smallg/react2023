import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels: (state, action) => {
      state.channelList = action.payload;
    },
  }
});

const { setChannels } = channelStore.actions;

const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/channels');
    dispatch(setChannels(res.data));
  }
};

export { fetchChannelList };

const reducer = channelStore.reducer;
export default reducer;