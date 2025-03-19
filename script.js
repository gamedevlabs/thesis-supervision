async function fetchLastCommit() {
  const repo = "YOUR-ORG/YOUR-REPO"; // Replace with your organization and repo name
  const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
  const data = await response.json();

  if (data && data.length > 0) {
    const lastCommitDate = new Date(data[0].commit.committer.date).toLocaleString();
    document.getElementById("last-commit").innerText = `Last Commit: ${lastCommitDate}`;
  }
}

fetchLastCommit();
