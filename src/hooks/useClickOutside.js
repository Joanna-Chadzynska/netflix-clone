import { useEffect, useRef, useState } from 'react';

const useClickOutside = () => {
	const ref = useRef(null);
	const [clickOutside, setClickOutside] = useState(false);

	const handleClick = (e) => {
		ref.current.contains(e.target)
			? setClickOutside(false)
			: setClickOutside(true);
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => document.removeEventListener('click', handleClick);
	}, []);

	return { ref, clickOutside };
};

export default useClickOutside;
