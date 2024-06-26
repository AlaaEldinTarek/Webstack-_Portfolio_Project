import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex  justify-center items-center m-4   p-3 text-blue-400  border-blue-400 shadow-[-3px_-3px_10px_rgb(96_165_250_/_50),3px_3px_10px_rgb(96_165_250_/_50)]  shadow-blue-400 rounded-lg border-1">
      Copyright &copy;2024 All rights reserved by :&nbsp;
      <a
        href="https://www.alaaeldintarek.com/"
        target="_blank"
        className="text-yellow-100"
        rel="noreferrer"
      >
        AlaaEldinTarek
      </a>
    </div>
  );
};

export default Footer;
