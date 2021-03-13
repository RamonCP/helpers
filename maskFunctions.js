const zipCode = (value) => {
	if (!value) return 
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{5})(\d)/,'$1-$2')
	return value
}

const rg = (value) => {
	if (!value) return 
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d{3})/,"$1.$2.")
	value = value.replace(/(\d{3})(\d)/,"$1-$2")
	return value
}


const cpf = (value) => {
	if (!value) return 
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{3})(\d)/,'$1.$2')
	value = value.replace(/(\d{3})(\d{2})$/,'.$1-$2')
	return value
}


const telephone = (value) => {
	if (!value) return 
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d)/,"($1) $2")
	value = value.replace(/(\d)(\d{4})$/,"$1-$2")
	return value
}

const dateMask = (value) => {
	if (!value) return 
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d)/,'$1/$2')
	value = value.replace(/(\d{2})(\d)/,'$1/$2')
	return value
}