import { RxHamburgerMenu } from 'react-icons/rx';
import { useStore } from '@nanostores/react';
import { isSidebarFull } from 'store/RootStore';

const Navbar: React.FC = () => {
	const $isSidebarFull = useStore(isSidebarFull);

	return (
		<div className="w-full py-3 px-4 bg-white border-b border-b-gray-300 fixed top-0">
			<div className="flex">
				<div className="flex items-center gap-4">
					<div
						className="cursor-pointer"
						onClick={() => {
							isSidebarFull.set(!$isSidebarFull);
						}}
					>
						<RxHamburgerMenu size={24} />
					</div>
					<div className="font-bold ">ChronoTrack</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
