import 'katex/dist/katex.min.css'
import { BlockMath } from 'react-katex'
import Homographies from "./Homographies.json";


export default function HW3() {
    const OriginalImageImports: Record<string, {default: string}> = import.meta.glob('./1_1/*.jp*g', {eager:true});
    const A2ImagesImports: Record<string, {default: string}> = import.meta.glob('./1_2/*.png', {eager:true});
    const A3ImagesImports: Record<string, {default: string}> = import.meta.glob('./1_3/*.jp*g', {eager:true});
    const A4ImagesImports: Record<string, {default: string}> = import.meta.glob('./1_4/*.jp*g', {eager:true});

    const allOriginalImages: Record<string, string>  = {}
    const A2Images: Record<string, string>  = {}
    const A3Images: Record<string, string>  = {}
    const A4Images: Record<string, string>  = {}

    Object.keys(OriginalImageImports).forEach(key => {
        const new_key = key.split('-')[0];
        allOriginalImages[new_key] = OriginalImageImports[key].default;
    });

    Object.keys(A2ImagesImports).forEach(key => {
        const new_key = key.split('-')[0];
        A2Images[new_key] = A2ImagesImports[key].default;
    });
    Object.keys(A3ImagesImports).forEach(key => {
        const new_key = key.split('-')[0];
        A3Images[new_key] = A3ImagesImports[key].default;
    });
    Object.keys(A4ImagesImports).forEach(key => {
        const new_key = key.split('-')[0];
        A4Images[new_key] = A4ImagesImports[key].default;
    });

    const HaasImages: Record<string, string> = Object.fromEntries(
        Object.entries(allOriginalImages).filter(([key]) => key.includes("Haas"))
    );
    const StadiumImages: Record<string, string> = Object.fromEntries(
        Object.entries(allOriginalImages).filter(([key]) => key.includes("Stadium"))
    );
    const StationImages: Record<string, string> = Object.fromEntries(
        Object.entries(allOriginalImages).filter(([key]) => key.includes("Station"))
    );


  return (
    <div className="p-8 flex flex-col items-center gap-6">
      {/* Header */}
      <header className="w-full flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-white bg-brown w-full max-w-5xl p-4 rounded-xl text-center">
          Homework 3
        </h1>
      </header>

      {/* A.1: Take Pictures */}
      <section id="A1" className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4">
        <h3 className="text-xl w-full p-2 bg-brown text-white font-bold rounded text-center">A.1: Shoot the Pictures</h3>
        <p className="text-center bg-light-brown p-2 rounded w-1/3 self-center mb-4">Initial Image Sets</p>
        <div>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(HaasImages).map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-48 h-auto rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {Object.entries(StadiumImages).map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-48 h-auto rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {Object.entries(StationImages).map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-48 h-auto rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
          </div>
        </div>
      </section>

      {/* A.2: Recover Homographies */}
      <section id="A2" className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4">
        <h3 className="text-xl w-full p-2 bg-brown text-white font-bold rounded text-center">A.2: Recover Homographies</h3>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Point Correspondences Visualization</p>
        <div className="bg-white rounded p-2 text-dark-brown">
          <div className="grid grid-cols-2 gap-4 mt-2">
            {Object.entries(A2Images).map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-auto h-80px rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
          </div>
        </div>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">System of Equations</p>
        <div className="border border-light-brown border-2 rounded p-3 text-dark-brown text-center">
            <div className="flex flex-col gap-2 justify-center items-center">
                <p>For each correspondence (x, y) ↔ (x′, y′), the formula is:</p>
                <BlockMath math={`
                \\begin{bmatrix}
                x & y & 1 & 0 & 0 & 0 & -x x' & -y x' \\\\
                0 & 0 & 0 & x & y & 1 & -x y' & -y y' 
                \\end{bmatrix}
                \\begin{bmatrix}
                h_{11}\\\\h_{12}\\\\h_{13}\\\\h_{21}\\\\h_{22}\\\\h_{23}\\\\h_{31}\\\\h_{32}
                \\end{bmatrix}
                =
                \\begin{bmatrix}
                x'\\\\y'
                \\end{bmatrix}
                `} />
                <p>Shifting variables around, and where h33 == 1, we get</p>
                <BlockMath math={`
                    \\begin{aligned}
                    x' &= \\frac{h_{11}x + h_{12}y + h_{13}}{h_{31}x + h_{32}y + h_{33}} \\\\[6pt]
                    y' &= \\frac{h_{21}x + h_{22}y + h_{23}}{h_{31}x + h_{32}y + h_{33}}
                    \\end{aligned}
                `} />
                <p>
                    Thus, we can solve for x', y' given the homography and original coordinates x, y<br/>
                    Notably, this also means that given correspondences multiple (x, y) ↔ (x′, y′), we can find H.<br/>
                    Minimum correspondences is 8, since h33 is known as 1. However, due to human error, we take more correspondences<br/>
                    These correspondences are then solved via linear regression, specifically the function <strong>np.linalg.lstsq()</strong>
                </p>
            </div>
        </div>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Recovered Homography (H)</p>
        <div className="border border-light-brown border-3 rounded p-3 text-dark-brown">
            {Object.entries(Homographies).map(([name, matrix]) => (
                <div key={name} className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-3">{name}</h2>
                    <BlockMath
                        math={`
                        H_{${name.replace(/_/g, "\\_")}} =
                        \\begin{bmatrix}
                            ${matrix[0].map(v => v.toFixed(6)).join(" & ")} \\\\
                            ${matrix[1].map(v => v.toFixed(6)).join(" & ")} \\\\
                            ${matrix[2].map(v => v.toFixed(6)).join(" & ")}
                        \\end{bmatrix}
                        `}
                    />
                </div>
            ))}
        </div>
      </section>

      {/* A.3: Warp Images */}
      <section id="A3" className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4">
        <h3 className="text-xl w-full p-2 bg-brown text-white font-bold rounded text-center">A.3: Warp the Images</h3>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Explanation</p>
        <div className="border border-light-brown border-3 text-dark-brown text-center flex flex-col gap-4 py-4">
          <p>
            2 main methods were implemented: <strong>warpImageNearestNeighbor(im,H)</strong> & <strong>warpImageBilinear(im,H)</strong><br/>
            warpImageNearestNeighbor: Chooses the closest pixel and copies it directly<br/>
            warpImageBilinear: Takes the weighted sum of the closest 4 pixels<br/>
            2 variations of each method was implemented: full & simple.<br/>
          </p>
          <p>
            <strong>Simple Method</strong><br/>
            Implements the interpolation and does not guarantee what is in frame<br/>
          </p>
          <p>
            <strong>Full method</strong><br/> 
            Implements the interpolation, ensuring that all non-0 pixels are in frame<br/>
            Compresses the final output to fit within a reasonable size to avoid exploding pixel counts <br/>
          </p>
        </div>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Original Images</p>
        <div className="grid grid-cols-2 gap-4">
            {Object.entries(allOriginalImages).slice(-2,)?.map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-60 h-auto rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
        </div>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Station Map</p>
        <div className="grid grid-cols-3 gap-4">
            {Object.entries(A3Images).slice(0,6)?.map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-60 h-auto rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
        </div>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Taco Square</p>
        <div className="grid grid-cols-3 gap-4">
            {Object.entries(A3Images).slice(6,)?.map(([name, image]) => (
                <div className="flex flex-col items-center gap-1">
                    <a href={image} target="_blank" rel="noopener noreferrer">
                        <img key={image} src={image.split('-')[0]} alt={name} className="w-60 h-auto rounded-lg cursor-pointer"/>
                    </a>
                    <p className="text-dark-brown"> 
                        {image.split('/').pop()?.split('.')[0]}
                    </p>
                </div> 
            ))}
        </div>
      </section>

      {/* A.4: Blend Mosaics */}
      <section id="A4" className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4">
        <h3 className="text-xl w-full p-2 bg-brown text-white font-bold rounded text-center">A.4: Blend the Images into a Mosaic</h3>
        <p className="font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Explanation</p>
        <div className="border border-light-brown border-3 text-dark-brown text-center flex flex-col gap-2 py-4">
          <p><strong>Steps</strong><br/></p>
          <ol className='list-decimal list-inside gap-2'>
            <li>Get Homography between side images to center image & warp</li>
            <p className='italic text-gray-400'>
                (Note: I used the full warpped image that was cropped to remove black boundaries.<br/>
                This required an additional shift and scaling component that is also returned.)
            </p>
            <li>
                Combine each warped image with the center image by calculating offset via the shift<br/>
                used in the Homography in the earlier part. Record the center of the original image.
            </li>
            <p className='italic text-gray-400'>
                (Note: Blending of the images uses a simple horizontal log-gradient transition within the overlap.)
            </p>
            <li>
                Using the center of the original image, overlay the merged_left & merged_right components
            </li>
            
          </ol>
          

        </div>
        <p className="font-font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Haas</p>
        <div className="bg-white rounded p-3 text-dark-brown">
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-2 mb-2 justify-center items-center">
                    {Object.entries(A4Images).slice(0,4)?.map(([name, image]) => (
                        <div className="flex flex-col items-center gap-1">
                            <a href={image} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <img key={image} src={image.split('-')[0]} alt={name} className="w-3/4 h-auto rounded-lg cursor-pointer"/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/').pop()?.split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>
                {Object.entries(A4Images).slice(4, 5)?.map(([name, image]) => (
                    <div className="flex flex-col items-center gap-1 self-center">
                        <a href={image} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <img key={image} src={image.split('-')[0]} alt={name} className="w-5/6 h-auto rounded-lg cursor-pointer"/>
                        </a>
                        <p className="text-dark-brown"> 
                            {image.split('/').pop()?.split('.')[0]}
                        </p>
                    </div> 
                ))}
                </div>
            </div>
        </div>
        <p className="font-font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Stadium</p>
        <div className="bg-white rounded p-3 text-dark-brown">
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-2 mb-2 justify-center items-center">
                    {Object.entries(A4Images).slice(5,9)?.map(([name, image]) => (
                        <div className="flex flex-col items-center gap-1">
                            <a href={image} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <img key={image} src={image.split('-')[0]} alt={name} className="w-3/4 h-auto rounded-lg cursor-pointer"/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/').pop()?.split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>
                {Object.entries(A4Images).slice(9,10)?.map(([name, image]) => (
                    <div className="flex flex-col items-center gap-1 self-center">
                        <a href={image} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <img key={image} src={image.split('-')[0]} alt={name} className="w-5/6 h-auto rounded-lg cursor-pointer"/>
                        </a>
                        <p className="text-dark-brown"> 
                            {image.split('/').pop()?.split('.')[0]}
                        </p>
                    </div> 
                ))}
                </div>
            </div>
        </div>
        <p className="font-font-semibold text-center bg-light-brown p-2 rounded w-1/3 self-center">Station</p>
        <div className="bg-white rounded p-3 text-dark-brown">
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-2 mb-2 justify-center items-center">
                    {Object.entries(A4Images).slice(10, 14)?.map(([name, image]) => (
                        <div className="flex flex-col items-center gap-1">
                            <a href={image} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <img key={image} src={image.split('-')[0]} alt={name} className="w-3/4 h-auto rounded-lg cursor-pointer"/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/').pop()?.split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>
                {Object.entries(A4Images).slice(14, )?.map(([name, image]) => (
                    <div className="flex flex-col items-center gap-1 self-center">
                        <a href={image} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <img key={image} src={image.split('-')[0]} alt={name} className="w-5/6 h-auto rounded-lg cursor-pointer"/>
                        </a>
                        <p className="text-dark-brown"> 
                            {image.split('/').pop()?.split('.')[0]}
                        </p>
                    </div> 
                ))}
                </div>
            </div>
        </div>
      </section>

      {/* Credits */}
      <footer className="w-full max-w-5xl flex flex-col items-start gap-1">
        <p className="text-sm text-gray-600">Credits</p>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Correspondence tool (Get Pixels): https://pixspy.com/</li>
          <li>Correspondence tool (Get Display): https://cal-cs180.github.io/fa23/hw/proj3/tool.html</li>
        </ul>
      </footer>
    </div>
  );
}
