export const validate = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Título requerido';
    }

    if (!values.rating) {
        errors.rating = 'Rating requerido';
    }

    if (!values.awards) {
        errors.awards = 'Premios requerido';
    }

    if (!values.length) {
        errors.length = 'Duración requerida';
    }

    if (!values.release_date) {
        errors.release_date = 'Fecha requerida';
    }

    if (!values.genre_id) {
        errors.genre_id = 'Género requerido';
    }

    return errors;
};
