export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!query) {
    return new Response(JSON.stringify({ error: "Query param missing" }), { status: 400 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=geocode&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      return new Response(JSON.stringify(data.predictions), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Google Maps API error" }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
  }
}

{/*  
  */}