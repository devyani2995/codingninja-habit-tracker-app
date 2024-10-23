import HabitList from "./HabitList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      {/* Heading of the page */}
      <h1 className="appName">Habit Tracker App</h1>

      <Navbar name="Detail View" />
      <HabitList />
    </div>
  )
}

export default Home;