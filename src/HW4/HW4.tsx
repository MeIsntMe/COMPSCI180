import 'katex/dist/katex.min.css'

export default function Proj4() {
  // ---------- IMPORTS FOR IMAGES / GIFS ----------

  // Part 0: Camera calibration & 3D scanning (2 Viser screenshots)
  const Part0ViserImports: Record<string, { default: string }> =
    import.meta.glob('./Part_0/*.*', { eager: true })

  // Part 1: 2D neural field
  const Part1ProvidedProgressImports: Record<string, { default: string }> =
    import.meta.glob('./Part_1_Results/provided_image/*.*', { eager: true })
  const Part1OwnProgressImports: Record<string, { default: string }> =
    import.meta.glob('./Part_1_Results/original_image/*.*', { eager: true })
  const Part1OriginalImagesImports: Record<string, { default: string }> =
    import.meta.glob('./Part_1_Origin/*.*', { eager: true })
  const Part1PSNRImports: Record<string, { default: string }> =
    import.meta.glob('./Part_1_Results/contrast/*.*', { eager: true })

  // Part 2: Lego NeRF
  const Part2RaysSamplesImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Lego_Images/Ray Renders/*.*', { eager: true })
  const Part2ProgressImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Lego_Images/*.*', { eager: true })
  const Part2PSNRImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Lego_Images/PSNR/*.*', { eager: true })
  const Part2SphericalImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Lego_Images/Spherical_Video/*.*', { eager: true }) // gif/mp4/webm etc.

  // Part 2.6: Your own data NeRF
  const Part26GifImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Original_Images/Spherical_Video/*.*', { eager: true })
  const Part26LossImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Original_Images/PSNR/*.*', { eager: true })
  const Part26IntermediateImports: Record<string, { default: string }> =
    import.meta.glob('./Part_2_Original_Images/training_frames/*.*', { eager: true })

  // Helper to turn glob results into a sorted array with name + src
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

  const part0Viser = toImageArray(Part0ViserImports)

  const part1Provided = toImageArray(Part1ProvidedProgressImports)
  const part1Own = toImageArray(Part1OwnProgressImports)
  const Part1OriginalImages = toImageArray(Part1OriginalImagesImports)

  const part2RaysSamples = toImageArray(Part2RaysSamplesImports)
  const part2Progress = toImageArray(Part2ProgressImports)
  const part2PSNR = toImageArray(Part2PSNRImports)
  const part2Spherical = toImageArray(Part2SphericalImports)

  const part26Gif = toImageArray(Part26GifImports)
  const part26Loss = toImageArray(Part26LossImports)
  const part26Intermediate = toImageArray(Part26IntermediateImports)

  return (
    <div className="p-8 flex flex-col items-center gap-6">
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-white bg-brown w-full max-w-5xl p-4 rounded-xl text-center">
          Project 4: Neural Radiance Fields (NeRF)
        </h1>
      </div>

      {/* ===== Part 0: Camera Calibration & 3D Scanning ===== */}
      <section
        id="part0"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 0: Camera Calibration & 3D Scanning
        </h2>

        {/* 0.1 Camera Calibration */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Frustums Visualization
          </h3>
          <div className='flex items-center justify-center gap-8'>
            {part0Viser.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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

      {/* ===== Part 1: 2D Neural Field ===== */}
      <section
        id="part1"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 1: Neural Field for a 2D Image
        </h2>

        {/* Architecture & hyperparameters */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            1.1 Network Architecture & Hyperparameters
          </h3>
          <p className="text-sm text-gray-800">
            Layers: 3, Width: 512, Learning Rate: 1e-3
          </p>
        </div>

        {/* Training progression: provided image */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            1.2 Training Progression — Provided Image
          </h3>
          <p className="text-sm text-gray-800">
            {/* TODO: Note which iterations are shown (e.g., 0, 200, 500, 1000, 2000, 3000). */}
          </p>
          <div className='flex items-center justify-center gap-8'>
            {Part1OriginalImages.slice(1,2)?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {part1Provided.slice(4,5)?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {part1Provided.slice(0,4)?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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

        {/* Training progression: own image */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            1.3 Training Progression — Own Image
          </h3>
          <p className="text-sm text-gray-800">
            {/* TODO: Mention what image you chose and any differences you noticed vs the provided image. */}
          </p>
          <div className='flex items-center justify-center gap-8'>
            {Part1OriginalImages.slice(0,1)?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img.src}
                    alt={img.name}
                    className="w-full h-auto rounded-md cursor-pointer"
                  />
                </a>
                <p className="text-xs text-gray-700">{img.name}</p>
              </div>
            ))}
            {part1Own.slice(4,5)?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm w-1/3"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {part1Own.slice(0,4)?.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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

      {/* ===== Part 2: Lego NeRF ===== */}
      <section
        id="part2"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 2: Neural Radiance Field for the Lego Scene
        </h2>

        {/* Brief description of each subpart */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Implementation Description
          </h3>
          <p className="text-sm text-gray-800">
            Conversion of pixels to rays is straightforward, following the instructions given. <br/>
            For sampling, I decided to sampling N number/images instread of flattening <br/>
            In the creation of the MLP for nerf, I followed the suggested structure <br/>
            In the rendering part, I sampled along the rays and performed the integration formula, using the following params <br/> 
            Width=512, num_iters=1000, n_sample=64, rays_per_batch=4096, Learning Rate = 1e-5
          </p>
        </div>

        {/* Rays + samples visualization */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-dark-brown">
            Cameras, Rays & Samples Visualization
          </h3>
          <p className="text-sm text-gray-800">
            {/* TODO: Mention how many rays you plotted (~100) and any sanity checks you did
                (e.g., rays staying inside frustums, top-left subset tests, etc.). */}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {part2RaysSamples.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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

        {/* Training progression & PSNR */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-dark-brown">
              Training Progression (Lego)
            </h3>
            <p className="text-sm text-gray-800">
              {/* TODO: Explain the training setup:
                  - Learning rate, batch size (e.g., 10k rays), # gradient steps
                  - Final PSNR reached and approximate iteration where it stabilizes */}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {part2Progress.map((img) => (
                <div
                  key={img.src}
                  className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
                >
                  <a href={img.src} target="_blank" rel="noopener noreferrer">
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
            <h3 className="text-lg font-semibold text-dark-brown">
              PSNR Curve on Validation Set
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {part2PSNR.map((img) => (
                <div
                  key={img.src}
                  className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
                >
                  <a href={img.src} target="_blank" rel="noopener noreferrer">
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
        </div>

        {/* Spherical rendering video */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-dark-brown">
            Spherical Rendering of Lego
          </h3>
          <p className="text-sm text-gray-800">
            {/* TODO: Briefly describe how you iterated over c2ws_test and rendered frames.
                If you used a gif instead of a video, mention that here. */}
          </p>
          <div className="flex flex-col items-center gap-4">
            {part2Spherical.map((media) => {
              const ext = media.src.split('.').pop()?.toLowerCase()
              const isVideo =
                ext === 'mp4' || ext === 'webm' || ext === 'mov' || ext === 'mkv'

              return (
                <div
                  key={media.src}
                  className="w-full flex flex-col items-center bg-white rounded-lg p-2 shadow-sm"
                >
                  {isVideo ? (
                    <video
                      src={media.src}
                      controls
                      loop
                      className="w-full max-w-xl rounded-md"
                    />
                  ) : (
                    <a
                      href={media.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={media.src}
                        alt={media.name}
                        className="w-full max-w-xl h-auto rounded-md cursor-pointer"
                      />
                    </a>
                  )}
                  <p className="text-xs text-gray-700 mt-1">{media.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== Part 2.6: Your Own Object NeRF ===== */}
      <section
        id="part2_6"
        className="w-full max-w-5xl bg-beige rounded-xl p-5 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold bg-brown text-white p-3 rounded text-center">
          Part 2.6: NeRF on Original Dataset
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Dataset & Hyperperameters
          </h3>
          <p className="text-sm text-gray-800">
            I took a set of photos of a panda with the aruco tags. <br/>
            I used the same MLP configuration as with the lego dataset, except I reduced the width to 256 for initial testing <br/>
            Despite numerous attempts however, I was unable to get the initial tests to display anything remotely similar to my pictures even after long training. <br/>
            The following is my best attempts.
          </p>
        </div>

        {/* Gif of camera circling object */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Original Dataset Video
          </h3>
          <div className="flex flex-col items-center gap-4">
            {part26Gif.map((media) => {
              const ext = media.src.split('.').pop()?.toLowerCase()
              const isVideo =
                ext === 'mp4' || ext === 'webm' || ext === 'mov' || ext === 'mkv'

              return (
                <div
                  key={media.src}
                  className="w-full flex flex-col items-center bg-white rounded-lg p-2 shadow-sm"
                >
                  {isVideo ? (
                    <video
                      src={media.src}
                      controls
                      loop
                      className="w-full max-w-xl rounded-md"
                    />
                  ) : (
                    <a
                      href={media.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={media.src}
                        alt={media.name}
                        className="w-full max-w-xl h-auto rounded-md cursor-pointer"
                      />
                    </a>
                  )}
                  <p className="text-xs text-gray-700 mt-1">{media.name}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Loss curve */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            PSNR Graph
          </h3>
          <p className="text-sm text-gray-800">
            {/* TODO: Comment on convergence behaviour, overfitting / underfitting, etc. */}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {part26Loss.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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

        {/* Intermediate renders */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-dark-brown">
            Intermediate Renders During Training
          </h3>
          <p className="text-sm text-gray-800">
            {/* TODO: Note the iterations shown (e.g., 500, 2000, 6000, ...), and how the visual
                quality evolves (noise, floating artifacts, sharpening, etc.). */}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {part26Intermediate.map((img) => (
              <div
                key={img.src}
                className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-sm"
              >
                <a href={img.src} target="_blank" rel="noopener noreferrer">
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
