import { Image } from "react-bootstrap";

const MyBadge = ({ id, title, selectedJobID, setSelectedJobID }) => {
    return (
        <div className={`mb-2 job-badge ${id === selectedJobID ? 'active' : ''}`} onClick={() => setSelectedJobID(id)}>
            {id === selectedJobID ? <Image src="bag-white.png" /> : <Image src="bag.png" />}
            <label style={{ fontWeight: 700, marginLeft: 10 }}>{title}</label>
        </div>
    );
}

export default MyBadge;
