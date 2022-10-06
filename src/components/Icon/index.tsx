import {FaDiscord, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube} from 'react-icons/fa';
import {MdOutlineEmail, MdOutlineHome, MdOutlineQuiz, MdOutlineArticle, MdOutlinePeople, MdOutlineMenu} from 'react-icons/md';

export const IconList = {
	// Social
	discord: <FaDiscord />,
	tiktok: <FaTiktok />,
	twitch: <FaTwitch />,
	twitter: <FaTwitter />,
	youtube: <FaYoutube />,
	instagram: <FaInstagram />,

	// Menu Icons
	home: <MdOutlineHome />,
	quiz: <MdOutlineQuiz />,
	email: <MdOutlineEmail />,
	article: <MdOutlineArticle />,
	peaplo: <MdOutlinePeople />,
	menu: <MdOutlineMenu />,
};

export type TypeIconList = keyof typeof IconList;

export const Icon = ({name}: {
	name: TypeIconList;
}) => <div className='text-3xl'>{IconList[name]}</div>;

