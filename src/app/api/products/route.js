export async function GET() {
  try {
    // Fetch data from a public API
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await res.json();

    // Return it as a response
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error fetching data' }), { status: 500 });
  }
}
