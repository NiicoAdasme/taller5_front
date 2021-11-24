
const Auto = ({index, marca, anio, patente}) => {

    const [{_id, descripcion}] = marca

    return (
        <tr>
            <th scope="row">{index + 1} </th>
            <td>{patente} </td>
            <td>{anio} </td>
            <td key={_id}>{descripcion}</td>
        </tr>
    )
}

export default Auto;
