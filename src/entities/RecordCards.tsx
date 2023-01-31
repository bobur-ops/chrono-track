import { useStore } from '@nanostores/react';
import { trackerRecords, deleteRecord } from 'store/RootStore';
import { motion } from 'framer-motion';
import type { IRecord } from 'types/Record';
import moment from 'moment';
import { getConverterTrackerTime } from 'utils/utils';
import Button, { ButtonColor } from 'shared/Button';

const RecordCard = () => {
	const $records = useStore(trackerRecords);

	const handleDeleteRecord = (id: number) => {
		deleteRecord(id);
	};

	if (!$records.length)
		return (
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeInOut' }}
				className="mt-6 text-lg font-semibold"
			>
				There are no records
			</motion.div>
		);

	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut' }}
			className="mt-6"
		>
			<div className="">
				{$records?.map((item: IRecord) => (
					<div key={item.id} className="w-full rounded-sm overflow-hidden mb-4">
						<div className="bg-[#E4EAEE] px-4 py-2 border-[1px] border-gray-300 ">
							<div className="">{moment(item.startTime).format('ll')}</div>
						</div>
						<div className="bg-white p-4 border-[1px] border-gray-300 border-t-0 flex items-center">
							<div
								className={`flex-1 ${item.description ? '' : 'text-[#90A4AE]'}`}
							>{`${
								item.description ? item.description : 'There is no description'
							}`}</div>
							<div className="mx-4 border-x px-2">
								{moment(item.startTime).format('LT')} -{' '}
								{moment(item.endTime).format('LT')}
							</div>
							<div className="font-semibold text-xl">
								{getConverterTrackerTime(item.time as number)}
							</div>
							<div className="ml-4">
								<Button
									color={ButtonColor.red}
									onClick={() => handleDeleteRecord(item.id as number)}
								>
									Delete
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default RecordCard;
