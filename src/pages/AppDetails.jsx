import { useLoaderData, useNavigate, useParams } from "react-router";
import DwIcon from '../assets/icon-downloads.png';
import StarIcon from '../assets/icon-ratings.png';
import RvIcon from '../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import AppErrorImage from '../assets/App-Error.png';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { addToCart, getCart } from "../comps/utils/manageLocalStorage";

export default function AppDetails() {
    const params = useParams();
    const id = parseInt(params.id);
    const data = useLoaderData();
    const app = data.find(d => d.id === id);
    if (app) {
        const [installed, setInstalled] = useState(getCart().includes(app.id));
        const totalRatings = app.ratings.reduce((sum, rate) => sum + rate.count, 0);
        const handleInstall = () => {
            setInstalled(true)
            toast.success(`${app.title} is installed!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            addToCart(app.id); // add app id to local storage
        }
        return (
            <section className="containerr px-4">
                <div className="flex flex-col lg:flex-row gap-5 md:gap-10 pb-8 border-b-2 border-gray-300">
                    <div className="aspect-square max-w-[350px] grow shrink-0 bg-gray-500">
                        <img src={app.image} alt={app.title} className="w-full h-full" onError={e => {
                            e.target.onerror = null;
                            e.target.src = '/default-image.png';
                        }} />
                    </div>
                    <div className="grow">
                        <h2 className="text-3xl font-bold">{app.title}</h2>
                        <h4 className="text-xl text-[#627382] mt-2 mb-6 pb-6 border-b-2 border-gray-300">Developed by <span className="font-semibold text-gradient">{app.companyName}</span> </h4>
                        <div className="max-w-xl grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-center">
                            <div className="flex flex-col gap-2">
                                <img src={DwIcon} alt="download icon" className="w-10 h-10" />
                                <div>Total Downloads</div>
                                <div className="stat-value text-3xl md:text-[40px]"> {Number((app.downloads / 1000).toFixed(1))} K</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <img src={StarIcon} alt="star icon" className="w-10 h-10" />
                                <div>Total Reviews</div>
                                <div className="stat-value text-3xl md:text-[40px] ">{Number((totalRatings / 1000).toFixed(1))} K</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <img src={RvIcon} alt="review icon" className="w-10 h-10" />
                                <div>31 more will Launch</div>
                                <div className="stat-value text-3xl md:text-[40px]">132+</div>
                            </div>
                        </div>
                        <button className="btn bg-[#00D390] text-white mt-7 hover:bg-green-700" onClick={handleInstall} disabled={installed}>
                            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>

                </div>
                <div className="pb-8 border-b-2 border-gray-300">
                    <h3 className="text-2xl mt-6 font-semibold">Ratings</h3>
                    <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[...app.ratings].reverse()} layout="vertical">
                                <XAxis type="number" domain={[0, 'dataMax + 2000']} tick={{ fill: '#6b7280' }} />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tick={{ fill: '#6b7280' }}
                                    tickLine={false}
                                    axisLine={false}
                                    width={60}
                                />
                                <Tooltip cursor={{ fill: '#f5f5f5' }} />
                                <Bar dataKey="count" fill="#ff8c1a" barSize={20} radius={[0, 5, 5, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Description</h3>
                    <p className="md:text-xl/8 text-[#627382]">
                        This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                        <br />
                        <br />
                        A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                        <br />
                        <br />
                        For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you're studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                    </p>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </section>
        );
    } else {
        const navigate = useNavigate();
        return (
            <section className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <img src={AppErrorImage} alt='error image' className='w-full max-w-lg mx-auto' />
                        <h1 className="text-3xl md:text-5xl font-bold mt-4">OPPS!! APP NOT FOUND</h1>
                        <p className="py-3 md:py-6 text-[#627382] md:text-xl">The App you are requesting is not found on our system.  please try another apps</p>
                        <button className="btn primary-btn px-7" onClick={() => navigate(-1)}>Go Back!</button>
                    </div>
                </div>
            </section>
        );
    }
}