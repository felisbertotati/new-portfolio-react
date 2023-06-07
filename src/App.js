import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function App() {
  return (
    <>
      <main className=" bg-white px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl  ">TatianaL</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-300 to-orange-400 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>Tatiana Leitao</h2>
            <h3>I code and design Beautiful websites.</h3>
            <p>
              I'm located in united Kingdom with a background in customer
              experience and a strong commitment to learning. Excel at creating
              user-friendly applications by combining my creative and
              problem-solving skills. Recognized for my quick-thinking and
              meticulous approach, especially when working on challenging
              projects.
            </p>
          </div>
          <div>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
