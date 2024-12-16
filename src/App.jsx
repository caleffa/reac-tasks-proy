import TaskList from "./components/tasks/TaskList.jsx";
import TaskForm from "./components/tasks/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto px-2 py-2 p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
