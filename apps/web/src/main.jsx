import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import StudentFAQ from "./pages/student/StudentFAQ.jsx";
import StudentEvaluations from "./pages/student/StudentEvaluations.jsx";
import StudentPerformance from "./pages/student/StudentPerformance.jsx";
import StudentExam from "./pages/student/StudentExam.jsx";
import Login from "./pages/auth/Login.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/faq", element: <StudentFAQ /> },
  { path: "/avaliacoes", element: <StudentEvaluations /> },
  { path: "/desempenho", element: <StudentPerformance /> },
  { path: "/avaliacao/:id", element: <StudentExam /> },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
