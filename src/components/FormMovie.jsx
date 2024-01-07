import { Form } from 'react-bootstrap';

export const FormMovie = () => {
    return (
        <Form>
            <div className='form-floating mb-3'>
                <input
                    type='text'
                    className='form-control'
                    id='floatingTitle'
                    placeholder='Título de la película'
                />
                <label htmlFor='floatingTitle'>Título</label>
            </div>
            <div className='form-floating'>
                <input
                    type='number'
                    className='form-control'
                    id='floatingRating'
                />
                <label htmlFor='floatingRating'>Rating</label>
            </div>
        </Form>
    );
};
