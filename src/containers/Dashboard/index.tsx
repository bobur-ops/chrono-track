import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { trackerRecords } from 'store/RootStore';
import type { IRecord } from 'types/Record';
import { getConverterTrackerTime } from 'utils/utils';

const Dashboard = () => {
	const $records = useStore(trackerRecords);

	const getTotalTime = () => {
		let result = 0;
		$records.forEach((item: IRecord) => {
			const time = item.time as number;
			result = result + time;
			console.log(result);
		});

		return result;
	};

	const getTheLongestRecord = () => {
		let longestResult = 0;
		$records.forEach((record) => {
			const time = record.time as number;
			if (time > longestResult) longestResult = time;
		});

		return longestResult;
	};

	const getTheShortestRecording = () => {
		let longestResult = Number.MAX_VALUE;
		$records.forEach((record) => {
			const time = record.time as number;
			if (time < longestResult) longestResult = time;
		});

		return longestResult;
	};

	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut' }}
			className="py-8 px-4"
		>
			<div className="text-2xl font-semibold">Dashboard</div>
			<div className="mt-4 w-full">
				<div className="p-8 flex w-full bg-[#E4EAEE] flex-col justify-center border border-gray-300">
					<div className="text-center text-[#90A4AE]">Total time</div>
					<div className="font-semibold text-2xl text-center">
						{getConverterTrackerTime(getTotalTime())}
					</div>
				</div>
				<div className=""></div>
			</div>
			<div className="border border-t-0 border-gray-300 p-2 bg-white">
				<div className="flex mb-2 items-center justify-between min-w-50%">
					<div className="">Total number of recordings:</div>
					<div className="font-semibold text-lg">{$records.length}</div>
				</div>
				<div className="flex mb-2 items-center justify-between min-w-50%">
					<div className="">The longest recording:</div>
					<div className="font-semibold text-lg">
						{getConverterTrackerTime(getTheLongestRecord())}
					</div>
				</div>
				<div className="flex mb-2 items-center justify-between min-w-50%">
					<div className="">The shortest recording:</div>
					<div className="font-semibold text-lg">
						{getConverterTrackerTime(getTheShortestRecording())}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Dashboard;
