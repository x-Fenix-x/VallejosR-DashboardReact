export const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 h-100'>
            <button className='btn btn-primary' type='button' disabled>
                <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                ></span>
                Cargando...
            </button>
        </div>
    );
};
