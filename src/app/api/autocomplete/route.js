export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
  
    if (!query) {
      return new Response(JSON.stringify({ error: "Query parameter missing" }), { status: 400 });
    }
  
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // API Key'i server-side saklıyoruz
  
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
    https://nextjs.org/docs/app/api-reference/file-conventions/route
    1- Die GET-Funktion ist eine asynchrone Funktion, die die Google Places Autocomplete API verwendet, 
    um Adressvorschläge basierend auf einem Suchbegriff zu erhalten.
    2- Die Funktion extrahiert den Suchbegriff aus der URL-Abfragezeichenfolge und überprüft, ob er vorhanden ist.
    3- Die Funktion ruft die Google Places Autocomplete API auf und gibt die Vorschläge zurück, wenn die API-Antwort erfolgreich ist.
    4- Die Funktion gibt einen Fehler zurück, wenn der Suchbegriff fehlt, die API-Antwort einen Fehler enthält oder
    die API-Antwort nicht erfolgreich ist.
    5- Die Funktion gibt die Vorschläge als JSON-Antwort zurück, wenn die API-Antwort erfolgreich ist.
    6- const { searchParams } = new URL(req.url); extrahiert die URL-Abfragezeichenfolge aus der Anforderung.
    7- const query = searchParams.get("query"); extrahiert den Suchbegriff aus der URL-Abfragezeichenfolge. 
    Der Suchbegriff wird als query-Variable gespeichert.
    8- if (!query) { überprüft, ob der Suchbegriff vorhanden ist. Wenn nicht, wird ein Fehler zurückgegeben.
    9- const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; speichert den Google Maps API-Schlüssel in der apiKey-Variable.
    10- const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=geocode&key=${apiKey}`;
    erstellt die URL für die Google Places Autocomplete API-Anfrage basierend auf dem Suchbegriff und dem API-Schlüssel.
    11- const response = await fetch(url); ruft die Google Places Autocomplete API auf und speichert die Antwort in der response-Variable.
    12- const data = await response.json(); parst die API-Antwort als JSON und speichert sie in der data-Variable.
  */}