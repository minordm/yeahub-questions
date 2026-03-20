import { createBrowserRouter } from "react-router";
import App from "../App";
import Question from "../../pages/Question";
import Main from "../../pages/Main/Main";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

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
          <div style={{ height: "calc(100vh - 460px)" }}>
            Страница собеседований в разработке...
          </div>
        ),
      }, // собеседования (переделать материалы на собеседования)
      {
        path: "/trainer",
        element: (
          <div style={{ height: "calc(100vh - 460px)" }}>
            Страница тренажера в разработке...
          </div>
        ),
      }, // вкладка тренажер
      {
        path: "/skills",
        element: (
          <div style={{ height: "calc(100vh - 460px)" }}>
            Страница навыков в разработке...
          </div>
        ),
      }, // вкладка навыки (либо сделаю, либо нет)
      {
        path: "/login",
        element: (
          <div style={{ height: "calc(100vh - 460px)" }}>
            Страница входа в разработке
          </div>
        ),
      },
      {
        path: "/registr",
        element: (
          <div style={{ height: "calc(100vh - 460px)" }}>
            Страница регистрации в разработке
          </div>
        ),
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
