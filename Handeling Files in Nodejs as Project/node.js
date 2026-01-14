const fs = require('fs');
const filePath =  "./file.json";

const loadTasks = () => {
  try {
    const data = fs.readFileSync(filePath);
    const dataObj = data.toString();
    return JSON.parse(dataObj);
  } catch (error) {
    return [];
  }
}

const addTask = (task) => {
  const tasks = loadTasks();
  fs.writeFileSync(filePath, JSON.stringify([...tasks, task]));
}

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach ((task, index) => {
    console.log(`${index + 1} - ${task}`);
  })
}

const removeTask = () => {
  const tasks = loadTasks();
  const index = parseInt(process.argv[3]);
  tasks.splice(index - 1, 1);
  fs.writeFileSync(filePath, JSON.stringify(tasks));
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