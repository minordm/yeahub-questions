import App from "@app/layouts/App";
import NotFoundPage from "@pages/not-found";
import QuestionDetailPage from "@pages/question-detail";
import QuestionsListPage from "@pages/question-list";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <QuestionsListPage /> },
      { path: "/:id", element: <QuestionDetailPage /> },
      {
        path: "/collections",
        element: (
          <div style={{ height: "100vh" }}>
            Страница собеседований в разработке...
          </div>
        ),
      }, // собеседования (переделать материалы на собеседования)
      {
        path: "/trainer",
        element: (
          <div style={{ height: "100vh" }}>
            Страница тренажера в разработке...
          </div>
        ),
      }, // вкладка тренажер
      {
        path: "/skills",
        element: (
          <div style={{ height: "100vh" }}>
            Страница навыков в разработке...
          </div>
        ),
      }, // вкладка навыки (либо сделаю, либо нет)
      {
        path: "/login",
        element: (
          <div style={{ height: "100vh" }}>Страница входа в разработке</div>
        ),
      },
      {
        path: "/registr",
        element: (
          <div style={{ height: "100vh" }}>
            Страница регистрации в разработке
          </div>
        ),
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
