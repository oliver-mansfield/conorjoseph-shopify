const Splash = (imgUrl) => {
	//TODO make the top-[80px] value dynamic to allow for
	//the header being different heights on different devices / browsers
	return (
		<div className="fixed top-[80px] left-0 w-full h-full pointer-events-none overflow-hidden">
			<div className="md:relative z-10 w-full">
				<div className="md:max-w-5xl mx-auto">
					<div className="splash"></div>
				</div>
			</div>
		</div>
	);
};

export default Splash;
