import CuteCat from "../assets/Cute Cat.jpg"

export default function Home() {
    return (
        <div className="flex flex-col items-center p-8 gap-8">
            <p className="text-5xl font-bold"> Gracelynn's CS180 Homepage </p>
            <img src={CuteCat} alt="Cute Cat" className="w-64" />
            <div>

            </div>
        </div>
    )
}


