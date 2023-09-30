import aboutimg from '../assets/about.png'
import welcomeimg from '../assets/welcome.png'
import img1 from '../assets/testimonial.png'
import img2 from '../assets/testimonial2.png'
import img3 from '../assets/testimonial3.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import pinterest from '../assets/pinterest.png'






export default function Home(){
    return (
        <>
            <section className="flex my-hero p-10 lg:p-20 justify-center">
                <div className="flex flex-col gap-y-5">
                    <p className="text-white text-center text-sm">
                        Give Hope For Homeless
                    </p>
                    <h1 className="text-white text-center text-2xl font-bold">
                        Helping Each Other <br /> Can Make World Better
                    </h1>
                    <p className="text-white text-center font-thin text-xs">
                        We Seek out world changers and difference makers around the <br />
                        globe,and equip them to fulfill their unique purpose.
                    </p>
                    <div className="flex gap-x-5 justify-center">
                        <button className="py-2 px-3 text-white text-xs font-thin bg-green-700">Donate Now</button>
                        <button className="py-2 px-3 text-white text-xs font-thin bg-transparent border border-green-700">Know About Us</button>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row p-10 lg:p-32">
                <div className="flex md:w-1/2">
                    <img src={aboutimg} alt="" />
                </div>
                <div className="flex flex-col gap-y-5 my-auto p-5 md:p-20 md:w-1/2">
                    <p className='font-semibold flex items-center gap-x-5 text-xs'>
                        About Us <hr className='w-10 bg-black' />
                    </p>
                    <h3 className='font-bold text-xl'>
                        Your Support Is Really <br /> Powerful
                    </h3>
                    <p className='font-thin text-xs'>
                        The secret to happiness lies in helping others. Never
                        underestimate the difference YOU can make in the
                        lives of the poor, the abused and the helpless.
                    </p>
                    <div className="flex">
                        <button className="py-2 px-3 text-white text-xs font-thin bg-green-700">Read More</button>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row p-10 lg:p-32 md:p-10">
                <div className="flex md:order-2 md:w-1/2 p-10">
                    <img src={welcomeimg} alt="" />
                </div>
                <div className="flex flex-col gap-y-5 md:order-1 md:w-1/2 lg:p-20 md:p-10">
                    <p className='font-semibold flex items-center gap-x-5 text-xs'>
                        Welcome To Charity <hr className='w-10 bg-black' />
                    </p>
                    <h3 className='font-bold text-xl'>
                        Let Us Come Together <br /> To Make A Difference
                    </h3>
                    <p className='font-thin text-xs'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo.
                    </p>
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5">
                        <div className="flex flex-col bg-green-100 gap-y-5 p-3 w-3/4 mx-auto">
                            <h4 className='flex gap-x-2 font-semibold text-green-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                                Our Mision
                            </h4>
                            <p className='text-xs font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-col bg-green-100 gap-y-5 p-3 w-3/4 mx-auto">
                            <h4 className='flex gap-x-2 font-semibold text-green-700'>
                                <svg viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                    <path d="M12.3681 0V2.32875C11.0102 1.77188 9.55419 1.485 8.09816 1.485C5.16973 1.485 2.24131 2.6325 0 4.94437L5.44785 10.5638H7.2638V12.4369C8.67076 13.8881 10.5031 14.6475 12.3517 14.7319V18.5625H7.46012V23.625C7.46012 25.4813 8.93252 27 10.7321 27H27.092C29.8078 27 32 24.7388 32 21.9375V0H12.3681ZM10.5521 10.8169V7.18875H6.82209L5.12065 5.43375C6.0706 5.05561 7.07993 4.86112 8.09816 4.86C10.2904 4.86 12.3354 5.7375 13.8896 7.32375L16.1963 9.70312L15.8691 10.0406C15.4581 10.4687 14.9688 10.8084 14.4297 11.0401C13.8905 11.2719 13.3121 11.391 12.728 11.3906C11.9591 11.3906 11.2065 11.1881 10.5521 10.8169ZM28.728 21.9375C28.728 22.8656 27.9918 23.625 27.092 23.625C26.1922 23.625 25.456 22.8656 25.456 21.9375V18.5625H15.6401V14.1919C16.5726 13.8038 17.4397 13.23 18.1922 12.4538L18.5194 12.1163L23.1493 16.875H25.456V14.4956L15.6401 4.42125V3.375H28.728V21.9375Z" fill="#219D80"/>
                                </svg>
                                Our Vision
                            </h4>
                            <p className='text-xs font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="flex justify-between">
                            <p className="text-xs">Donations</p>
                            <p className="text-xs">75%</p>
                        </div>
                        <div className="w-full bg-green-100">
                            <div id="progress-bar" className="bg-green-700 w-3/4 text-white py-1 text-center text-xs">
                                <span id="progress-text"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex p-5 flex-col lg:p-32 gap-y-5'>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-xs text-gray-700">Testimonial</h3>
                        <h3 className='text-xl font-bold'>What People Say About <br /> Us</h3>
                    </div>
                    <div className="flex flex-col">
                        <div className='order-1'></div>
                        <svg className='w-6 h-6' viewBox="0 0 67 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H37.5454C53.5617 0 66.5455 12.9837 66.5455 29V61.1793H0V0Z" fill="#00725E"/>
                            <path d="M41.4539 25.0692C41.4539 24.7734 41.3198 24.4897 41.0812 24.2806C40.8425 24.0714 40.5188 23.9539 40.1812 23.9539L29.9994 23.8982C29.6618 23.8982 29.3381 24.0157 29.0994 24.2248C28.8608 24.434 28.7267 24.7176 28.7267 25.0134C28.7267 25.3092 28.8608 25.5929 29.0994 25.802C29.3381 26.0112 29.6618 26.1287 29.9994 26.1287H37.0758L26.5503 35.3741C26.431 35.4778 26.3363 35.6011 26.2717 35.737C26.2071 35.8729 26.1738 36.0187 26.1738 36.1659C26.1738 36.3131 26.2071 36.4589 26.2717 36.5948C26.3363 36.7307 26.431 36.8541 26.5503 36.9577C26.6686 37.0623 26.8094 37.1452 26.9645 37.2019C27.1196 37.2585 27.2859 37.2876 27.4539 37.2876C27.622 37.2876 27.7883 37.2585 27.9434 37.2019C28.0985 37.1452 28.2393 37.0623 28.3576 36.9577L38.9085 27.7123V33.9354C38.9085 34.2312 39.0426 34.5149 39.2813 34.724C39.5199 34.9332 39.8437 35.0507 40.1812 35.0507C40.5188 35.0507 40.8425 34.9332 41.0812 34.724C41.3198 34.5149 41.4539 34.2312 41.4539 33.9354V25.0692Z" fill="#FDFDFD"/>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
                    <div className="flex flex-col border-2 border-green-700 gap-y-5 p-5">
                        <svg className='w-6 h-6' viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5838 0.488293V6.72829H30.6638C29.1171 6.72829 27.8905 6.96829 26.9838 7.44829C26.0771 7.92829 25.4105 8.75496 24.9838 9.92829C24.5571 11.0483 24.3438 12.5683 24.3438 14.4883V20.4083L22.0238 15.9283C22.3971 15.6616 22.9305 15.4483 23.6238 15.2883C24.3171 15.075 25.0371 14.9683 25.7838 14.9683C27.5438 14.9683 29.0105 15.5283 30.1838 16.6483C31.3571 17.715 31.9438 19.2083 31.9438 21.1283C31.9438 22.9416 31.3838 24.4883 30.2638 25.7683C29.1438 26.995 27.5438 27.6083 25.4638 27.6083C24.1305 27.6083 22.8771 27.315 21.7038 26.7283C20.5838 26.0883 19.6771 25.0216 18.9838 23.5283C18.2905 21.9816 17.9438 19.875 17.9438 17.2083V15.8483C17.9438 12.0616 18.4505 9.04829 19.4638 6.80829C20.5305 4.56829 22.0505 2.96829 24.0238 2.00829C25.9971 0.994959 28.3971 0.488293 31.2238 0.488293H32.5838ZM14.9038 0.488293L14.9038 6.72829H12.9838C11.4371 6.72829 10.2105 6.96829 9.30379 7.44829C8.39712 7.92829 7.73046 8.75496 7.30379 9.92829C6.87712 11.0483 6.66379 12.5683 6.66379 14.4883V20.4083L4.34379 15.9283C4.71712 15.6616 5.25046 15.4483 5.94379 15.2883C6.63712 15.075 7.35712 14.9683 8.10379 14.9683C9.86379 14.9683 11.3305 15.5283 12.5038 16.6483C13.6771 17.715 14.2638 19.2083 14.2638 21.1283C14.2638 22.9416 13.7038 24.4883 12.5838 25.7683C11.4638 26.995 9.86379 27.6083 7.78379 27.6083C6.45046 27.6083 5.19712 27.315 4.02379 26.7283C2.90379 26.0883 1.99712 25.0216 1.30379 23.5283C0.610456 21.9816 0.263789 19.875 0.263789 17.2083V15.8483C0.263789 12.0616 0.770456 9.04829 1.78379 6.80829C2.85046 4.56829 4.37046 2.96829 6.34379 2.00829C8.31712 0.994959 10.7171 0.488293 13.5438 0.488293H14.9038Z" fill="#00725E"/>
                        </svg>
                        <h3 className='font-semibold'>Kindness</h3>
                        <p className="text-xs font-thin">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero, facilis neque facere tenetur non exercitationem
                        </p>
                        <div className="flex gap-x-3">
                            <img className='rounded-full w-10 h-10' src={img1} alt="" />
                            <p>John Doe <br /> <span className='text-xs font-thin'>Senior Gardner Farmer</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 border-green-700 gap-y-5 p-5">
                        <svg className='w-6 h-6' viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5838 0.488293V6.72829H30.6638C29.1171 6.72829 27.8905 6.96829 26.9838 7.44829C26.0771 7.92829 25.4105 8.75496 24.9838 9.92829C24.5571 11.0483 24.3438 12.5683 24.3438 14.4883V20.4083L22.0238 15.9283C22.3971 15.6616 22.9305 15.4483 23.6238 15.2883C24.3171 15.075 25.0371 14.9683 25.7838 14.9683C27.5438 14.9683 29.0105 15.5283 30.1838 16.6483C31.3571 17.715 31.9438 19.2083 31.9438 21.1283C31.9438 22.9416 31.3838 24.4883 30.2638 25.7683C29.1438 26.995 27.5438 27.6083 25.4638 27.6083C24.1305 27.6083 22.8771 27.315 21.7038 26.7283C20.5838 26.0883 19.6771 25.0216 18.9838 23.5283C18.2905 21.9816 17.9438 19.875 17.9438 17.2083V15.8483C17.9438 12.0616 18.4505 9.04829 19.4638 6.80829C20.5305 4.56829 22.0505 2.96829 24.0238 2.00829C25.9971 0.994959 28.3971 0.488293 31.2238 0.488293H32.5838ZM14.9038 0.488293L14.9038 6.72829H12.9838C11.4371 6.72829 10.2105 6.96829 9.30379 7.44829C8.39712 7.92829 7.73046 8.75496 7.30379 9.92829C6.87712 11.0483 6.66379 12.5683 6.66379 14.4883V20.4083L4.34379 15.9283C4.71712 15.6616 5.25046 15.4483 5.94379 15.2883C6.63712 15.075 7.35712 14.9683 8.10379 14.9683C9.86379 14.9683 11.3305 15.5283 12.5038 16.6483C13.6771 17.715 14.2638 19.2083 14.2638 21.1283C14.2638 22.9416 13.7038 24.4883 12.5838 25.7683C11.4638 26.995 9.86379 27.6083 7.78379 27.6083C6.45046 27.6083 5.19712 27.315 4.02379 26.7283C2.90379 26.0883 1.99712 25.0216 1.30379 23.5283C0.610456 21.9816 0.263789 19.875 0.263789 17.2083V15.8483C0.263789 12.0616 0.770456 9.04829 1.78379 6.80829C2.85046 4.56829 4.37046 2.96829 6.34379 2.00829C8.31712 0.994959 10.7171 0.488293 13.5438 0.488293H14.9038Z" fill="#00725E"/>
                        </svg>
                        <h3 className='font-semibold'>Humanity</h3>
                        <p className="text-xs font-thin">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero, facilis neque facere tenetur non exercitationem
                        </p>
                        <div className="flex gap-x-3">
                            <img className='rounded-full w-10 h-10' src={img2} alt="" />
                            <p>John Doe <br /> <span className='text-xs font-thin'>Senior Gardner Farmer</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 border-green-700 gap-y-5 p-5">
                        <svg className='w-6 h-6' viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5838 0.488293V6.72829H30.6638C29.1171 6.72829 27.8905 6.96829 26.9838 7.44829C26.0771 7.92829 25.4105 8.75496 24.9838 9.92829C24.5571 11.0483 24.3438 12.5683 24.3438 14.4883V20.4083L22.0238 15.9283C22.3971 15.6616 22.9305 15.4483 23.6238 15.2883C24.3171 15.075 25.0371 14.9683 25.7838 14.9683C27.5438 14.9683 29.0105 15.5283 30.1838 16.6483C31.3571 17.715 31.9438 19.2083 31.9438 21.1283C31.9438 22.9416 31.3838 24.4883 30.2638 25.7683C29.1438 26.995 27.5438 27.6083 25.4638 27.6083C24.1305 27.6083 22.8771 27.315 21.7038 26.7283C20.5838 26.0883 19.6771 25.0216 18.9838 23.5283C18.2905 21.9816 17.9438 19.875 17.9438 17.2083V15.8483C17.9438 12.0616 18.4505 9.04829 19.4638 6.80829C20.5305 4.56829 22.0505 2.96829 24.0238 2.00829C25.9971 0.994959 28.3971 0.488293 31.2238 0.488293H32.5838ZM14.9038 0.488293L14.9038 6.72829H12.9838C11.4371 6.72829 10.2105 6.96829 9.30379 7.44829C8.39712 7.92829 7.73046 8.75496 7.30379 9.92829C6.87712 11.0483 6.66379 12.5683 6.66379 14.4883V20.4083L4.34379 15.9283C4.71712 15.6616 5.25046 15.4483 5.94379 15.2883C6.63712 15.075 7.35712 14.9683 8.10379 14.9683C9.86379 14.9683 11.3305 15.5283 12.5038 16.6483C13.6771 17.715 14.2638 19.2083 14.2638 21.1283C14.2638 22.9416 13.7038 24.4883 12.5838 25.7683C11.4638 26.995 9.86379 27.6083 7.78379 27.6083C6.45046 27.6083 5.19712 27.315 4.02379 26.7283C2.90379 26.0883 1.99712 25.0216 1.30379 23.5283C0.610456 21.9816 0.263789 19.875 0.263789 17.2083V15.8483C0.263789 12.0616 0.770456 9.04829 1.78379 6.80829C2.85046 4.56829 4.37046 2.96829 6.34379 2.00829C8.31712 0.994959 10.7171 0.488293 13.5438 0.488293H14.9038Z" fill="#00725E"/>
                        </svg>
                        <h3 className='font-semibold'>Ethics & Morality</h3>
                        <p className="text-xs font-thin">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero, facilis neque facere tenetur non exercitationem
                        </p>
                        <div className="flex gap-x-3">
                            <img className='rounded-full w-10 h-10' src={img3} alt="" />
                            <p>John Doe <br /> <span className='text-xs font-thin'>Senior Gardner Farmer</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex p-10 bg-green-700 flex-col gap-y-5">
                <p className='text-white text-center'>
                    Give Us A Hand
                </p>
                <p className='text-white text-center font-bold text-xl uppercase'>
                    Support us and change the course of a childs <br /> life today!
                </p>
                <button className='w-1/2 mx-auto rounded-3xl py-2 px-3 text-green-700 bg-gray-300 lg:w-1/5'>
                    Donate
                </button>
            </section>
            <section className="flex p-10 bg-gray-700 flex-col gap-y-5 lg:flex-row lg:p-32">
                <div className="flex flex-col gap-y-5 lg:flex-row w-full">
                    <div className="flex flex-col lg:w-1/3">
                        <p className='text-xs font-bold text-white'>Address</p>
                        <p className='text-sm font-thin text-white'>
                            A-272, Surajmal Vihar, Delhi, 11009281-8181-0860
                            <br />
                            <br />
                            <span className="underline">Contact@vivekguptafoundation.in</span>
                        </p>
                    </div>
                    <div className="flex flex-col lg:w-1/3">
                        <p className='text-xs font-bold text-white'>Get In Touch</p>
                        <p className='text-sm font-thin text-white'>
                            Contact Us
                            <br />
                            Our Services
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-5 lg:w-1/3">
                        <p className='text-xs font-bold text-white'>Newsletter</p>
                        <form action="" className='flex flex-col gap-y-3 lg:flex-row'>
                            <div className="flex flex-col gap-y-3 lg:w-3/5">
                                <input type="email" name="" id="" className='p-2' placeholder='Enter Your Email'/>
                                <span className="text-xs font-thin text-white">
                                    Your Email is safe with us;We do not spam
                                </span>
                            </div>
                            <button className="py-2 px-3 h-3/4 text-white text-xs font-thin bg-green-700 lg:w-2/5 lg:py-1 lg:px-1">Subscribe</button>
                        </form>
                        <div className='flex flex-col gap-y-5'>
                            <p className='text-xs font-bold text-white'>Follow Me</p>
                            <div className='flex gap-x-5'>
                                <img src={twitter} alt="" className='w-6 h-6' />
                                <img src={instagram} alt="" className='w-6 h-6' />
                                <img src={pinterest} alt="" className='w-6 h-6' />
                                <img src={youtube} alt="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr className="w-full" /> */}
            </section>
        </>
    )
}