import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="flex justify-between gap-2 bg-white">
      <nav className="flex justify-center items-center flex-row bg-amber-200 w-full p-5 text-body">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/page-one">Page One</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/page-two">Page Two</Link>
        </div>
      </nav>
    </header>
  );
}
