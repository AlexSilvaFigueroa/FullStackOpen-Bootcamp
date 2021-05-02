const Content = ({parts}) => {
    console.log(parts)
    return (
        <div>
            {
                parts.map( (x, index) => (
                    <p key={index}>{x.part}</p>
                ))
            }
        </div>
    )
}

export default Content

