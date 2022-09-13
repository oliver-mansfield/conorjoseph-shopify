// import Image from "next/image";
import styles from "./Cover.module.scss";

const Cover = () => {
	return (
		<>
			<div className={styles.cover}>
				{/* <div className="cover-image girl">
					<Image src="/images/girl.png" layout="fill" objectFit="cover" />
				</div>
				<div className="cover-image guy">
					<Image src="/images/guy.png" width="631" height="976" />
				</div> */}
				<img
					src="/images/guy.png"
					className={` ${styles.cover__image} ${styles.cover__image_guy} `}
				/>
				<div className={styles.titleContainer}>
					<div className={` ${styles.titleContainer__inner}  `}>
						<h1>Second</h1>
						<h1>Skin</h1>
					</div>
				</div>
				<img
					src="/images/girl.png"
					className={` ${styles.cover__image} ${styles.cover__image_girl} `}
				/>
			</div>
		</>
	);
};

export default Cover;
