import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="flex max-w-screen-xl flex-wrap items-center justify-between p-4 sm:mx-20 lg:mx-[400px]">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/logo.jpg"
            className="h-8 w-9 rounded-full"
            alt="InkuManga"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-orange-400">
            Inku-Manga
          </span>
        </a>
       

        <button onClick={toggleTheme}>
          {
            theme === "dark" && <IoSunny className="text-yellow-400" /> // render sunny when dark is true
          }
          {
            theme === "light" && <IoMoon /> // render moon when dark is false
          }
        </button>
      </div>
    </nav>
  );
}

export default Header;
