// import Image from "next/image";

const Cover = () => {
	return (
		<>
			<div>
				{/* <div className="cover-image girl">
					<Image src="/images/girl.png" layout="fill" objectFit="cover" />
				</div>
				<div className="cover-image guy">
					<Image src="/images/guy.png" width="631" height="976" />
				</div> */}
				<img src="/images/guy.png" />
				<div>
					<div>
						<h1 className="text-3xl font-bold underline">Second</h1>
						<h1>Skin</h1>
					</div>
				</div>
				<img src="/images/girl.png" />
			</div>
		</>
	);
};

export default Cover;
