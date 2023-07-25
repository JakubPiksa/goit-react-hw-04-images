import css from './button.module.css'

const Button = ({ onClick, isLoading }) => {
  return (
      <button
          className={css.button}
          onClick={onClick}
          disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Load more'}
    </button>
  );
};


export default Button;