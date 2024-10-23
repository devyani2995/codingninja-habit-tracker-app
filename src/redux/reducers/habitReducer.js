import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const initialState = {
    habits: []
}

export const habitSlice = createSlice({
    name: "habits",
    initialState: initialState,
    reducers: {
        addHabit: (state, action) => {
            const today = new Date();
            let day = today.getDate() - today.getDay();
            const month = today.getMonth();
            const year = today.getFullYear();

            state.habits.push({
                id: id++,
                name: action.payload,
                weekLog: [
                    {
                        id: 0,
                        day: "Sunday",
                        dd: day,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                    {
                        id: 1,
                        day: "Monday",
                        dd: day + 1,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                    {
                        id: 2,
                        day: "Tuesday",
                        dd: day + 2,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                    {
                        id: 3,
                        day: "Wednesday",
                        dd: day + 3,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                    {
                        id: 4,
                        day: "Thursday",
                        dd: day + 4,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                    {
                        id: 5,
                        day: "Friday",
                        dd: day + 5,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                    {
                        id: 6,
                        day: "Saturday",
                        dd: day + 6,
                        mm: month,
                        yyyy: year,
                        isDone: "",
                    },
                ]
            })
        },

        habitDone: (state, action) => {
            // let tempHabits = state;
            // for (let i = 0; i < tempHabits.length; i++) {
            //     if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
            //         tempHabits[i].weekLog[action.payload].isDone = true;
            //     }
            // }
            // return tempHabits;
            state.habits.map((habit,i) => {
                if(habit.id === Number(localStorage.getItem("id"))){
                          habit.weekLog[action.payload].isDone = true;
                }
                return habit;
            })
        },

        habitUnDone: (state, action) => {
            state.habits.map((habit,i) => {
                if(habit.id === Number(localStorage.getItem("id"))){
                          habit.weekLog[action.payload].isDone = false;
                }
                return habit;
            })
        },
        habitNone: (state, action) => {
            state.habits.map((habit,i) => {
                if(habit.id === Number(localStorage.getItem("id"))){
                          habit.weekLog[action.payload].isDone = "";
                }
                return habit;
            })
        },
    }
});

//To access the slice reducer function using the createSlice method,
export const habitReducer = habitSlice.reducer;

// Action creators are generated for each case reducer function
export const { addHabit,habitDone,habitUnDone,habitNone } = habitSlice.actions;

//Selector
export const habitSelector = (state) => state.habitReducer.habits;