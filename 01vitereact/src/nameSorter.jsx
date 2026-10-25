
function sortNames({ name1, name2 }) {
    if (name1 < name2) {
        return name1 + "\n" + name2;
    } else {
        return name2 + "\n" + name1;
    }
}

function Results() {
    return (
        <p id="results" style={{ display: "none" }}></p>
    );
}

function NameSorter() {
    function handleSubmit(event) {
        event.preventDefault();

        const name1 = event.target.name1.value;
        const name2 = event.target.name2.value;

        const sortedNames = sortNames({ name1, name2 });

        document.getElementById("nameForm").style.display = "none";

        const results = document.getElementById("results");
        results.textContent = sortedNames;
        results.style.display = "block";
        results.style.whiteSpace = "pre-line";
    }

    return (
        <div>
            <form id="nameForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name1"
                    placeholder="First name"
                    required
                />

                <input
                    type="text"
                    name="name2"
                    placeholder="Second name"
                    required
                />

                <button type="submit">Sort Names</button>
            </form>

            <Results />
        </div>
    );
}

export default NameSorter;
