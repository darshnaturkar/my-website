document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('errorMsg');
    const logoutBtn = document.getElementById('logoutBtn');
    const submitFileBtn = document.getElementById('submitFileBtn');

    // Login Page Logic
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            const userid = document.getElementById('userid').value;
            const password = document.getElementById('password').value;
            if (userid === '2023CA1118' && password === 'ceptam123') {
                window.location.href = 'user.html';
            } else {
                errorMsg.style.display = 'block';
            }
        });
    }

    // Logout Logic
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // File Submit Logic
    if (submitFileBtn) {
        submitFileBtn.addEventListener('click', function() {
            const fileType = document.getElementById('fileType').value;
            const tableContainer = document.getElementById('tableContainer');
            const tableHTML = `
                <table class='table table-bordered mt-3'>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>File Type</th>
                            <th>File Name</th>
                            <th>File No</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${[1,2,3,4,5].map(i => `
                            <tr>
                                <td>${i}</td>
                                <td>${fileType}</td>
                                <td>Sample_File_${i}.pdf</td>
                                <td>${1000 + i}</td>
                                <td><a href='#' class='btn btn-primary btn-sm'>Download</a></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>`;
            tableContainer.innerHTML = tableHTML;
        });
    }
});
