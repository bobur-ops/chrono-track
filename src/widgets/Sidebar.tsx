import { useStore } from '@nanostores/react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { isSidebarFull } from 'store/RootStore';
import { motion } from 'framer-motion';

interface SidebarProps {
	url: string;
}

const Sidebar: React.FC<SidebarProps> = ({ url }) => {
	const $isSidebarFull = useStore(isSidebarFull);

	return (
		<motion.div
			animate={{ width: $isSidebarFull ? '15%' : '3.5%' }}
			transition={{ ease: 'easeIn' }}
			className="bg-white border-r border-r-gray-300 w-[15%]"
		>
			<a
				href="/"
				className={`flex px-4 gap-2 items-center py-2 hover:bg-gray-200 cursor-pointer ${
					url === '/' ? 'bg-gray-200' : ''
				}`}
			>
				<div className="">
					<AiOutlineClockCircle size={18} />
				</div>
				<motion.div
					animate={{
						opacity: $isSidebarFull ? 1 : 0,
						x: $isSidebarFull ? 0 : 20,
					}}
					transition={{
						ease: 'easeInOut',
					}}
				>
					<div className="whitespace-nowrap">Time Tracker</div>
				</motion.div>
			</a>
			<a
				href="/dashboard"
				className={`flex px-4 gap-2 items-center py-2 hover:bg-gray-200 cursor-pointer ${
					url === '/dashboard' ? 'bg-gray-200' : ''
				}`}
			>
				<div className="">
					<RxDashboard size={18} />
				</div>
				<motion.div
					animate={{
						opacity: $isSidebarFull ? 1 : 0,
						x: $isSidebarFull ? 0 : 20,
					}}
					transition={{
						ease: 'easeInOut',
					}}
				>
					<div className="whitespace-nowrap">Dashboard</div>
				</motion.div>
			</a>
		</motion.div>
	);
};

export default Sidebar;
