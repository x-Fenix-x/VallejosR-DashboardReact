import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { validate as movieValidator } from '../validations/moviesValidator';

export const FormMovie = ({
    handleAddMovie,
    handleUpdateMovie,
    movie,
    setMovie,
}) => {
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

    useEffect(() => {
        if (movie) {
            formik.setValues({
                title: movie.title,
                rating: movie.rating,
                awards: movie.awards,
                length: movie.length,
                release_date: movie.release_date.split('T')[0],
                genre_id: movie.genre ? movie.genre.id : null,
            });
        }
    }, [movie]);

    const formik = useFormik({
        initialValues: {
            title: '',
            rating: '',
            awards: '',
            length: '',
            release_date: '',
            genre_id: '',
        },
        validate: movieValidator,
        onSubmit: (values) => {
            movie
                ? handleUpdateMovie(movie.id, values)
                : handleAddMovie(values);
            formik.handleReset();
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
                    value={formik.values.title}
                />
                {formik.errors.title && formik.touched.title ? (
                    <Form.Text className='text-danger'>
                        {formik.errors.title}
                    </Form.Text>
                ) : null}
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    type='number'
                    name='rating'
                    onChange={formik.handleChange}
                    value={formik.values.rating}
                />
                {formik.errors.rating && formik.touched.rating ? (
                    <Form.Text className='text-danger'>
                        {formik.errors.rating}
                    </Form.Text>
                ) : null}
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Premios</Form.Label>
                <Form.Control
                    type='number'
                    name='awards'
                    onChange={formik.handleChange}
                    value={formik.values.awards}
                />
                {formik.errors.awards && formik.touched.awards ? (
                    <Form.Text className='text-danger'>
                        {formik.errors.awards}
                    </Form.Text>
                ) : null}
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Duración</Form.Label>
                <Form.Control
                    type='number'
                    name='length'
                    onChange={formik.handleChange}
                    value={formik.values.length}
                />
                {formik.errors.length && formik.touched.length ? (
                    <Form.Text className='text-danger'>
                        {formik.errors.length}
                    </Form.Text>
                ) : null}
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Fecha de estreno</Form.Label>
                <Form.Control
                    type='date'
                    name='release_date'
                    onChange={formik.handleChange}
                    value={formik.values.release_date}
                />
                {formik.errors.release_date && formik.touched.release_date ? (
                    <Form.Text className='text-danger'>
                        {formik.errors.release_date}
                    </Form.Text>
                ) : null}
            </Form.Group>
            <Form.Group className='mb-3 col-12'>
                <Form.Label>Género</Form.Label>
                <Form.Select
                    className='form-control'
                    name='genre_id'
                    onChange={formik.handleChange}
                    value={formik.values.genre_id}
                >
                    <option hidden defaultChecked={movie ? false : true}>
                        Elije una opción
                    </option>
                    {genres.map(({ name, id }) => (
                        <option key={id} value={id} defaultChecked>
                            {name}
                        </option>
                    ))}
                </Form.Select>
                {formik.errors.genre_id && formik.touched.genre_id ? (
                    <Form.Text className='text-danger'>
                        {formik.errors.genre_id}
                    </Form.Text>
                ) : null}
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
    handleUpdateMovie: PropTypes.func,
    movie: PropTypes.object,
    setMovie: PropTypes.func,
};
