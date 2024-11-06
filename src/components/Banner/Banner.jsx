import "./Banner.css"
import bannerImg from "../../assets/book-img1.png"

const Banner = () => {
    return (
        <div>
            
            <div className="banner-container shadow-lg h-[500px]">
                <div className="left w-2/3 ps-[100px]">
                <h1 className="text-5xl font-bold ">Books to freshen up <br /> your bookshelf</h1>
                </div>
                <div className="right w-1/3  ">
                <img className="" src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;