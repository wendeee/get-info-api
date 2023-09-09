exports.getDetails = async (req, res) => {
 const { slack_name, track } = req.query;
 try {
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const utcTime = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  const gitHubFileUrl = "";
  const githubRepoUrl = "";
  const statusCode = 200;
  res.status(200).json({
   slack_name: slack_name,
   current_day: currentDay,
   utc_time: utcTime,
   track: track,
   github_file_url: gitHubFileUrl,
   github_repo_url: githubRepoUrl,
   status_code: statusCode,
  });
 } catch (err) {
  return res.status(500).json({
   message: err.message,
  });
 }
};
