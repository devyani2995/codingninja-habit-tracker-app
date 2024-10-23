import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { habitSelector } from "../redux/reducers/habitReducer";
const HabitList = () => {

  const today = new Date();
  const todayDay = today.getDay();


  // Call useSelector hook for getting state from reducer
  const habits = useSelector(habitSelector);

  // Calling use navigate hook from react-router-dom in a navigate varriable 
  const navigate = useNavigate();

  //Function for navigating to WeekView page and setting id in localStorage
  function setId(habit) {
    localStorage.setItem("id", habit.id)
    navigate("/week-view");
  }

  if (habits.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "30vh" }}><h4>Your habit list is empty!</h4><p>Please add your habits...</p></div>
    )
  }

  return (
    <div className="habitListContainer">
      {habits.map((habit) => {
        
        let countDone = 0;
        //Loop for getting habit done count
        for (let i = 0; i < habit.weekLog.length; i++) {
          if (habit.weekLog[i].isDone === true) {
            countDone++;
          }
        }
        return (
          <div className="habit" key={habit.id}>
            <div style={{ marginTop: "2%" }}>
              <h5>{habit.name}</h5>
              <p className="dayComplete">{countDone}/{todayDay + 1} days</p>
            </div>
            <div className="habit-right">
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