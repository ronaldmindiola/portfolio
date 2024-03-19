import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center p-72">
        <h1 className="text-6xl py-4 font-black block">
          {" "}
          <span className="text-blue-500">Frontent </span>Developer
        </h1>
        <div className="pl-4">
          <p className="text-pretty text-lg">
            Mi nombre <span className="font-black">Ronald Mindiola</span>, Soy
            desarrollador Web con sede en{" "}
            <span className="text-emphasis">Dibulla, Colombia</span>.
          </p>
          <p>A continuación te presento algunos de mis proyectos.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 my-12 ">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Link
              to="https://gastos-psi.vercel.app/"
              className="py-4 max-w-xs h-16 flex flex-col opacity-50 justify-center items-left rounded overflow-hidden shadow-lg dark:bg-stone-900 hover:bg-stone-700 hover:opacity-100"
            >
              <div className="font-bold text-xl text-center ">Gastos</div>
            </Link>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Link
              to="https://criptos-eight.vercel.app/"
              className="py-4 max-w-xs h-16 flex flex-col opacity-50 justify-center items-left rounded overflow-hidden shadow-lg dark:bg-stone-900 hover:bg-stone-700 hover:opacity-100"
            >
              <div className="font-bold text-xl text-center ">Criptos</div>
            </Link>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Link
              to="https://citas-six.vercel.app/"
              className="py-4 max-w-xs h-16 flex flex-col opacity-50 justify-center items-left rounded overflow-hidden shadow-lg dark:bg-stone-900 hover:bg-stone-700 hover:opacity-100"
            >
              <div className="font-bold text-xl text-center ">Citas</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
