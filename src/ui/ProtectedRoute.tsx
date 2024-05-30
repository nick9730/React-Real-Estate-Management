import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useGetUser } from "../components/Users/useGetUser";
import Spinner from "./Spinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  const { user, isLoading, isAuthenticated } = useGetUser();
  console.log(user?.aud);

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  

  if (isLoading) return <Spinner />;
  if (isAuthenticated) return children;
}
