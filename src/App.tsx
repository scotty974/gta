
import './App.css'

function App() {
 

  return (
    <>
      <div className="bg-[url('/img/gta6Cover2.jpg')]">
        <div className='flex flex-col h-screen items-center justify-center'>
          <div className='flex flex-col gap-4'>
            <span className='text-center text-xl'>Available on :</span>
            <div className='flex flex-row gap-6 '>
              <div className='play w-16 h-10 bg-bluePlay-opacity-30 border-2 rounded-2xl border-bluePlay'>
                <span className='text-xl text-white'>PS5</span>
              </div>
              <div className='xbox w-16 h-10 bg-greenXbox-opacity-30 border-2 rounded-2xl border-greenXbox'>
                <span className='text-xl text-white'>XBOX</span>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <span className='divider1 w-[366px] h-05 
             bg-white' ></span>
            <div className='flex flex-col'>
              <span className='text-center text-8xl'>GTA VI</span>
              <span className='text-center text-3xl text-white'>Released Date</span>
            </div>
            <span className='divider2 w-[366px]  bg-white'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
