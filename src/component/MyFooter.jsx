import { Container } from "react-bootstrap";

const MyFooter = (props) => {
  return (
    <Container fluid className="mt-4 bg-dark text-light d-flex justify-content-around">
      <div className="text-start">
        <h3 className="pt-2">I nostri Contatti</h3>
        <p className="mb-1">
          Email - <a href="#">epibooks-customerservice@epiceducation.com</a>
        </p>
        <p className="m-0 pb-2">
          Numero di telefono -{" "}
          <a href="#" className="text-decoration-none text-primary ">
            3278514968
          </a>
        </p>
      </div>
      <form className="d-flex flex-column">
        <h3>Inserisci i tuoi dati</h3>
        <input type="text" placeholder="Inserisci la tua Email" />
        <button className="btn btn-sm btn-dark" type="submit">
          Invia
        </button>
      </form>
    </Container>
  );
};

export default MyFooter;
