import { Card, Col, Row, Table } from 'react-bootstrap';
import { TableItem } from '../components/TableItem';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Paginator } from '../components/Paginator';
import { FormSearch } from '../components/FormSearch';
import { FormMovie } from '../components/FormMovie';
import { showMessageSuccess } from '../components/Toast';

export const ListMovies = () => {
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [pagination, setPagination] = useState();

    const getMovies = async (endpoint = '/api/v1/movies') => {
        try {
            setLoading(true);

            const response = await fetch(`http://localhost:3001${endpoint}`);
            const result = await response.json();

            setLoading(false);
            setMovies(result.data);
            setPagination(result.meta);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovies();
    }, []);

    const handlePagination = async (event, endpoint) => {
        event.preventDefault();
        getMovies(endpoint);
    };

    const handleAddMovie = async (data) => {
        try {
            let response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/movies`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();

            showMessageSuccess(result.message);
            getMovies();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditMovie = async (id) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}/movies/${id}`
            );
            const result = await response.json();

            result.ok && setMovie(result.data);

            console.log(movie);
        } catch (error) {
            console.log(error);
        }
    };

    return loading ? (
        <Loading />
    ) : (
        <Row>
            <Col sm={12} md={6} lg={4}>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            {movie ? 'Editar' : 'Agregar'} película
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <FormMovie
                            handleAddMovie={handleAddMovie}
                            movie={movie}
                            setMovie={setMovie}
                        />
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8}>
                <Card className='shadow mb-5'>
                    <Card.Body>
                        <div className='d-flex flex-column flex-md-row justify-content-between'>
                            <FormSearch getMovies={getMovies} />
                            <Paginator
                                pagination={pagination}
                                handlePagination={handlePagination}
                            />
                        </div>
                        <Table striped borderless responsive>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Duración</th>
                                    <th>Rating</th>
                                    <th>Género</th>
                                    <th>Premios</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <TableItem
                                        key={movie.id}
                                        movie={movie}
                                        handleEditMovie={handleEditMovie}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
