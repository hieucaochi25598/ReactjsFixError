import {useState} from 'react'

const useForm = (initialValues, validation) => {
    // initValues là dữ liệu được truyền vào khi sử dụng useForm
    const [form, setForm] = useState(initialValues);

    const handleChange = evt => {
        setForm({
            ...form, 
            values: {...form.values, [evt.target.name]: evt.target.value}});
    };

    const handleBlur = evt => {
        // if(!evt.target.value){
        //     setForm({
        //         ...form,
        //         errors: {...form.errors, [evt.target.name]: 'Không được để trống'}
        //     })
        // }
        const errors = validation(form.values);
        setForm({
            ...form, 
            errors: errors
        });
    };

    return [form, handleChange, handleBlur];
};

export default useForm;