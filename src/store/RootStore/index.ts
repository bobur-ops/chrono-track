import { persistentAtom } from '@nanostores/persistent';
import type { IRecord } from 'types/Record';

export const isSidebarFull = persistentAtom('sidebarFull', true, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const isTimerRunning = persistentAtom('isTimerRunning', false, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const trackedTime = persistentAtom('trackedTime', 0, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const trackerRecords = persistentAtom<IRecord[]>('records', [], {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const runningRecord = persistentAtom<IRecord | null>(
	'runningRecord',
	null,
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	}
);

export const deleteRecord = (id: number) => {
	const newRecords = trackerRecords.get().filter((item) => item.id !== id);
	trackerRecords.set(newRecords);
};
