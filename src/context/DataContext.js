import { createContext, useState, useEffect, useRef } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const effectRan = useRef(false);

  useEffect(() => {
    console.log('useEffect Ran');

    // Avoids the API fetch call twice on dev mode
    // variation #1 - use api data from 1st fetch
    /*     if (effectRan.current === false) {
      // Get Tasks
      const getTasks = async () => {
        const data = await fetch('http://localhost:5000/tasks').then((resp) =>
          resp.json()
        );
        console.log(data);
        setTasks(data);
      };

      getTasks();

      return () => {
        console.log('UseEffect Unmounted');
        effectRan.current = true;
      };
    }
 */
    // Variation #2 - use 2nd fetch data
    if (effectRan.current === true) {
      // Get Tasks
      const getTasks = async () => {
        const data = await fetch('http://localhost:5000/tasks').then((resp) =>
          resp.json()
        );
        console.log(data);
        setTasks(data);
      };

      getTasks();
    }

    return () => {
      console.log('UseEffect Unmounted');
      effectRan.current = true;
    };
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
