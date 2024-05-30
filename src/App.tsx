import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddLayout from "./components/AddProperty/AddLayout";
import Applayout from "./ui/Applayout";
import PropertiesLayout from "./components/Properties/PropertiesLayout";
import { Toaster } from "react-hot-toast";
import PropertiesContext from "./components/Context/PropertiesContext";
import PropertyLayout from "./components/Property/PropertyLayout";
import SettingLayout from "./components/Settings/SettingLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import SignInForm from "./components/Users/SignIn";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PropertiesContext>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <Applayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<PropertiesLayout />} />
              <Route path="/addProperty" element={<AddLayout />} />
              <Route path="/property/:id" element={<PropertyLayout />} />
              <Route path="/settings" element={<SettingLayout />} />
            </Route>
            <Route path="/login" element={<SignInForm />} />
          </Routes>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 5000,
              },

              error: {
                duration: 2000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "black",
              },
            }}
          />
        </PropertiesContext>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
