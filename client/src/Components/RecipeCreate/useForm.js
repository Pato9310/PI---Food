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

    const handleDelete = (idDiet) => {
        setForm({
            ...form,
            id: form.id.filter( id => id !== idDiet)
        });
    };

    const handleSelect = (event) => {
        const { value } = event.target;
        setForm({
            ...form,
            id: [...form.id, value]
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