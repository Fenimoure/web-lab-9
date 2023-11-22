function seeFlats () {
    let outputDiv = document.getElementById('output');
    for (const listKey in List) {
        outputDiv.appendChild(List[listKey].show());
    }
}