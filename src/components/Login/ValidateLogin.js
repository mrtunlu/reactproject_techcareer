export default function validateForm({ email, password  }) {


	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Lütfen Email adresi giriniz';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email adresi geçersiz';
	}
	if (!password) {
		return 'Lütfen şifrenizi giriniz.';
	} else if (password.length < 6) {
		return 'Hatalı şifre girdiniz';
	}

	
	return null;
}