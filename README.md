
# 📝 Todo App  🎉

Welcome to the **Todo App**! 🚀 This app helps you manage your tasks with ease and excitement. Every time you complete a task, a colorful burst of confetti will celebrate your achievement! 🎊✨

## 🌟 Features

- 🆕 **Add Todos:** Quickly add your tasks using the input bar or press Enter!
- ✅ **Mark as Complete:** Strike through completed tasks with a single click. Celebrate with confetti! 🎉
- ✏️ **Edit Todos:** Easily update any task that needs tweaking.
- 🗑️ **Delete Todos:** Remove tasks that are no longer needed.
- 🎨 **Stylish UI:** Clean, responsive design with beautiful colors and smooth animations.
- 🌈 **Confetti Animation:** Feel the joy of completing tasks with vibrant confetti effects.

## ⚙️ Tech Stack

This app was built using modern web technologies:

- **Frontend:** React.js ⚛️ with TypeScript 🟦
- **Context API:** To manage global state efficiently 🌍
- **Custom Components:** Reusable and well-organized base components for input, buttons, and checkboxes 🛠️
- **Styling:** Tailwind CSS for a sleek and modern look 🎨
- **Confetti:** 🎊 **canvas-confetti** to add fun animations when completing tasks

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher) 🟢
- **npm** or **yarn** 📦

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/olanikegloria/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npm start
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

### 🎉 Confetti Setup

The app uses the `canvas-confetti` package to display confetti animations whenever a task is completed. The confetti is automatically triggered by the **TodoContext** when you mark a task as complete. Get ready for some fun! 🌟

### 💡 Usage

- **Add a task** by typing in the input field and pressing the "Add" button or hitting `Enter`.
- **Edit a task** by clicking the "Edit" button, updating the text, and saving the changes.
- **Delete a task** by clicking the "Delete" button.
- **Mark a task as complete** by clicking the checkbox next to the task. 🎉

## 📂 Project Structure

```
src/                
├── components/            # Custom, Base components (TodoItem, TodoList)
├── context/               # Context API for global state management
├── views/                 # Container and Presentation views (TodoApp, etc.)
├── App.tsx                # Main app component
├── index.tsx              # Entry point for the React app
```

## 🛠️ Built With

- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Canvas Confetti**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/olanikegloria/todo-app/issues).

## 👨‍💻 Author

- **Your Name** – [@olanikegloria](https://github.com/olanikegloria)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

