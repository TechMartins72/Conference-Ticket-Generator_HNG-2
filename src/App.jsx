import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayouts from "./Layouts/RootLayouts";
import HomePage from "./Components/HomePage";
import FormPage from "./Components/FormPage";
import GenerateTicketPage from "./Components/GenerateTicketPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<HomePage />}></Route>
      <Route path="ticket-details" element={<FormPage />}></Route>
      <Route path="ticket-generate" element={<GenerateTicketPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
