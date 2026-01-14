const fs = require('fs');
const filePath =  "./file.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON);
    
  } catch (error) {
    return []
  }
}

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
}

const saveTasks = (tasks) => {
  const dataJSON = JSON.strinfigy(tasks);
  fs.writeFileSync(filePath, dataJSON);
}

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, i) => {
    console.log(`${i + 1} - ${task}`)
  })
}

const removeTask = () => {
  const tasks = loadTasks();
  const i = parseInt(process.argv[3]);
  tasks.splice(i - 1, 1);
  saveTasks(tasks);
} 

const command = process.argv[2]
const argument = process.argv[3]

if (command === "add"){
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove"){
  removeTask();
} else {
  console.log("command not found");
}