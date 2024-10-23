import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/reducers/habitReducer";
// toast notification
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";

const Navbar = ({ name }) => {
    // State for habit name
    const [habitName, setHabitName] = useState("");
    // call use dispatch hook a variable call dispatch
    const dispatch = useDispatch();

    // change hour state acording time
    const [hour, setHour] = useState(0);
    useEffect(() => {
        const date = new Date();
        setHour(date.getHours());
    }, []);

    // function for add habit 
    const handleSave = () => {
        dispatch(addHabit(habitName));
        toast.success("Your habit added successfully");
        setHabitName("");
    }
    return (
        <div>
            <div className="navbar-container">
                <h3 style={{ color: "white", fontFamily: "cursive" }}>
                    {/* acording to time its shows morning,afternoon,evening and night */}
                    {hour <= 12
                        ? "Morning"
                        : hour <= 17
                            ? "Afternoon"
                            : hour <= 21
                                ? "Evening"
                                : "Night"}
                </h3>
                <div className="right-nav">
                    <h5>{name}</h5>
                    <button
                        className="addhabitButton"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Add Habits
                    </button>
                </div>
            </div>

            {/* modal for add habit form */}
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
                                <input
                                    type="text"
                                    className="form-control"
                                    id="habitName"
                                    placeholder="Enter habit name"
                                    value={habitName}
                                    autoComplete="off"
                                    onChange={(e) => setHabitName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
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