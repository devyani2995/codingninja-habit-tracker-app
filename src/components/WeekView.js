// Import Link for navigation
import { Link } from "react-router-dom";
// Import a back arrow icon
import { IoMdArrowRoundBack } from "react-icons/io";
// Import the Navbar component
import Navbar from "./Navbar";
// Import the DayView component for displaying individual day details
import DayView from "./DayView";
// Import useSelector hook
import { useSelector } from "react-redux";
// Import the habitSelector to access the habit state
import { habitSelector } from "../redux/reducers/habitReducer";

const WeekView = () => {

  // Use the useSelector hook to access the global state (list of habits) from Redux store
  let habitsState = useSelector(habitSelector);
  // Initialize an empty habit object 
  let habit = {}
  // Loop through the habitsState array to find the habit that matches the ID in localStorage
  for (let i = 0; i < habitsState.length; i++) {
    // Checking if the habit ID is same as the ID stored in localStorage,
    //then it will set the matched habit to the habit variable
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <>
      {/* Render the Navbar component, passing "Week View" as the name prop */}
      <Navbar name="Week View" />
      {/* Display the habit's name  */}
      <h1 className="text-center" style={{ textTransform: "capitalize", marginTop: "4vh" }}>{habit.name}</h1>
      {/* Link back to the home page */}
      <div className="backBtn">
        <Link to="/" className="backBtnIcon">
          <IoMdArrowRoundBack /> {/* Back arrow icon */}
        </Link>
      </div>
      {/* Container for displaying each day's log */}
      <div className="daysContainer">
        {/* Map through the weekLog array of the selected habit and render DayView for each day */}
        {habit.weekLog.map((day, index) => <DayView day={day} key={index} />)}
      </div>
    </>
  )
}

export default WeekView;