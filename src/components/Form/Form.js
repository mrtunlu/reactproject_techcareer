import React, { useState,} from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './Form.elements';
import { Container } from '../../globalStyles';
import validateForm from './ValidateForm';

const Form = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);




	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, password, confirmPass });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		 setName('');
		setEmail('');
		setPassword('');
		setConfirmPass('');
		setError(null);
		setSuccess('Üyelik işleminiz başarıyla gerçekleşti.');


	}



	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Adı', value: name, onChange: (e) => setName(e.target.value), type: '' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Şifre',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},
		{
			label: 'Şifre tekrarı',
			value: confirmPass,
			onChange: (e) => setConfirmPass(e.target.value),
			type: 'password',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Üye Ol</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={` ${el.label.toLocaleLowerCase()} giriniz`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Onayla</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;