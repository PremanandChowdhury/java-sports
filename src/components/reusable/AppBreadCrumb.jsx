import { Link, useLocation } from "react-router-dom";

const AppBreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (location.pathname === "/") return null;
  return (
    <div className="wrapper pb-3 sm:pb-4 font-600 text-lg sm:text-xl flex gap-1 items-center">
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <span key={to} className="flex items-center">
            <span className="tracking-tighter">&nbsp;&gt;&gt;&nbsp;</span>
            <Link
              className={index === pathnames.length - 1 ? "text-primary" : ""}
              to={to}
            >
              {value}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default AppBreadCrumb;