
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city = "Mumbai") => {
    const apiKey = "632cd78305e2ca57cb78cf49a9d1eaf4"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      temp: data.main.temp,
      description: data.weather[0].description,
    };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temp: null,
    description: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.temp = action.payload.temp;
        state.description = action.payload.description;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch weather";
      });
  },
});

export default weatherSlice.reducer;
