import React from "react";

const Footer = ({ font }: { font?: string }) => {
  return (
    <footer className="py-12 bg-gray-952 text-gray-953">
      <div
        className={`max-w-[100rem] px-12 mx-auto flex justify-between ${font}`}
      >
        <p className="text-xl">©Anslem Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
