import 'katex/dist/katex.min.css'

export default function Proj4() {
  // ---------- IMPORTS FOR IMAGES / GIFS ----------

  const A1imports: Record<string, { default: string }> = import.meta.glob('./A_1_Results/*/*.*', { eager: true }) 
  const A1Originals: Record<string, { default: string }> = import.meta.glob('./A_1_Origin/*.*', { eager: true }) 

  const toImageArray = (glob: Record<string, { default: string }>) =>
    Object.entries(glob)
      .map(([path, mod]) => {
        const filename = path.split('/').pop() ?? path
        return {
          src: mod.default,
          name: filename.split('.')[0],
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

  const folderNames_1 = Array.from(
    new Set(
      Object.keys(A1imports).map(path =>
        path.split('/').slice(-2)[0]       // "Part_0"
      )
    )
  )
  

  // Helper to turn glob results into a sorted array with name + src
  const A1Origins = toImageArray(A1Originals);
  const A1Results: Record<string, { src: string; name: string }[]> =
  Object.fromEntries(
    folderNames_1.map(folder => {
      const folderGlob = Object.fromEntries(
        Object.entries(A1imports).filter(([path]) => {
          const segFolder = path.split('/').slice(-2)[0]
          return segFolder === folder
        })
      )
      return [folder, toImageArray(folderGlob)]
    })
  )

  return (
    <div className="p-8 flex flex-col items-center gap-6">
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-white bg-brown w-full max-w-5xl p-4 rounded-xl text-center">
          Project 5A: The Power of Diffusion Models
        </h1>
      </div>

      {/* ===== Part 0: Camera Calibration & 3D Scanning ===== */}
      <section
        id="part0"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 0: Setup
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='grid grid-cols-4 items-center justify-center gap-8'>
            {A1Results["intro"]?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img.src}
                    alt={img.name.split("_").at(-1)}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name.split("_").at(-1)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_1"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.1: Implementing the Forward Process
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_1"]?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_2"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.2: Classical Denoising
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_2"]?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_3"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.3: One-Step Denoising
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_3"]?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_4"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.4: Iterative Denoising
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_4"]?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_5"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.5: Diffusion Model Sampling
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_5"]?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/5"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={(img.name.split("_").slice(-2)).join('_')}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{(img.name.split("_").slice(-2)).join('_')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_6"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.6: Classifier-Free Guidance (CFG)
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Interesting Generations
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_6"]?.slice(0, 1).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_6"]?.slice(3, 6).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_6"]?.slice(1, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_7"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.7: Image-to-image Translation
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Campanile
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7"]?.slice(0, 1).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7"]?.slice(3, 6).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7"]?.slice(1, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Panda
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7"]?.slice(6, 7).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7"]?.slice(9, 12).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7"]?.slice(7, 9).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            River
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7"]?.slice(12, 13).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7"]?.slice(15, 18).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7"]?.slice(13, 15).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_7_1"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.7.1: Editing Hand-Drawn and Web Images
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Campanile
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_1"]?.slice(0, 1).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_1"]?.slice(3, 6).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_1"]?.slice(1, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Hand Drawn: Pizza
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_1"]?.slice(6, 7).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_1"]?.slice(9, 12).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_1"]?.slice(7, 9).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Hand Drawn: Plant
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_1"]?.slice(12, 13).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_1"]?.slice(15, 18).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_1"]?.slice(13, 15).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_7_2"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.7.2: Inpainting
        </h2>
        
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Original Images
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Origins?.slice(1, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Origins?.slice(4, 5).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
        

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Campanile
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_7_2"]?.slice(0, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Galaxy
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_7_2"]?.slice(3, 4).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_2"]?.slice(5,6).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_2"]?.slice(7,8).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Galaxy
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_7_2"]?.slice(8, 10).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_2"]?.slice(11, 12).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_7_3"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.7.3: Editing Hand-Drawn and Web Images
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Campanile: Existential Crisis
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_3"]?.slice(0, 1).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(3, 6).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(1, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Galaxy: A bright galaxy full of stars
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_3"]?.slice(6, 7).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(9, 12).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(7, 9).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Galaxy: A rainbow rose blooming
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_3"]?.slice(12, 13).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(15, 18).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(13, 15).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Helmet: a bright galaxy full of star
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_3"]?.slice(18, 19).map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img src={img.src} alt={img.name} className="w-full h-auto rounded-md cursor-pointer" />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(21, 24).map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img src={img.src} alt={img.name} className="w-full h-auto rounded-md cursor-pointer" />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(19, 21).map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img src={img.src} alt={img.name} className="w-full h-auto rounded-md cursor-pointer" />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Helmet: hollow knight main character
          </h3>
          <div className='grid grid-cols-3 items-center justify-center gap-8'>
            {A1Results["1_7_3"]?.slice(24, 25).map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img src={img.src} alt={img.name} className="w-full h-auto rounded-md cursor-pointer" />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(27, 30).map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img src={img.src} alt={img.name} className="w-full h-auto rounded-md cursor-pointer" />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {A1Results["1_7_3"]?.slice(25, 27).map((img) => (
              <div key={img.src} className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img src={img.src} alt={img.name} className="w-full h-auto rounded-md cursor-pointer" />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_8"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.8: Visual Anagrams
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            an oil painting of people around a campfire & an oil painting of an old man
          </h3>
          <div className='grid grid-cols-2 items-center justify-center gap-8'>
            {A1Results["1_8"]?.slice(0, 4).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            piles of dead robots in junkyard & a robot winning a championship
          </h3>
          <div className='grid grid-cols-2 items-center justify-center gap-8'>
            {A1Results["1_8"]?.slice(4).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="part1_9"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1.9: Hybrid Images
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Rocket & Pencil
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_9"]?.slice(0, 3).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            a sleeping fox & an angry cat
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {A1Results["1_9"]?.slice(10, 13).map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer" className='w-2/3'>
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
