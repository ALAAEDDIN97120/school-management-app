import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashoardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex">
			{/*=== LEFT SIDE SECTION ===*/}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
				<Link
					href="/"
					className="flex items-center justify-center lg:justify-start gap-2"
				>
					<Image src="/logo.png" alt="logo" width={32} height={32} />
					<span className="hidden lg:block font-bold">Xcel Academy</span>
				</Link>
				<Menu />
			</div>

			{/*=== RIGHT SIDE SECTION===*/}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-[#f7f8fa] overflow-scroll flex flex-col">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
