const table = document.querySelector('#table')

window.addEventListener('keydown', (e) => {
    table.innerHTML = `
        <table class="table table-secondary">
        <tr>
            <th>Key</th>
            <th>Key-code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    `
})