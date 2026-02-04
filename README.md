# prelim-lab-exam

Student Info App (React + Vite)

## Features ✅
- Component usage (HeaderComponent, StudentComponent)
- Props and state demonstrated
- Client-side routing (Home, Students)
- API integration using Axios (JSONPlaceholder)
- Loading and error-handling states

## Project structure 🔧
- `index.html` - Vite entry
- `package.json` - scripts and dependencies
- `src/main.jsx` - app entry, router
- `src/App.jsx` - routes and layout
- `src/components` - reusable components
- `src/pages` - Home and Students pages
- `src/services/api.js` - axios wrapper and fetch function

## Run locally 💡
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

Open the URL printed by Vite in your browser (usually `http://localhost:5173`).

## Notes
- Visit `Home` to see sample students created using props and state. Use the **Promote** and **Remove** buttons to change state. ✅
- Visit `Students` to fetch a list of students from JSONPlaceholder (via Axios). The page shows loading and error states. Click a student to go to `/students/:id` for a details page. ✅

