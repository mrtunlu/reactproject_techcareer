export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Lütfen isminizi giriniz.';
	}
	 else if (!/^[A-Za-z]+/.test(name.trim())) {
	    return 'Geçerli bir ad giriniz';
	 }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Lütfen Email adresi giriniz';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email adresi geçersiz';
	}
	if (!password) {
		return 'Lütfe şifre oluştun';
	} else if (password.length < 6) {
		return 'Şifre 6 karakter veya daha fazla olmalıdır.';
	}

	if (!confirmPass) {
		return 'Şifrenizi tekrar giriniz';
	} else if (confirmPass !== password) {
		return 'Girilen şifreler aynı değildir.';
	}
	return null;
}