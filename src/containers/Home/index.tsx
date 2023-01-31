import RecordCards from 'entities/RecordCards';
import TrackerInput from 'entities/TrackerInput';

const Home = () => {
	return (
		<div className="py-8 px-4">
			<TrackerInput />
			<RecordCards />
		</div>
	);
};

export default Home;
