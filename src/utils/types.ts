export type HeaderProps = {
  onCategorySelect: (category: string) => void;
  onSearch: (query: string) => void;
  cartCount: number;
};

export type ProductProps = {
  selectedCategory: string;
  searchQuery: string;
  onAddToCart: (productId: number) => boolean;
};

export type StarGeneratorProps = {
  rating: number;
}

// export type Product = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };