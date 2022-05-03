import Image from "next/image";

function Cover() {
	return (
		<>
			<div className="cover">
				<div className="cover-image girl">
					<Image src="/images/girl.png" layout="fill" objectFit="cover" />
				</div>
				<div className="cover-image guy">
					{/* <Image src="/images/guy.png" width="631" height="976" /> */}
				</div>
			</div>

			<style jsx scss>
				{`
					.cover {
						height: 100vh;
						width: 100%;
						background: linear-gradient(45deg, #312c28 0%, #615851 100%);
						position: relative;
					}

					.cover-image {
						position: absolute;
						bottom: 0;
						height: 100%;
						max-width: 500px;
					}

					.guy {
						right: 0;
					}

					.girl {
						left: 0;
					}
				`}
			</style>
		</>
	);
}

export default Cover;
