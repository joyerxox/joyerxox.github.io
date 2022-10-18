import React from 'react';
import Icon1 from '../../images/dj.png';
import Icon2 from '../../images/play.png';
import Icon3 from '../../images/note.png';
import Icon4 from '../../images/vinyl.png';

import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Events</ServicesH2>
					<ServicesP>
						Bringing your events to life with the best music. Book us now for the best experience!
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Mixes</ServicesH2>
					<ServicesP>
						We do mixes for any occasion, birthdays, weddings, promoting an event and many more.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Beat Production</ServicesH2>
					<ServicesP>
						Get your personalized beats professionally done from scratch in any genre of your chose.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon4} />
					<ServicesH2>Mixing/Mastering</ServicesH2>
					<ServicesP>
						Bring your tracks to life with high quality mixing and the best finishing touches. Impeccable!
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
