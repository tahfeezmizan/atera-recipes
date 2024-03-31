
const Banner = () => {
    return (
        <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 pb-20">
            <div className="slider bg-img rounded-3xl h-[600px] flex flex-col items-center justify-center">
                {/* banner text container  */}
                <div className="text-center text-white ">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-7 px-1 lg:px-32 xl:px-60">Delicious Food & Wonderful Eating Experience</h1>
                    <p className="text-lg mb-10 px-1 lg:px-52 xl:px-80">Alexander Petillo brings together flavors and specialties from Italy and beyond to create his own culinary world, full of surprising artistry.</p>
                    <div className="flex gap-5 flex-col md:flex-row items-center justify-center">
                        <button className="btn rounded-3xl px-8 border-none bg-green-400 text-xl font-semibold"><a
                        >Explore Now</a></button>
                        <button className="btn btn-outline rounded-3xl px-8 border text-white border-white text-xl font-semibold">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;