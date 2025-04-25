import "./info_tile.css";

function InfoTile({
    title,
    description,

}: {
    title: string;
    description: string;

}) {
    return (
        <div className="info-tile">

            <h2 className="">{title}</h2>
            <p className="">{description}</p>
        </div>
    );
}

export default InfoTile;