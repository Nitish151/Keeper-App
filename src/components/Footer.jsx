import React from "react";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-neutral-100 text-center lg:text-left">
      <div class="p-4 text-center text-neutral-800 dark:text-neutral-600">
        Copyright ©: 

         {currentYear}
      </div>
    </footer>
  );
}

export default Footer;
