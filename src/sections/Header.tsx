import Image from "next/image";

const navlinks = [
  { label:"Home", href:"#" }
]

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20" >
      <div className="p-5 flex justify-center items-center " >
        <div className="container">
          <div className="flex justify-between items-center ">
            <Image src="/logosaas.png" alt="company Logo" width={40} height={40} priority/>
            <Image src="./menu.svg" alt="Menu" width={40} height={40} className="ml-auto md:hidden " />
            <nav className="hidden md:flex gap-8 text-black/70 items-center" >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Features</a>
              <a href="#">Testimonials</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight" >
                <a href="#">Contact Us</a>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
