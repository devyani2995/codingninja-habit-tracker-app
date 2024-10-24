// For setting up routing in the app
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importing Home component 
import Home from "./components/Home";
//Importing Home component 
import WeekView from "./components/WeekView";
//Importing Provider component from react-redux to give access to the Redux store in the app
import { Provider } from "react-redux";
// Importing the Redux store where the app's global state is managed
import store from "./redux/store";

// Main App component that wraps the entire application
function App() {
  return (
    <div>
      {/* Wrapping the app with the Redux Provider to connect the store */}
      <Provider store={store}>
        {/* Setting up the client-side routing with BrowserRouter */}
        <BrowserRouter>
          {/* Defining routes for the app */}
          <Routes>
            {/* Route to render the Home component */}
            <Route path="/" element={<Home />} />
            {/* Route to render the WeekView component */}
            <Route path="/week-view" element={<WeekView />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
