export default function Newsletter() {
    return (
        <section className="pb-10 text-center">
            <img src='/media/mail-icon.png' alt='mail logo' className="w-full max-w-xs mx-auto" />
            <h3 className="text-3xl font-bold">Subscribe Newsletter</h3>
            <p className="max-w-sm mx-auto mt-4 mb-6">Get notification for every new App release? Opt in for daily mail by signing up below</p>
            <div className="join">
                <div>
                    <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" placeholder="mail@site.com" required />
                    </label>
                </div>
                <button className="btn btn-error join-item">Subscribe</button>
            </div>
        </section>
    );
}