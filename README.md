Deployment Link : https://radiant-churros-92c908.netlify.app

- The process starts with a simple login where the user enters an email, which gets stored in `localStorage`. This email uniquely identifies and separates each user's task data.

- There's no password-based authentication — users can log in with just an email, making the process quick and easy for testing or demo purposes.

- On app load, tasks are fetched from `localStorage` using the stored email, ensuring that each user only sees their personal tasks.

- When a new task is added, it’s saved in both the Redux store and `localStorage`, so even if the page is refreshed, the data remains intact.

- Each task includes a priority level — High, Medium, or Low — and tasks are automatically sorted in that order to keep important items visible at the top.

- Users can delete tasks anytime, with changes instantly reflecting in both the Redux state and `localStorage`.

- A key highlight is the automatic detection of outdoor activities. If a task includes keywords like “drive,” “fishing,” “walk,” or “hiking,” the app identifies it as an outdoor task.

- For these tasks, live weather data is fetched using Redux Thunk, providing relevant weather info tied to that specific task.

- This weather information is shown directly under the task, allowing users to quickly decide whether it's a good time for that activity.

- All user-specific tasks and weather data are isolated using the email-based key structure in `localStorage`, keeping everything neatly organized per user.

