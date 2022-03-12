import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../../Actions';

export const useForm = ( initialForm, validateForm ) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleBlur = (event) => {
        handleChange(event);
        setErrors(validateForm(form));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            dispatch(createRecipe(form));
            alert('Recipe created');
            setForm(initialForm);
            navigate("/home");
        } else {
            return;
        }
    };

    const handleDelete = (diet) => {
        setForm({
            ...form,
            type: form.type.filter( type => type !== diet)
        });
    };

    const handleSelect = (event) => {
        const { value } = event.target;
        setForm({
            ...form,
            type: [...form.type, value]
        })
    }

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleDelete,
        handleSelect
    }
}