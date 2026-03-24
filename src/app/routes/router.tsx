import { createBrowserRouter } from "react-router";
import App from "@app/layouts";
import Question from "@pages/question";
import Main from "@pages/main";
import NotFoundPage from "@pages/notFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/:id", element: <Question /> },
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
