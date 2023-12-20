import "./App.css";
import Timer from "./components/Timer";
function App() {
  return (
    <>
      <main className="bg-[url('/img/gta6Cover.png')] bg-center bg-cover py-2 ">
        <section className="container m-auto brightness-none">
          <div className="flex flex-col">
            <h2 className="text-center text-white text-lg my-8">
              Available on {" "}
            </h2>
            <div className="flex justify-around w-40 m-auto">
              <a  href="https://www.playstation.com/fr-fr/ps5/" target="_blank" className="text-lg text-white font-bold bg-blue-600 hover:bg-blue-600 bg-opacity-30 p-1 px-3 rounded-full border border-blue-800">
                PS5
              </a>
              <a href="https://www.xbox.com/fr-FR" target="_blank" className="text-lg text-white font-bold bg-green-600 hover:bg-green-600 bg-opacity-30 p-1 px-3 rounded-full border border-green-800">
                XBOX
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 md:p-0 my-24 gap-8">
            <span className="h-0.5 bg-white w-96"></span>
            <h1 className="text-center text-4xl  text-white " >
              <strong className="md:text-9xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-orange">
                GTA VI
              </strong>
              <br /> <strong className="text-xl md:text-3xl">countdown</strong>
            </h1>
            <span className="h-0.5 bg-white w-96"></span>
          </div>
          <Timer />
         <div className="flex justify-center my-14 py-14"> <a href="https://www.youtube.com/watch?v=QdBZY2fkU-0" target="_blank" className="text-white font-bold text-xl border-2 p-3 hover:bg-white hover:text-black">Watch Trailer</a></div> 
        </section>
      </main>
    </>
  );
}

export default App;
