
const Auto = ({index, marca, anio, patente}) => {

    return (
        <tr>
            <th scope="row">{index + 1} </th>
            <td>{patente} </td>
            <td>{anio} </td>
            <td>{marca} </td>
        </tr>
    )
}

export default Auto;
