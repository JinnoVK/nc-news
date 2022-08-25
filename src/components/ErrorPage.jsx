const ErrorPage = (props) => {
  return (
    <div className="Error">
      <h2>{props.message}</h2>
      <h3>
        Looks like this page doesn't exist yet, click home to go back to the
        main page
      </h3>
    </div>
  );
};

export default ErrorPage;
