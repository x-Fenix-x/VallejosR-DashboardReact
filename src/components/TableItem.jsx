import PropTypes from 'prop-types';

export const TableItem = ({ title, length, rating, genre, awards }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{length ? length + ' Min' : 'Sin datos'}</td>
            <td>{rating}</td>
            <td>{genre? genre.name : 'Sin género'}</td>
            <td>{awards}</td>
        </tr>
    );
};

TableItem.propTypes = {
    title: PropTypes.string,
    length: PropTypes.number,
    rating: PropTypes.string,
    genre: PropTypes.object,
    awards: PropTypes.number,
};

TableItem.defaultProps = {
    genre: 'Sin género',
};
