// toast notification
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { habitDone, habitNone, habitUnDone } from '../redux/reducers/habitReducer';

const DayView = ({ day }) => {
    // get today date
    const today = new Date();
    // get day from today date
    const todayDay = today.getDay();

    // get date details from providing date
    const date = new Date(day.yyyy, day.mm, day.dd);

    const dispatch = useDispatch();

    // Function to mark the habit as done for a day
    const markDone = () => {
        // Condition  to not mark for next day status
        if (day.id > todayDay) {
            toast.error("You cannot change your next days status");
            return;
        }

        // Dispatching habit done action
        dispatch(habitDone(day.id));
    }

    // Function to mark the habit as undone for a day
    const markUnDone = () => {
        // Condition  to not mark for next day status
        if (day.id > todayDay) {
            toast.error("You cannot change your next days status");
            return;
        }

        // Dispatching habitUndone action
        dispatch(habitUnDone(day.id));
    }

    // Function to mark the habit as none
    const markNone = () => {
        if (day.id > todayDay) {
            toast.error("You cannot change your next days status");
            return;
        }

        // Dispatching habitNone action
        dispatch(habitNone(day.id));
    }

    return (
        <div className="dayContainer">
            <h5 className="text-center">{day.day}</h5>
            <p className="text-center">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
            <i className={day.isDone === true ? "fa-solid fa-circle-check circle-icon active" : "fa-solid fa-circle-check circle-icon"} onClick={markDone}></i>
            <i className={day.isDone === false ? "fa-solid fa-circle-xmark circle-icon active" : "fa-solid fa-circle-xmark circle-icon"} onClick={markUnDone}></i>
            <i className={day.isDone === "" ? "fa-solid fa-circle-minus circle-icon active" : "fa-solid fa-circle-minus circle-icon"} onClick={markNone}></i>

            {/* For showing toast notification message */}
            <ToastContainer />
        </div>
    )
}

export default DayView;