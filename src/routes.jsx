import Home from "./pages/home";
import Chat from "./pages/chat";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
];

export default routes;
