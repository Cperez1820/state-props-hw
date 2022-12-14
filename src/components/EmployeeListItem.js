export default function EmployeeListItem({ name, title, img}) {
    return (
        <div className="employee">
            <div className="list-img">
                <img src={img} alt={img} />
        </div>
        <div className="list-text">
            <h5 className="list-name">{name}</h5>
                <p className="list-title">{title}</p>
        </div>
    </div>
    )
}