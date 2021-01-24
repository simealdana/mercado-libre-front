import { useState } from 'react';

const useForm = initialValue => {
	const [fields, setFields] = useState(initialValue);

	const onChange = e => {
		const {
			value, name, type, checked
		} = e.target;
		setFields({ ...fields, [name]: type === 'checkbox' ? checked : value });
	};

	const onChangeCalendar = (value, name) => {
		setFields({ ...fields, [name]: value });
	};

	const getInput = name => ({
		name,
		value: fields[name],
		onChange
	});
	const getCheckbox = name => ({
		name,
		checked: fields[name],
		onChange
	});
	const getRadio = (name, value) => ({
		name,
		value,
		checked: value === fields[name],
		onChange
	});

	const getCalendar = name => ({
		name,
		value: fields[name],
		onChange: e => onChangeCalendar(e, name)
	});

	const addField = (name, value) => {
		setFields({ ...fields, [name]: value });
	};

	const removeField = name => {
		const newFields = { ...fields };
		delete newFields[name];
		setFields(newFields);
	};

	return {
		fields,
		addField,
		removeField,
		getInput,
		getCheckbox,
		getSelect: name => getInput(name),
		getRadio,
		getCalendar
	};
};
export default useForm;
