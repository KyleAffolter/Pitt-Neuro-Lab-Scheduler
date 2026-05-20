export default async function (req, res) {
  res.json([{ title: 'Room1-S1 Demo', start: new Date().toISOString() }]);
}