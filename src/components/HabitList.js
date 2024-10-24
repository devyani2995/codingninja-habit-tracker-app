// Import necessary icons from react-icons library
import { FaRegCalendarAlt } from "react-icons/fa";
// Import useNavigate hook for navigation between pages
import { useNavigate } from "react-router-dom";
// Import useSelector hook to access the global state
import { useSelector } from "react-redux";
// Import the habitSelector function to select the habit state
import { habitSelector } from "../redux/reducers/habitReducer";

const HabitList = () => {
  // Get the current date to track the current day of the week
  const today = new Date();
  // To get the current day of the week
  const todayDay = today.getDay();


  // Use the useSelector hook to get the list of habits from the Redux store
  const habits = useSelector(habitSelector);

  // Call useNavigate hook to handle page navigation
  const navigate = useNavigate();

  //Function for navigating to the WeekView page and setting id in localStorage
  function setId(habit) {
    localStorage.setItem("id", habit.id)
    navigate("/week-view");
  }

  // If there are no habits in the list then display a message to the user to add a habits
  if (habits.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "30vh" }}><h4>Your habit list is empty!</h4><p>Please add your habits...</p></div>
    )
  }

  return (
    <div className="habitListContainer">
      {/* Loop through the habits array to render each habit */}
      {habits.map((habit) => {
        // Initialize a counter to track how many days the habit has been completed
        let countDone = 0;
        // Loop through the weekLog array to count the number of days the habit is marked as done
        for (let i = 0; i < habit.weekLog.length; i++) {
          if (habit.weekLog[i].isDone === true) {
            countDone++;
          }
        }
        return (
          <div className="habit" key={habit.id}>
            <div style={{ marginTop: "2%" }}>
              {/* Display the habit name */}
              <h5>{habit.name}</h5>
              {/* Display how many days the habit has been completed out of the total days up to today */}
              <p className="dayComplete">{countDone}/{todayDay + 1} days</p>
            </div>
            <div className="habit-right">
              {/* To navigate to the WeekView of the habit */}
              <div className="weekViewbtn" onClick={() => setId(habit)}>
                <FaRegCalendarAlt />
                <span style={{ marginLeft: "6px" }}>Week View</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HabitList;