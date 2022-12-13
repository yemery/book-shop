const navBarWordLinks = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "books", path: "/books" },
  { id: 3, name: "by-products", path: "/otherproducts" },
  { id: 4, name: "contact", path: "/contact" },
];
const navBarIconLinks = [
  {
    id: 1,
    src: "Icons/shopping-icon.svg",
    path: "/shoppingcart",
    name: "shopping cart",
  },
  {
    id: 2,
    src: "Icons/heart-thin-icon.svg",
    path: "/wishelist",
    name: "wish list",
  },
  {
    id: 3,
    src: "Icons/user-check-icon.svg",
    path: "/login",
    name: "Login or sign Up",
  },
];

export { navBarWordLinks, navBarIconLinks };
