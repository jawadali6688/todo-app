import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "This is me",
        completed: false
    }],
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    addTodo: (todo) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}
export const TodoContextProvider = TodoContext.Provider;