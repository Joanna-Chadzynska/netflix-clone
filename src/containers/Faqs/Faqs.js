import React from 'react';
import { Accordion } from '../../components';
import faqsData from '../../fixtures/faqs.json';

const Faqs = () => {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map((faq) => (
					<Accordion.Item key={faq.id}>
						<Accordion.Header>{faq.header}</Accordion.Header>
						<Accordion.Body>{faq.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>
		</Accordion>
	);
};

export default Faqs;
