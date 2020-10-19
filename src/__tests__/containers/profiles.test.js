import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { SelectProfile } from '../../containers';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<Profiles />', () => {
	it('renders the <Profiles />', () => {
		const user = { displayName: 'Karl', photoURL: 'profile.png' };
		const setProfile = jest.fn();
		const { getByTestId } = render(
			<Theme>
				<SelectProfile user={user} setProfile={setProfile} />
			</Theme>
		);

		fireEvent.click(getByTestId('user-profile'));
		expect(setProfile).toHaveBeenCalled();
	});
});
