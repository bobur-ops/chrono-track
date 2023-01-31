import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button, { ButtonColor } from 'shared/Button';
import Input from 'shared/Input';
import {
	isTimerRunning,
	runningRecord,
	trackedTime,
	trackerRecords,
} from 'store/RootStore';
import type { IRecord } from 'types/Record';
import { getConverterTrackerTime } from 'utils/utils';

const TrackerInput: React.FC = () => {
	const $isTimerRunning = useStore(isTimerRunning);
	const $runningRecord = useStore(runningRecord);
	const $trackedTime = useStore(trackedTime);
	const $trackerRecords = useStore(trackerRecords);

	const [descriptionValue, setDescriptionValue] = useState('');
	const [timer, setTimer] = useState<number>($trackedTime);
	const [intervalId, setIntervalId] = useState<any>('');

	useEffect(() => {
		trackedTime.set(timer);
	}, [timer]);

	useEffect(() => {
		if (timer !== 0) startTracker();
	}, []);

	const onStart = (description: string) => {
		isTimerRunning.set(true);
		const record: IRecord = {
			startTime: new Date(),
			endTime: null,
			description: description,
			id: Date.now(),
			time: null,
		};

		runningRecord.set(record);
	};

	const onStop = (description: string) => {
		const newRecord: IRecord = {
			...($runningRecord as IRecord),
			endTime: new Date(),
			time: $trackedTime as string,
			description: description,
		};

		trackerRecords.set([newRecord, ...$trackerRecords]);
		runningRecord.set(null);

		isTimerRunning.set(false);
	};

	const startTracker = () => {
		onStart(descriptionValue);
		const interval = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);

		setIntervalId(interval);
	};

	const stopTracker = () => {
		clearInterval(intervalId);
		setTimer(0);

		onStop(descriptionValue);
		setDescriptionValue('');
	};

	const handleToggle = () => {
		if ($isTimerRunning) {
			stopTracker();
		} else {
			startTracker();
		}
	};

	return (
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut' }}
			className="w-full p-2 bg-white border-gray-300 border-[1px] flex items-center gap-3"
		>
			<div className="flex-1">
				<Input
					placeholder="What are you doing now?"
					value={descriptionValue}
					onChange={(value) => setDescriptionValue(value)}
				/>
			</div>
			<div className="mx-6">
				<div className="font-semibold text-lg">
					{getConverterTrackerTime(timer)}
				</div>
			</div>
			<div className="">
				<Button
					color={$isTimerRunning ? ButtonColor.red : ButtonColor.primary}
					onClick={() => handleToggle()}
				>
					{$isTimerRunning ? 'STOP' : 'START'}
				</Button>
			</div>
		</motion.div>
	);
};

export default TrackerInput;
