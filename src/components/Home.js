// Import the HabitList and Navbar components 
import HabitList from "./HabitList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      {/* Heading of the page */}
      <h1 className="appName">Habit Tracker App</h1>
      {/* Render the Navbar component,passing "Detail View" as the name prop */}
      <Navbar name="Detail View" />
      {/* Render the HabitList component to display the list of habits */}
      <HabitList />
    </div>
  )
}

export default Home;