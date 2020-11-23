const { addNewTask, updateTask } = require('./server');

(async function myFunc() {
    await addNewTask({
        name: "arian",
        id: "1234567"
    })

    await updateTask({
        id: "1234567",
        name: "My task - UPDATED!!!"
    })
}) ()