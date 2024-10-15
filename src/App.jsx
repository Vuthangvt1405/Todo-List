import "./App.css";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import { GlobalProvider } from "./contexts/GlobalContext";
const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-gra-135deg w-full h-100vh flex items-center justify-center">
        <div className="rounded bg-white p-10 min-w-50vh">
          <Header></Header>
          <Task></Task>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
