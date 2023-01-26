import Movies from "./Movies";
const HomePage = () => {
  return (
    <>
      <section className="heading">
        <h3>Please Login or Register to See/Add Document</h3>
      </section>
      <br />
      <section className="advertisment">
        <h1>Advertisement</h1>
        <p>
          This is not real Advertisement website; it is made for practice of
          MERN
        </p>
        <section className="movies">
          <Movies />
        </section>
      </section>
    </>
  );
};

export default HomePage;
