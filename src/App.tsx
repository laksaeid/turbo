import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient} >
      <Container maxWidth="xl">
        <RouterProvider router={router} />
      </Container>
    </QueryClientProvider>
    </>
  );
}

export default App;
