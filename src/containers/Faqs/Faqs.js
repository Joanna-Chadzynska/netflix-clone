import React from 'react';
import { Accordion, OptForm } from '../../components';
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

			<OptForm>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptForm.Text>

				<OptForm.InputPlacement>
					<OptForm.Input
						id='email'
						type='email'
						name='email'
						placeholder='Email address'
					/>
					<OptForm.Label htmlFor='email'>Email address</OptForm.Label>
				</OptForm.InputPlacement>

				<OptForm.Button type='submit'>Get started</OptForm.Button>
				<OptForm.Break />
			</OptForm>
		</Accordion>
	);
};

export default Faqs;
