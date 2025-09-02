import face1 from "./Face 1.jpg"
import face2 from "./Face 2.jpg"
import pandaGif from "./Good Panda GIF.gif"
import urbanPath1 from "./Urban Path 1.jpg"
import urbanPath2 from "./Urban Path 2.jpg"

export default function HW0() {
  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-white bg-text-default w-full p-4 rounded-xl">Homework 0</h1>
      <div className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
        <p className="text-xl w-1/3 p-1 bg-text-default text-white font-bold rounded">Face</p>
        <div className="flex flex-row gap-10 p-2">
            <div className="flex flex-col gap-2">
                <img src={face1} alt="Face 1" className="w-32 " />
                <p className="font-bold pb-1">Zoomed in</p>
            </div>
            <div className="flex flex-col gap-2">
                <img src={face2} alt="Face 2" className="w-32 " />
                <p className="font-bold pb-1">Zoomed out</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
        <p className="text-xl w-1/3 p-1 bg-text-default text-white font-bold rounded">Urban Path</p>
        <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2">
                <img src={urbanPath1} alt="Face 1" className="w-32 " />
                <p className="font-bold pb-1">Zoomed in</p>
            </div>
            <div className="flex flex-col gap-2">
                <img src={urbanPath2} alt="Face 2" className="w-32 " />
                <p className="font-bold pb-1">Zoomed out</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
        <p className="text-xl w-1/3 p-1 bg-text-default text-white font-bold rounded">GIF</p>
        <div className="flex flex-col gap-2">
            <img src={pandaGif} alt="Face 2" className="w-32 pb-1" />
        </div>
      </div>
    </div>
  )
}