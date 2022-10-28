import useFormulario from "../hooks/useFormulario"

const Formulario = ({ setCity }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: ''
    });
    const {name} = formulario;

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(formulario.name.trim().toLowerCase());
        reset();
    }

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