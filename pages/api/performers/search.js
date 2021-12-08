import { search } from "../../../lib/performer";

export default async function searchPerformers(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ error: { message: "Method not allowed" } });
    return;
  }

  try {
    const response = await search();
    res.json({ performers: response });
  } catch (e) {
    console.log(e);
  }
}
