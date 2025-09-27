export default function HW2() {
    const allProcessedImages: Record<string, {default: string}> = import.meta.glob('./processed_images/**/*.jp*g', {eager:true})
    const allOriginalImages: Record<string, {default: string}> = import.meta.glob('./original_images/*.jp*g', {eager:true})
    const sortedProcessedImages: Record<string, string[]> = {}
    
    const taj_grey = allOriginalImages["./original_images/taj_grey.jpg"].default
    const flower_bloom_link = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fflower-bud-blooming&psig=AOvVaw0AKjBe37ryWplS7lSEA65U&ust=1759015971920000&source=images&cd=vfe&opi=89978449&ved=0CBkQjhxqFwoTCMC-v6PL948DFQAAAAAdAAAAABAE"
    const death_star_link = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonezero.medium.com%2Feverything-you-need-to-know-about-death-star-orbital-physics-a451425413fb&psig=AOvVaw2m-Ks7-uNEQWiqosy1G3Fa&ust=1759016843519000&source=images&cd=vfe&opi=89978449&ved=0CBkQjhxqFwoTCNjl1cXO948DFQAAAAAdAAAAABAE"
    const sunset_link = "https://www.google.com/imgres?q=beach&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F17%2Fe0%2Fce%2F85%2Fsunset-beach.jpg%3Fw%3D1200%26h%3D-1%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.com%2FAttraction_Review-g3948623-d103992-Reviews-Sunset_Beach-Lower_Township_Cape_May_County_New_Jersey.html&docid=IRS0dIfr7v79dM&tbnid=dAYfKWMXwF_JZM&vet=12ahUKEwjy9sHty_ePAxXPNzQIHVHYMq4QM3oECB0QAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwjy9sHty_ePAxXPNzQIHVHYMq4QM3oECB0QAA"
    const orange_link = "https://www.walmart.com/ip/Fresh-Navel-Orange-Each/162577028"
    const queen_link = "https://www.shutterstock.com/search/queen-crown-black-white"
    const underwater_link = "https://www.dreamstime.com/beautiful-underwater-tropical-coral-reef-clear-ocean-sea-water-colorful-fish-great-weather-amazing-light-image267014691"

    
    Object.keys(allProcessedImages).forEach(key => {
        const dir = key.split('/')[2]
        if (!sortedProcessedImages[dir]) {
            sortedProcessedImages[dir] = [];
        }
        sortedProcessedImages[dir].push(allProcessedImages[key].default)
    });

    return (
        <div className="p-8 flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold text-white bg-brown w-full p-4 rounded-xl">
                Homework 2
            </h1>

            <div id="1.1" className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
                <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
                Part 1.1
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Images</p>
                <div className="grid grid-rows-3 grid-cols-3 gap-5 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_1_1"]?.map((image) => (
                        <div className="flex flex-col items-center gap-1">
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className="w-48 h-auto rounded-lg cursor-pointer"/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <div className="flex items-center flex-col w-full gap-3">
                    <p className="bg-light-brown p-2 rounded text-dark-brown">Code Snippets</p>
                    <div className="grid grid-rows-2 grid-cols-2 gap-5">
                        {sortedProcessedImages["part_1_1_code"]?.map((image) => (
                            <div className="flex flex-col items-center gap-1 justify-center">
                                    <a href={image} target="_blank" rel="noopener noreferrer">
                                        <img key={image} src={image} alt="" className="w-120 h-auto rounded-lg cursor-pointer"/>
                                    </a>
                                    <p className="text-dark-brown"> 
                                        {image.split('/')[6].split('.')[0]}
                                    </p>
                            </div> 
                        ))}
                    </div>
                </div>

                <div className="flex items-center flex-col w-full gap-3">
                    <p className="bg-light-brown p-2 rounded text-dark-brown">Explanations</p>
                    <p className="text-center">Time Taken:<br/> 4-loop &gt; 2-loop &gt; scipy</p>
                    <p className="text-center">Boundary Hangling:<br/> scipy allows for reflection, wrap or fill with desired number. <br/> 
                        By using fill=0, all 3 used the same boundary handling method</p>
                </div>
            </div>

            <div id ="1.2" className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
                <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
                Part 1.2
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Images</p>
                <div className="grid grid-rows-2 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_1_2"]?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_50_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <div className="flex items-center flex-col w-full gap-3">
                    <p className="bg-light-brown p-2 rounded text-dark-brown">Explanations</p>
                    <p className="text-center">Chosen Image: cameraman_50</p>
                    <p className="text-center">Rationale:<br/> 
                        Contrast cameraman_50 w/ 45 & 55. <br/> 
                        45 has a lot of noise, and detailing inside the camerastick <br/>
                        55 is missing key definitions of edges like the leg and tripod. <br/>
                        50 has a good balance of minimal noise while preserving key edges.
                    </p>
                </div>
            </div>

            <div id ="1.3" className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
                <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
                Part 1.3
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Two Convolution</p>
                <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_1_3"].slice(3, 6)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[7].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">One Convolution</p>
                <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_1_3"].slice(0, 3)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_68_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[7].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <div className="flex items-center flex-col w-full gap-3">
                    <p className="bg-light-brown p-2 rounded text-dark-brown">Explanations</p>
                    <p className="text-center">Chosen Images: cameraman_direct_68 & cameraman_45</p>
                    <p className="text-center">Rationale:<br/> 
                        Similar to above; I put some at a lower and higher threshold for contrast. <br/> 
                        Convolving the gaussian with dx and dy first changed the results slightly in practice <br/>
                        even though theoretically, the math should be identical. <br/>
                        This is I believe, due to how differentiating the gaussian kernel first will change the normalisation properties <br/>
                        such that the edges would be in the same places, but would have different intensities, explaining the different thresholds.
                    </p>
                </div>
            </div>

            <div id ="2.1" className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
                <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
                Part 2.1
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Contrasting Sharpening Alphas</p>
                <div className="grid grid-rows-1 grid-cols-4 p-2 flex-wrap items-center justify-center">
                    <div className={`flex flex-col items-center gap-1 p-2 rounded`}>
                        <a href={taj_grey} target="_blank" rel="noopener noreferrer">
                        <img key={taj_grey} src={taj_grey} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                        </a>
                        <p className="text-dark-brown"> 
                            {taj_grey.split('/')[5].split('.')[0]}
                        </p>
                    </div> 
                    {sortedProcessedImages["part_2_1"]?.slice(-6, -3)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[7].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>
                <p className="text-center rounded text-dark-brown">As you can see, sharpening causes low-mid ranges to fade. <br/>
                    Thus, we will stick with alpha = 2 for greater sharpening without too much loss
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Single Sharpen</p>
                <div className="grid grid-cols-5 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_2_1"]?.slice(5, )?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[7].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Double Sharpen</p>
                <div className="flex flex-col">
                    <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                        {sortedProcessedImages["part_2_1"].slice(2, 5)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_68_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[7].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>
                    <div className="grid grid-rows-1 grid-cols-2 p-2 flex-wrap items-center justify-center">
                        {sortedProcessedImages["part_2_1"].slice(0, 2)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_68_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[7].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>
                    <p className="text-center">
                        As you can see, there exists a difference between taj_2_2 & taj_4. <br/>
                        The two diff_images are the reversed subtraction of taj_2_2 & taj_4. <br/>
                        The difference is due to how gaussian works, whereby g2@g2 ~ g2.83 &lt; g4. <br/>
                        Thus the difference produces the images above
                    </p>
                </div>
            </div>
            
            <div id ="2.2" className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
                <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
                Part 2.2
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Derek + Nutmeg</p>
                <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {[allOriginalImages["./original_images/DerekPicture.jpg"].default, allOriginalImages["./original_images/nutmeg.jpg"].default].map((img) => (<div className={`flex flex-col items-center gap-1 p-2 rounded`}>
                        <a href={img} target="_blank" rel="noopener noreferrer">
                        <img key={img} src={img} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                        </a>
                        <p className="text-dark-brown"> 
                            {img.split('/')[5].split('.')[0]}
                        </p>
                    </div> ))}
                    {sortedProcessedImages["part_2_2"].slice(0, 1)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Blooming Flower</p>
                <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {[allOriginalImages["./original_images/rose_buds_bud.jpg"].default, allOriginalImages["./original_images/rose_buds_bloom.jpg"].default].map((img) => (<div className={`flex flex-col items-center gap-1 p-2 rounded`}>
                        <a href={img} target="_blank" rel="noopener noreferrer">
                        <img key={img} src={img} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                        </a>
                        <p className="text-dark-brown"> 
                            {img.split('/')[5].split('.')[0]}
                        </p>
                    </div> ))}
                    {sortedProcessedImages["part_2_2"].slice(1, 2)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Cute Panda Ghost</p>
                <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {[allOriginalImages["./original_images/pandaless.jpg"].default, allOriginalImages["./original_images/panda.jpg"].default].map((img) => (<div className={`flex flex-col items-center gap-1 p-2 rounded`}>
                        <a href={img} target="_blank" rel="noopener noreferrer">
                        <img key={img} src={img} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                        </a>
                        <p className="text-dark-brown"> 
                            {img.split('/')[5].split('.')[0]}
                        </p>
                    </div> ))}
                    {sortedProcessedImages["part_2_2"].slice(6,7)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Panda Progress</p>
                <div className="grid grid-rows-1 grid-cols-2 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_2_2"].slice(2,4)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                    {sortedProcessedImages["part_2_2"].slice(7,9)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                    {sortedProcessedImages["part_2_2"].slice(4,6)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[6].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                

                <p className="bg-light-brown p-2 rounded text-dark-brown">One Convolution</p>
                <div className="grid grid-rows-1 grid-cols-3 p-2 flex-wrap items-center justify-center">
                    {sortedProcessedImages["part_1_3"].slice(0, 3)?.map((image) => (
                        <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_68_chosen" ? "bg-gray-400" : ""}`}>
                            <a href={image} target="_blank" rel="noopener noreferrer">
                            <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                            </a>
                            <p className="text-dark-brown"> 
                                {image.split('/')[7].split('.')[0]}
                            </p>
                        </div> 
                    ))}
                </div>

                <div className="flex items-center flex-col w-full gap-3">
                    <p className="bg-light-brown p-2 rounded text-dark-brown">Explanations</p>
                    <p className="text-center">Chosen Images: cameraman_direct_68 & cameraman_45</p>
                    <p className="text-center">Rationale:<br/> 
                        Similar to above; I put some at a lower and higher threshold for contrast. <br/> 
                        Convolving the gaussian with dx and dy first changed the results slightly in practice <br/>
                        even though theoretically, the math should be identical. <br/>
                        This is I believe, due to how differentiating the gaussian kernel first will change the normalisation properties <br/>
                        such that the edges would be in the same places, but would have different intensities, explaining the different thresholds.
                    </p>
                </div>
            </div>

            <div id ="2.3.4" className="flex flex-col justify-center align-center items-center gap-3 bg-beige w-full py-4">
                <p className="text-xl w-1/3 p-1 bg-brown text-white font-bold rounded-[0.5rem] text-center">
                Part 2.3 & Part 2.4
                </p>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Oraple</p>
                <div className="flex flex-row justify-center items-center align-center">
                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_3"].slice(13, 17)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_3"].slice(17, 21)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    {/* Masks */}
                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_3"].slice(21, 26)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_3"].slice(0, 5)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Orange & deathstar</p>
                <div className="flex flex-row justify-center items-center align-center">
                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(26, 30)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(30, 34)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(42, 46)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(0, 5)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>
                </div>

                <p className="bg-light-brown p-2 rounded text-dark-brown">Underwater + Sunset</p>
                <div className="flex flex-row justify-center items-center align-center">
                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(34, 38)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(38, 42)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(46, 50)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>

                    <div className="grid grid-rows-5 grid-cols-1 p-2 flex-wrap items-center justify-center grid-flow-col">
                        {sortedProcessedImages["part_2_4"].slice(5, 10)?.map((image) => (
                            <div className={`flex flex-col items-center gap-1 p-2 rounded ${image.split('/')[6].split('.')[0] == "cameraman_45_chosen" ? "bg-gray-400" : ""}`}>
                                <a href={image} target="_blank" rel="noopener noreferrer">
                                <img key={image} src={image} alt="" className={`w-48 h-auto rounded-lg cursor-pointer`}/>
                                </a>
                                <p className="text-dark-brown"> 
                                    {image.split('/')[6].split('.')[0]}
                                </p>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p>Credits</p>
                <p>Flower Blooms: <a href={flower_bloom_link}>Link</a></p>
                <p>Underwater: <a href={underwater_link}>Link</a></p>
                <p>Sunset: <a href={sunset_link}>Link</a></p>
                <p>Queen: <a href={queen_link}>Link</a></p>
                <p>Orange: <a href={orange_link}>Link</a></p>
                <p>Death Star: <a href={death_star_link}>Link</a></p>
            </div>
        </div>
    );
}
