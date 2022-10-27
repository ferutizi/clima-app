import useFormulario from "../hooks/useFormulario"

const Formulario = ({ city, setCity }) => {
    const [formulario, handleChange, reset] = useFormulario({});
    const {name} = formulario;

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(city.trim().toLowerCase());
        reset();
    }

    console.log(formulario);
    return(
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="city"
            value={name}
            onChange={handleChange}
            autoFocus
          >
          </input>
          <button type="submit">buscar</button>
        </form>
    )
}

export default Formulario;