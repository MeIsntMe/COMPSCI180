import { useEffect, useState } from "react";

interface Module {
  path: string;
  src: string;
}

export default function HW1() {
  const CI = import.meta.glob('./ProjectData/coloured_images/*_resized.jpg', { eager: true });
  const CIS = import.meta.glob('./ProjectData/coloured_images_self/*_resized.jpg', { eager: true });
  const OI = import.meta.glob('./ProjectData/original_images/*.jpg', { eager: true });
  const OIS = import.meta.glob('./ProjectData/original_images_self/*.jpg', { eager: true });

  const [processedModules, setProcessedModules] = useState<Module[][]>([]);

  useEffect(() => {
    // Helper function to convert imported modules to array
    const processModule = (mod: Record<string, any>): Module[] =>
      Object.entries(mod).map(([path, m]) => ({
        path,
        src: (m as any).default,
      }));

    const allModules = [
      processModule(CI),
      processModule(CIS),
      processModule(OI),
      processModule(OIS)
    ];

    setProcessedModules(allModules);
    console.log("test");
    console.log(allModules[0]);
  }, []);

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-white bg-brown w-full p-4 rounded-xl">
        Homework 1
      </h1>

      <div className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
        <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
          Given Images
        </p>

        <div className="flex flex-row gap-10 p-2 flex-wrap items-center justify-center">
          {processedModules[0]?.map((image) => (
            
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <img key={image.path} src={image.src} alt="" className="w-48 h-auto rounded-lg cursor-pointer"/>
            </a>
            
          ))}
        </div>

      </div>

      <div className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
        <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
          Chosen Images
        </p>

        <div className="flex flex-row gap-10 p-2 flex-wrap justify-center">
          {processedModules[1]?.map((image) => (
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <img key={image.path} src={image.src} alt="" className="w-48 h-auto rounded-lg cursor-pointer"/>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
        <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
          Explanation
        </p>

        <div className="flex flex-col rounded-[0.5rem] w-full justify-center items-center">
          <p className="text-[1.3rem] w-3/4 p-1 bg-light-brown text-dark-brown font-bold text-center">
            Single Scale Alignment
          </p>
          <p className="text-l w-3/4 p-1 bg-light-brown text-dark-brown text-center">
            1. Separate the 3 channels  <br/>
            2. Use NNC to find the best alignment between B & R and B & G, with 1 representing a perfect copy and -1 represents a perfect inverse. <br/>
            In this project, the range checked with NCC was [-15, 15] for both the x & y axis.
          </p>
          <p className="text-[1.1rem] w-3/4 font-bold p-1 bg-light-brown text-dark-brown text-center p-1">
            NCC Formula: (a · b) / (|a| |b|), where a & b are the 2 channels
          </p>
          <p className="text-l w-3/4 p-1 bg-light-brown text-dark-brown text-center">
            3. Align R & G channels to B channel, using the dx, dy with the highest NCC score in step 2  <br/>
          </p>
          <p className="text-m w-3/4 p-1 bg-light-brown text-dark-brown text-center italic">
            Note: When calculating NCC, to reduce the noise of the borders, only consider the center portion. <br/>
            This project ignored the 0.1 border of the images when calculating NCC.
          </p>
        </div>

        <div className="flex flex-col rounded-[0.5rem] w-full justify-center items-center">
          <p className="text-[1.3rem] w-3/4 p-1 bg-light-brown text-dark-brown font-bold text-center">
            Multi-Scale Pyramid Alignment
          </p>
          <p className="text-l w-3/4 p-1 bg-light-brown text-dark-brown text-center">
            The difficulty with large images is 2 fold: <br/>
            1. More shifts due to more pixels  <br/>
            2. Longer processing time per shift <br/>
            To solve this, we create a pyramid structure where we calculate at a granular level before slowly increasing in detail.
          </p>
          <p className="text-l w-3/4 p-1 bg-light-brown text-dark-brown text-center">
            1. Downsize the initial image by a factor of 2 to create a more granular layer. Repeat until image is sufficiently small. <br/>
            I repeated until the image was &lt;600 pixels in the largest dimension <br/>
            2. Align the image at the coarsest level using the NCC described in Single Scale Alignment above. <br/>
            3. Use the ideal dx, dy from the granular level as the starting point for NCC for the larger, more detailed layer. <br/>
            Ensure that the initial dx, dy is first multiplied by the scaling factor (2 for this project). <br/>
            4. Repeat the process until you fully resolve the original layer. <br/>
          </p>
          <p className="text-m w-3/4 p-1 bg-light-brown text-dark-brown text-center italic">
            Note: The range checked should decrease as the layer you are checking increases in size. <br/>
            e.g. Least Detailed: 15 -&gt; Medium: 7 -&gt; Most Detailed: 2 <br/>
            This is due to us already having a good approximation for more detailed layers.
          </p>
          <p className="text-l w-3/4 p-1 bg-light-brown text-dark-brown text-center">
            Downsizing Method: <br/>
            1. Apply a gaussian blur to reduce noise & make sampling less abrupt <br/>
            2. Sample every other pixel to obtain an image scaled down by 2 in both x & y dimension.
          </p>
        </div>
      </div>
    </div>
  );
}
