import React from "react";
import FormsFirebase from "./page/FormsFirebase";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <AuthProvider>
        <FormsFirebase />
        <TaskList />
        <TaskForm />
      </AuthProvider>
    </div>
  );
}

export default App;
