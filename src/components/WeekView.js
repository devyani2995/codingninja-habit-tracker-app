import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "./Navbar";
import DayView from "./DayView";
import { useSelector } from "react-redux";
import { habitSelector } from "../redux/reducers/habitReducer";

const WeekView = () => {
  // const location = useLocation();
  // const habit = location.state;
  
    // call use selector hook for getting state from reducer
    let habitsState=useSelector(habitSelector);
  
    // getting habit from habits state acording to local storage id and set it on habit
    let habit={}
    for(let i=0;i<habitsState.length;i++){
      if(habitsState[i].id===Number(localStorage.getItem("id"))){
        habit=habitsState[i];
      }
    }
  
  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{ textTransform: "capitalize", marginTop: "4vh" }}>{habit.name}</h1>
      <div className="backBtn"><Link to="/" className="backBtnIcon"><IoMdArrowRoundBack /></Link></div> 
      <div className="daysContainer">
        {habit.weekLog.map((day, index) => <DayView day={day} key={index}/>)}
      </div>
    </>
  )
}

export default WeekView;