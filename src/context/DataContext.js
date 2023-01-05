import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Get Tasks
    const getTasks = async () => {
      const data = await fetch('http://localhost:5000/tasks').then((resp) =>
        resp.json()
      );

      setTasks(data);
    };
    console.log('useEffect called from context');
    getTasks();
  }, []);

  // Toggle Add task
  const toggleShowAddTask = () => {
    SetShowAddTask(!showAddTask);
  };

  return (
    <DataContext.Provider
      value={{
        tasks,
        setTasks,
        showAddTask,
        toggleShowAddTask,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
