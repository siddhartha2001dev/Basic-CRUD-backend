import todoSchema from "../model/todoSchema.js";


//Create Opt
export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const newTodo = await todoSchema.create({ title });
        return res.status(201).json({
            success: true,
            message: "Todo creeated",
            data: newTodo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};




//Read opt
export const getAllTodo = async (req, res) => {
    try {
        const allTodo = await todoSchema.find({})
        return res.status(200).json({
            success: true,
            message: "Todo Fetched Successfully",
            data: allTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};



//Delete opt
export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        console.log("todoId", todoId);
        const delTodo = await todoSchema.findByIdAndDelete(todoId)
        if (!delTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo Not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            data: delTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};



//Update Opt
export const updateAllTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const { title } = req.body
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title Empty!"
            });
        };

        const isTodo = await todoSchema.findById({ _id: todoId })
        console.log("Todo Updated", todoId);
        if (!isTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not available"
            });
        } else {
            isTodo.title = title;
            await isTodo.save()
            return res.status(200).json({
                success: true,
                message: "Todo updated successfully",
                data: isTodo
            });
        };
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};