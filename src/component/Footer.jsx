// import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center p-20 dark:bg-gray-900 dark:text-white">
      <h3 className="text-xl">
        {" "}
        This is developed by{" "}
        <a href='https://www.linkedin.com/in/prachalit-parate/' className="text-orange-400" target="blank">prachalit parate</a> just for fun
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
