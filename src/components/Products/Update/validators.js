export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExpirationValid = (value) => {
	var valueSplitted = value.split("-");
	var expiredDate = new Date(valueSplitted[0], valueSplitted[1] - 1, valueSplitted[2]).valueOf();
	if (isNaN(expiredDate)){
		return false;
	}
	var currentDate = Date.now()
	var expirationPeriod = currentDate + 30 * 24 * 3600 * 1000
	if ( expirationPeriod > expiredDate) {
		return false;
	}
	else {
		return true;
	}
}
