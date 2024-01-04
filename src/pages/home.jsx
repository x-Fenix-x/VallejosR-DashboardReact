import { ContentRowMovies } from '../components/ContentRowMovies';
import { GenresInDb } from '../components/GenresInDb';
import { LastMoviesInDb } from '../components/LastMoviesInDb';

export const Home = () => {
    return (
        <>
            <ContentRowMovies />

            <div className='row'>
                <LastMoviesInDb />

                <GenresInDb />
            </div>
        </>
    );
};
