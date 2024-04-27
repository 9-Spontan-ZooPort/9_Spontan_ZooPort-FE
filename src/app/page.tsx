import Image from "next/image";

export default function Home() {
	return (
		<div className="flex w-full h-full justify-center items-center">
			<Image alt="logo" src="/LogoZooPort.svg" width={200} height={200} />
		</div>
	);
}
