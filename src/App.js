import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeekView from "./components/WeekView";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/week-view" element={<WeekView />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
