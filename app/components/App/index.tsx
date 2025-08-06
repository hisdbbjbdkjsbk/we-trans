"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../Loading";

interface IAppProps {
  children: React.ReactNode;
}

const App = ({ children }: IAppProps) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1050);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      {!loading && children}
    </>
  );
};

export default App;
