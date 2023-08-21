export default function Location(props) {
    return (
        <span className="location">
            <span className="location--img">
                <img width="125" height="168" src={"../src/assets" + "/" + props.imageUrl}></img>
            </span>
            <span className="location--desc">
                <span className="location--area">
                    <span className="location--pin">
                        <img src="../src/assets/Fill_219.svg" height="14" width="7"></img>
                        <span className="location--country">{props.location}</span>
                    </span>
                    <a href={props.googleMapsUrl} target="_blank" className="location--map">View on Google Maps</a>
                </span>
                <span className="location--title">{props.title}</span>
                <span className="location--timeline">{props.startDate + " - " + props.endDate}</span>
                <span className="location--shortdesc">{props.description}</span>
            </span>
        </span>
    )
}
