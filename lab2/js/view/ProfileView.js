class ProfileView {
    constructor() {
        this.container = document.getElementById("profileContent");
    }

    renderUser(user) {
        if (!user) {
            this.container.innerHTML = "<p class='text-danger'>No user is currently logged in.</p>";
            return;
        }

        this.container.innerHTML = `
      <table class="table table-bordered table-striped align-middle">
        <tbody>
          <tr><th style="width: 30%;">Name</th><td>${user.login}</td></tr>
          <tr><th>Email</th><td>${user.email || '—'}</td></tr>
          <tr><th>Birthday</th><td>${user.birthday || '—'}</td></tr>
          <tr><th>Gender</th><td>${user.gender || '—'}</td></tr>
        </tbody>
      </table>
    `;
    }
}
