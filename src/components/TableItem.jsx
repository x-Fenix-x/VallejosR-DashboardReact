import PropTypes from 'prop-types';

export const TableItem = ({
    movie: { id, title, length, rating, genre, awards },
    handleEditMovie,
    handleDeleteMovie,
}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{length ? length + ' Min' : 'Sin datos'}</td>
            <td>{rating}</td>
            <td>{genre ? genre.name : 'Sin género'}</td>
            <td>{awards}</td>
            <td>
                <div className='d-flex'>
                    <button
                        className='btn btn-sm btn-outline-success mr-2'
                        onClick={() => handleEditMovie(id)}
                    >
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => handleDeleteMovie(id)}
                    >
                        <i className='fas fa-trash-alt'></i>
                    </button>
                </div>
            </td>
        </tr>
    );
};

TableItem.propTypes = {
    movie: PropTypes.object,
    handleEditMovie: PropTypes.func,
    handleDeleteMovie: PropTypes.func,
};

TableItem.defaultProps = {
    genre: 'Sin género',
};
