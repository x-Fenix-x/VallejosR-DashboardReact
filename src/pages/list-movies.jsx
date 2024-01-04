import { Card, Table } from 'react-bootstrap';
import { TableItem } from '../components/TableItem';

export const ListMovies = () => {
    const movies = [
        {
            id: crypto.randomUUID(),
            title: 'Deadpool',
            length: 108,
            rating: 8,
            genres: ['acción', 'ciencia ficción'],
            awards: 29,
        },
        {
            id: crypto.randomUUID(),
            title: 'Inception',
            length: 148,
            rating: 8.8,
            genres: ['acción', 'ciencia ficción'],
            awards: 159,
        },
        {
            id: crypto.randomUUID(),
            title: 'Rocky',
            length: 120,
            rating: 8.1,
            genres: ['acción', 'drama'],
            awards: 21,
        },
        {
            id: crypto.randomUUID(),
            title: 'Peli sin género',
            length: 90,
            rating: 7,
            genres: [],
            awards: 0,
        },
    ];

    return (
        <Card className='shadow mb-5'>
            <Card.Body>
                <Table striped borderless>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Género</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(
                            ({ id, title, length, awards, rating, genres }) => (
                                <TableItem
                                    key={id}
                                    title={title}
                                    length={length}
                                    awards={awards}
                                    rating={rating}
                                    genres={genres}
                                />
                            )
                        )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
