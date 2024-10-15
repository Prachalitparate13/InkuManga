// import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center p-20 dark:bg-gray-900 dark:text-white">
      <h3 className="text-xl">
        {" "}
        This is develepod by{" "}
        <span className="text-orange-400">prachalit parate</span> just for fun
      </h3>
      <p className="text-xl">
        {" "}
        mail:
        <a href="mailto:prachalitparate13@gmail.com" className="text-orange-400">
        {" "}{" "} prachalitparate13@gmail.com
        </a>{" "}
      </p>
    </div>
  );
}

export default Footer;
