import "@radix-ui/themes/styles.css";
import { Flex, Button, Heading, TextArea } from "@radix-ui/themes";
import Task from "./components/Task.jsx";
import { useState } from "react";
import { Toaster, toast } from "sonner";

function App() {
  const [tasks, setTasks] = useState([]);
  const [textValue, setTextValue] = useState();
  const [isListButton, setIsListButton] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  function handleChange(event) {
    setTextValue(event.target.value);
  }
  function tasksHandler() {
    if (textValue) {
      setTasks((prevTasks) => [...prevTasks, textValue]);
      setTextValue("");
    } else {
      toast.warning("Enter a Task");
    }
  }
  function handleEdit(index) {
    setTextValue(tasks[index]);
    setIsListButton(true);
    setEditIndex(index);
  }
  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function handleTaskEdit() {
    if (textValue !== tasks[editIndex] && textValue) {
      const updatedTasks = [
        ...tasks.slice(0, editIndex),
        (tasks[editIndex] = textValue),
        ...tasks.slice(editIndex + 1),
      ];
      setTasks(updatedTasks);
      setTextValue("");
      setIsListButton(false);
    } else {
      toast.warning("Enter Updated Task");
    }
  }
  return (
    <>
      <div className="bg-black w-dvw h-dvh flex flex-col gap-5 justify-center items-center text-white">
        <Toaster position="bottom-center" />
        <Heading>Todo List</Heading>
        <Flex gap={"3"} justify={"center"} align={"center"}>
          <TextArea
            value={textValue}
            onChange={handleChange}
            resize={"none"}
            size={"1"}
            placeholder="Type your task here..."
          ></TextArea>
          {isListButton ? (
            <Button color="purple" onClick={handleTaskEdit}>
              Edit Task
            </Button>
          ) : (
            <Button color="green" onClick={tasksHandler}>
              Add Task
            </Button>
          )}
        </Flex>
        <Heading>Tasks</Heading>

        {tasks.length !== 0
          ? tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  task={task}
                  handleEdit={() => handleEdit(index)}
                  handleDelete={() => handleDelete(index)}
                />
              );
            })
          : "No Tasks"}
      </div>
    </>
  );
}

export default App;
