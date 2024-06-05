const Footer = () => {
    return (
        <div className="bg-red-400 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center" >
                <span className="text-3xl text-white font-bold tracking-tight">
                    DesertGo.com
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    );
};

export default Footer;