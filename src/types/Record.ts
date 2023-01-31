export interface IRecord {
	startTime: Date;
	endTime: Date | null;
	description: string;
	time: string | null | number;
	id: string | number;
}
