export default async function (req, res) {
  res.json({ rooms:[{room:'Room 1',usage:70},{room:'Room 2',usage:40}] });
}