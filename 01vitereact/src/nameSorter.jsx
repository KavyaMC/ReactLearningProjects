function NameSorter({name1, name2}) {
    if (name1 < name2) {
        return (
            <>
            <p>{name1}</p>
            <p>{name2}</p>
            </>
        )
    } else {
        return (
            <>
            <p>{name2}</p>
            <p>{name1}</p>
            </>
        )
    }
}

export default NameSorter;