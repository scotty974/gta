import "./App.css";
import Timer from "./components/Timer";
function App() {
  return (
    <>
      <main className="bg-[url('/img/gta6Cover.png')] bg-center bg-cover h-screen py-8 ">
        <section className="container m-auto brightness-none">
          <div className="flex flex-col">
            <h2 className="text-center text-white text-lg my-8">
              Available on {" "}
            </h2>
            <div className="flex justify-around w-40 m-auto">
              <h4 className="text-lg text-white font-bold bg-blue-600 hover:bg-blue-600 bg-opacity-30 p-1 px-3 rounded-full border border-blue-800">
                PS5
              </h4>
              <h4 className="text-lg text-white font-bold bg-green-600 hover:bg-green-600 bg-opacity-30 p-1 px-3 rounded-full border border-green-800">
                XBOX
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center my-24 gap-8">
            <span className="h-0.5 bg-white w-96"></span>
            <h1 className="text-center text-4xl text-white" >
              <strong className="text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-orange">
                GTA VI
              </strong>
              <br /> countdown
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
