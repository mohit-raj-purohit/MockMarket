import {FC} from 'react';
import {CiTwitter} from 'react-icons/ci';
import {AiOutlineGithub} from 'react-icons/ai';
import Container from '../../molecules/Container/Container';
const Footer: FC = () => {
	return (
		<footer className="bg-gray-800 text-white mt-auto">
			<Container className='flex flex-col md:flex-row justify-between text-center md:text-left'>
				<p className="text-sm">Copyright © 2023 VENDORA</p>
				<div className="mt-3 md:mt-0">
					<ul className="flex gap-2 justify-center md:justify-normal">
						<li>
							<a
								href="https://twitter.com/mohitrj49"
								target="_blank"
							>
								<CiTwitter size={22} />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/mohit-raj-purohit"
								target="_blank"
							>
								<AiOutlineGithub size={22} />
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
