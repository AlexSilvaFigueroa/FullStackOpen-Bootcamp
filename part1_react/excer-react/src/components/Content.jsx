const Content = ({parts}) => {
    return (
        <div>
            {
                parts.map( (x) => (
                    <p key={x.id}>{x.name} : {x.exercises}</p>
                ))
            }
        </div>
    )
}

export default Content

