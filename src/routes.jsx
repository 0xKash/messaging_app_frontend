import Home from "./pages/home";
import Chat from "./pages/chat";
import Register from "./pages/register";
import Login from "./pages/login";
import ProfileEditor from "./pages/profile-editor";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/edit",
    element: <ProfileEditor />,
  },
];

export default routes;
