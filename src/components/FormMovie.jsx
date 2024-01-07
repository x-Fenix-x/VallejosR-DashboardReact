import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const FormMovie = ({ handleAddMovie, movie, setMovie }) => {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        let response = await fetch(
            `${import.meta.env.VITE_APP_API_URL}/genres`
        );
        let result = await response.json();
        setGenres(result.data);
    };

    useEffect(() => {
        getGenres();
    }, []);

    const formik = useFormik({
        initialValues: {
            title: '',
            rating: '',
            awards: '',
            length: '',
            release_date: '',
            genre_id: '',
        },
        onSubmit: (values) => {
            movie ? alert('Actualizando...') : handleAddMovie(values);
        },
    });

    const handleCancel = () => {
        setMovie(null);
        formik.handleReset();
    };

    return (
        <Form className='row' onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3 col-12'>
                <Form.Label>Título de la película</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Título de la película'
                    name='title'
                    onChange={formik.handleChange}
                    value={movie ? movie.title : formik.values.title}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    type='number'
                    name='rating'
                    onChange={formik.handleChange}
                    value={movie ? movie.rating : formik.values.rating}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Premios</Form.Label>
                <Form.Control
                    type='number'
                    name='awards'
                    onChange={formik.handleChange}
                    value={movie ? movie.awards : formik.values.awards}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Duración</Form.Label>
                <Form.Control
                    type='number'
                    name='length'
                    onChange={formik.handleChange}
                    value={movie ? movie.length : formik.values.length}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Fecha de estreno</Form.Label>
                <Form.Control
                    type='date'
                    name='release_date'
                    onChange={formik.handleChange}
                    value={formik.values.release_date.toString()}
                />
            </Form.Group>
            <Form.Group className='mb-3 col-12'>
                <Form.Label>Género</Form.Label>
                <Form.Select
                    className='form-control'
                    name='genre_id'
                    onChange={formik.handleChange}
                    value={formik.values.genre_id}
                >
                    <option hidden defaultChecked>
                        Elije una opción
                    </option>
                    {genres.map(({ name, id }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 col-12'>
                <div className='d-flex justify-content-between'>
                    <Button
                        onClick={handleCancel}
                        variant='outline-secondary'
                        className='w-100'
                    >
                        Cancelar
                    </Button>
                    <Button
                        type='submit'
                        variant='outline-dark'
                        className='w-100'
                    >
                        Guardar
                    </Button>
                </div>
            </Form.Group>
        </Form>
    );
};

FormMovie.propTypes = {
    handleAddMovie: PropTypes.func,
    movie: PropTypes.object,
};
