<h1 align="center">TimerTasks ⏱️</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/timertasks"><img src="https://img.shields.io/badge/npm-red?logo=npm" alt="npm badge"></a>
  <a href="https://github.com/MissGwen/timertasks"><img src="https://img.shields.io/badge/GitHub-%23000?logo=github" alt="github badge"></a>
</p>

<p align="center">
  A lightweight and efficient utility for centralized management of <code>setInterval</code> tasks in web and Node.js projects.
</p>

## ✨ Features

- **Centralized Management:** Easily manage all your interval tasks in one place.
- **Dynamic Updates:** Restart existing tasks with new execution intervals on the fly without complex state tracking.
- **Immediate Execution:** Option to execute the task immediately upon registration before the first interval ticks.
- **Easy Cleanup:** Clear specific tasks or all tasks with a single function call, perfect for component unmounting or app shutdown.

## � Installation

You can install the package using your favorite package manager:

```bash
# Using npm
npm install timertasks

# Using pnpm
pnpm add timertasks

# Using yarn
yarn add timertasks
```

## 🚀 Usage

Here is a quick example of how to use `timertasks`:

```typescript
import {
  setTimedTask,
  restartTimedTask,
  clearTimedTask,
  clearAllTimedTask,
} from "timertasks";

// Define intervals in milliseconds
const TIME = 1000;
const NEW_TIME = 1500;

/** 1. Set a timed task */
setTimedTask(
  "your-task-name",
  () => {
    console.log("Task is running...");
    // Your logic goes here...
  },
  TIME,
  { immediate: true }, // Options: Set to true to execute the callback immediately
);

/** 2. Restart a task with a new interval */
// This will clear the old interval and start a new one with NEW_TIME
restartTimedTask("your-task-name", NEW_TIME);

/** 3. Clear a specific timed task */
clearTimedTask("your-task-name");

/** 4. Clear all timed tasks */
clearAllTimedTask();
```

## 📖 API Reference

### `setTimedTask(name, callback, time, options?)`

Registers and starts a new interval task.

- `name` **(string)**: A unique identifier for the task.
- `callback` **(Function)**: The function to execute at each interval.
- `time` **(number)**: The interval time in milliseconds.
- `options.immediate` **(boolean, optional)**: If `true`, the `callback` is executed immediately before the first interval starts.

### `restartTimedTask(name, newTime)`

Restarts an existing task with a new interval time.

- `name` **(string)**: The unique identifier of the task to restart.
- `newTime` **(number)**: The new interval time in milliseconds.

### `clearTimedTask(name)`

Stops and removes a specific task.

- `name` **(string)**: The unique identifier of the task to clear.

### `clearAllTimedTask()`

Stops and removes all registered tasks.

## 🔗 Links

- **npm:** [https://www.npmjs.com/package/timertasks](https://www.npmjs.com/package/timertasks)
- **GitHub:** [https://github.com/MissGwen/timertasks](https://github.com/MissGwen/timertasks)

## 📄 License

MIT
