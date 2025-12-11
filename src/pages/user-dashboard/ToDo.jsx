import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Attend Class', date: 'Tuesday, 30 June 2025', completed: false },
    { id: 2, title: 'Learn about plastic trims', date: 'Monday, 24 June 2025', completed: false },
    { id: 3, title: 'Introduction to plastic trims', date: 'Friday, 10 June 2025', completed: true },
    { id: 4, title: 'Basics of Automobile', date: 'Friday, 05 June 2025', completed: true }
  ]);
  
  const [newTodo, setNewTodo] = useState('');
  const [newDate, setNewDate] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTodo = () => {
    if (newTodo.trim() && newDate) {
      const date = new Date(newDate);
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
      });
      
      setTodos([
        { 
          id: Date.now(), 
          title: newTodo, 
          date: formattedDate, 
          completed: false 
        },
        ...todos
      ]);
      
      setNewTodo('');
      setNewDate('');
      setShowAddForm(false);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-lg">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">To do List</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-2 transition-colors"
          >
            {showAddForm ? <X size={20} /> : <Plus size={20} />}
          </button>
        </div>

        {showAddForm && (
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <input
              type="text"
              placeholder="Task title"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              onClick={addTodo}
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-2 rounded-lg font-medium transition-colors"
            >
              Add Task
            </button>
          </div>
        )}

        <div className="space-y-4">
          {todos.map((todo, index) => (
            <div
              key={todo.id}
              className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-b-0 group"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  todo.completed
                    ? 'bg-cyan-400 border-cyan-400'
                    : 'border-cyan-400 hover:bg-cyan-50'
                }`}
              >
                {todo.completed && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>

              <div className="flex-1">
                <h3
                  className={`text-lg font-medium transition-all ${
                    todo.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-800'
                  }`}
                >
                  {todo.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{todo.date}</p>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>No tasks yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;