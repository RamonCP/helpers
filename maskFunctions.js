function zipCode(value) {
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{5})(\d)/,'$1-$2')
	return value
}

function rg(value) {
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d{3})/,"$1.$2.")
	value = value.replace(/(\d{3})(\d)/,"$1-$2")
	return value
}


function cpf(value) {
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{3})(\d)/,'$1.$2')
	value = value.replace(/(\d{3})(\d{2})$/,'.$1-$2')
	return value
}


function telephone(value) {
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d)/,"($1) $2")
	value = value.replace(/(\d)(\d{4})$/,"$1-$2")
	return value
}