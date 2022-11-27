import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { CartContextProvider } from "./context";
import { ErrorPage, ProductDetail, ProductList } from "./pages";
import { getProductDetail } from "./services/product";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    handle: {
      crumb: () => ({
        href: "/",
        text: "Productos",
      }),
    },
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        handle: {
          crumb: async ({ params }) => {
            const result = await getProductDetail(params.id);

            return {
              href: "/",
              text: `${result.model}`,
            };
          },
        },
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
