// Import necessary hooks and functions from React and Redux
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Import the addHabit action from the habitReducer
import { addHabit } from "../redux/reducers/habitReducer";
// Toast notification
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";

// Navbar component that receives a "name" prop 
const Navbar = ({ name }) => {
    // State to track the input for the habit name
    const [habitName, setHabitName] = useState("");
    // Use the useDispatch hook to get the dispatch function from Redux
    const dispatch = useDispatch();
    // state to store the current hour of the day
    const [hour, setHour] = useState(0);

    // useEffect hook to set the hour state based on the current time
    useEffect(() => {
        const date = new Date();
        // Get the current hour and set it in state
        setHour(date.getHours());
    }, []);

    // Function to handle adding a new habit
    const handleSave = () => {
        // Dispatch the addHabit action with the habit name as payload
        dispatch(addHabit(habitName));
        // Show a success toast notification after adding the habit
        toast.success("Your habit added successfully");
        // Clear the input field after saving
        setHabitName("");
    }

    return (
        <div>
            <div className="navbar-container">
                <h3 style={{ color: "white", fontFamily: "cursive" }}>
                    {/* Acording to time its shows morning,afternoon,evening and night */}
                    {hour <= 12
                        ? "Morning"
                        : hour <= 17
                            ? "Afternoon"
                            : hour <= 21
                                ? "Evening"
                                : "Night"}
                </h3>
                <div className="right-nav">
                    {/* To display the view name(i.e Detail View or Week View) */}
                    <h5>{name}</h5>
                    {/* Button to trigger the modal form adding a new habit */}
                    <button
                        className="addhabitButton"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Add Habits
                    </button>
                </div>
            </div>

            {/* Modal for adding a new habit */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                New Habit
                            </h5>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    NAME
                                </label>
                                {/* Input field for entering the habit name */}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="habitName"
                                    placeholder="Enter habit name"
                                    value={habitName}
                                    autoComplete="off"
                                    onChange={(e) => setHabitName(e.target.value)} // Update state when the input changes
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* Button to cancel and close the modal */}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            {/* Button to save the habit and close the modal */}
                            <button type="button" className="btn btn-primary" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* For showing toast notification message */}
            <ToastContainer />
        </div>
    )
}

export default Navbar;