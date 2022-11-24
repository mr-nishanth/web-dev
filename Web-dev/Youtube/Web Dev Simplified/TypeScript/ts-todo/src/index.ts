import { v4 as uuid } from "uuid"

type Task = { id: string, title: string, completed: boolean, createdAt: Date }

const list = document.querySelector<HTMLUListElement>("#list")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const form = document.getElementById("new-task-form") as HTMLFormElement | null

const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function loadTasks(): Task[] {
    const taskJson = localStorage.getItem("tasks");
    if (taskJson == null) return []
    return JSON.parse(taskJson)
}

form?.addEventListener("submit", e => {
    e.preventDefault();

    if (input?.value == "" || input?.value == null) return

    const newTask: Task = {
        id: uuid(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    }

    tasks.push(newTask)

    addListItem(newTask)
    input.value = ""
    input.focus()
})

function addListItem(task: Task) {
    const item = document.createElement("li") as HTMLLIElement
    const label = document.createElement("label") as HTMLLabelElement
    const checkbox = document.createElement("input") as HTMLInputElement
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked
        // console.log(tasks)
        saveTasks()
    })
    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)
    // saveTasks()
}

