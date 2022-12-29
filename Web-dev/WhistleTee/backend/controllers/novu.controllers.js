
const sendNotification = require("../api/novu")
const Todo = require("../model/novu.model")

exports.createTodo = async (req, res) => {
    const { todoHeading, email } = req.body
    if (!todoHeading && !email) {
        return res.status(400).json({ status: false })
    }

    try {
        const newTodo = await Todo.create({ todoHeading, email })
        console.log(newTodo)
        console.log(newTodo._id)
        sendNotification(todoHeading, email, newTodo._id)
        return res.status(201).json({ status: true, message: newTodo })
    } catch (error) {
        return res.status(500).json({ status: false })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const allTodo = await Todo.find().lean()
        console.log(allTodo)
        return res.status(200).json({ status: true, message: allTodo })
    } catch (error) {
        return res.status(500).json({ status: false })
    }
}