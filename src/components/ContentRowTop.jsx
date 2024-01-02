import { ContentRowMovies } from './ContentRowMovies';
import { GenresInDb } from './GenresInDb';
import { LastMoviesInDb } from './LastMoviesInDb';

export const ContentRowTop = () => {
    return (
        <div class='container-fluid'>
            <div class='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 class='h3 mb-0 text-gray-800'>App Dashboard</h1>
            </div>

            <ContentRowMovies />

            <div class='row'>
                <LastMoviesInDb />

                <GenresInDb />
            </div>
        </div>
    );
    44;
};
