import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  let redirectPath = "/";

  if (location.pathname.startsWith("/admin/")) {
    redirectPath = "/admin";
  } else if (location.pathname.startsWith("/user/")) {
    redirectPath = "/user";
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[coral] text-white">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-lg mt-2">Page Not Found</p>
      <Link
        to={redirectPath}
        className="mt-5 bg-white text-[coral] px-6 py-2 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
