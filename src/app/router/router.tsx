import { createBrowserRouter } from "react-router";
import App from "../App";
import Question from "../../pages/Question";
import Main from "../../pages/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/:id", element: <Question /> },
      {
        path: "/collections",
        element: <>Страница собеседований в разработке</>,
      }, // собеседования (переделать материалы на собеседования)
      { path: "/trainer", element: <>Страница тренажера в разработке</> }, // вкладка тренажер
      { path: "/skills", element: <>Страница навыков неизвестна</> }, // вкладка навыки (либо сделаю, либо нет)
    ],
  },
  { path: "*", element: <p>404 - Ничего не найдено</p> },
]);
