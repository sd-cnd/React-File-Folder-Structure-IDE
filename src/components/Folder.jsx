import { useState } from "react"
import { FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";

const Folder = ({ explorer = {} }) => {
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand);
    }

    if (explorer.isFolder) {
        return (
            <div className="Folder">
                <span
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}>
                    {!expand ? <FaFolder /> : <FaFolderOpen/> } {explorer.name}
                </span>

                <div style={{ display: expand ? "flex" : "none", paddingLeft: "15px", cursor: "pointer", flexDirection: expand ? "column" : null }}>
                    {explorer.items.map(exp => {
                        return (
                            <Folder key={exp.name} explorer={exp} />
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return <span><FaFile /> {explorer.name}</span>
    }
}

export default Folder
