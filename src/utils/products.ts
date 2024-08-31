export interface Product {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const fetchProducts = async (): Promise<Product[]> => {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw new Error('API URL is not defined');
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
