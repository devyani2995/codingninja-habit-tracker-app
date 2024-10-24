// Toast notification
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
// Import useDispatch hook to dispatch Redux actions
import { useDispatch } from 'react-redux';
// Import actions from the habitReducer
import { habitDone, habitNone, habitUnDone } from '../redux/reducers/habitReducer';

const DayView = ({ day }) => {
    // Get the current date
    const today = new Date();
    // Get day from today date
    const todayDay = today.getDay();
    // Get date details from providing date
    const date = new Date(day.yyyy, day.mm, day.dd);
    // Use useDispatch hook to dispatch actions from the Redux store
    const dispatch = useDispatch();

    // Function to mark the habit as done for a day
    const markDone = () => {
        // Condition to not mark for future day status
        if (day.id > todayDay) {
            toast.error("You cannot change your next days status");
            return;
        }

        // Dispatch the habitDone action with the day's id
        dispatch(habitDone(day.id));
    }

    // Function to mark the habit as undone for a day
    const markUnDone = () => {
        // Condition to not mark for future day status
        if (day.id > todayDay) {
            toast.error("You cannot change your next days status");
            return;
        }

        // Dispatching habitUndone action
        dispatch(habitUnDone(day.id));
    }

    // Function to mark the habit as none
    const markNone = () => {
        // Condition to not mark for future day status
        if (day.id > todayDay) {
            toast.error("You cannot change your next days status");
            return;
        }

        // Dispatching habitNone action
        dispatch(habitNone(day.id));
    }

    return (
        <div className="dayContainer">
            {/* Display the day name (e.g., "Sunday","Monday" etc.) */}
            <h5 className="text-center">{day.day}</h5>
            {/* Display the formatted date (day/month/year) */}
            <p className="text-center">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
            {/* Icon for marking the habit as done */}
            <i className={day.isDone === true ? "fa-solid fa-circle-check circle-icon active" : "fa-solid fa-circle-check circle-icon"} onClick={markDone}></i>
            {/* Icon for marking the habit as undone */}
            <i className={day.isDone === false ? "fa-solid fa-circle-xmark circle-icon active" : "fa-solid fa-circle-xmark circle-icon"} onClick={markUnDone}></i>
            {/* Icon for marking the habit as none (no status) */}
            <i className={day.isDone === "" ? "fa-solid fa-circle-minus circle-icon active" : "fa-solid fa-circle-minus circle-icon"} onClick={markNone}></i>

            {/* For showing toast notification message */}
            <ToastContainer />
        </div>
    )
}

export default DayView;