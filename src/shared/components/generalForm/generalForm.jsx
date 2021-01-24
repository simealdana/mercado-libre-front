import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, FormInput ,InputText} from './styledGeneralForm';
import useForm from '../../hooks/useForm';

const GeneralForm = props => {
	const { formList } = props || [];
	const { initialValues } = props;

	const form = useForm(initialValues);

	useEffect(() => {
		if (props.getData) {
			props.sendData(form.fields);
		}
	}, [props.getData]);

	useEffect(() => {
		props.sendData(form.fields);
	}, [form.fields]);
	
	const renderInputText = input => (
		<div className={`${input.divClass}`}>
			<InputText
				className={`${input.inputClass}`}
				{...form.getInput(`${input.field}`)}
				placeholder={`${input.placeholder}`}
				aria-label={`${input.label}`}
			/>	
		</div>
	);

	return (
		<Fragment>
			<FormContainer>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						width:"100%"
					}}
				>
					{formList
						&& formList.map((input, index) => (
							<FormInput col={input.col} key={index}>
								{(input.type === 'text' || input.type === 'number')
									&& renderInputText(input)}
							</FormInput>
						))}
				</div>
			</FormContainer>
		</Fragment>
	);
};

GeneralForm.propTypes = {
	sendData: PropTypes.any,
	getData: PropTypes.any,
	initialValues: PropTypes.any
};

export default GeneralForm;
