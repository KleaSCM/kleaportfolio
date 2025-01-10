import ProjectPage from "@/components/ProjectPage";

const Project1 = () => {
  return (
    <>
<ProjectPage
  title="ArtScape"
  description="ArtScape is a Full Stack E-commerce Site for Buying, Selling, and Hosting Artworks. Built using Go, TypeScript, SQLite, and integrated with Stripe for payments."
  details={[
    {
      name: "Next.js",
      reason: "Used for server-side rendering and routing.",
      badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    },
    {
      name: "TypeScript",
      reason: "Ensures type safety and robust development.",
      badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "Go",
      reason: "Handles backend logic, API services, and Stripe payment integration.",
      badge: "https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    },
    {
      name: "SQLite",
      reason: "Stores artwork, user, and transaction data efficiently.",
      badge: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    },
    {
      name: "Stripe",
      reason: "Enables secure and seamless payment processing.",
      badge: "https://img.shields.io/badge/Stripe-%23646DFF.svg?style=for-the-badge&logo=stripe&logoColor=white",
    },
  ]}
  screenshot="/images/project.png"
  codeSnippet={`// React: Fetch and display artworks with pagination and search
const fetchArtworks = async (page, limit, searchQuery) => {
  try {
    const response = await axios.get('/artworks', {
      params: { page, limit, query: searchQuery },
    });
    setArtworks(response.data.artworks);
    setTotalPages(response.data.totalPages); // Dynamic total pages
  } catch (error) {
    console.error('Failed to fetch artworks:', error);
  }
};

// Go: Create Stripe checkout session
func createCheckoutSession(w http.ResponseWriter, r *http.Request) {
  var cart []CartItem
  if err := json.NewDecoder(r.Body).Decode(&cart); err != nil {
    http.Error(w, "Invalid request", http.StatusBadRequest)
    return
  }

  stripe.Key = os.Getenv("STRIPE_SECRET_KEY")
  lineItems := make([]*stripe.CheckoutSessionLineItemParams, len(cart))
  for i, item := range cart {
    lineItems[i] = &stripe.CheckoutSessionLineItemParams{
      PriceData: &stripe.CheckoutSessionLineItemPriceDataParams{
        Currency: stripe.String("usd"),
        ProductData: &stripe.CheckoutSessionLineItemPriceDataProductDataParams{
          Name: stripe.String(item.Title),
        },
        UnitAmount: stripe.Int64(int64(item.Price * 100)),
      },
      Quantity: stripe.Int64(1),
    }
  }

  params := &stripe.CheckoutSessionParams{
    PaymentMethodTypes: stripe.StringSlice([]string{"card"}),
    LineItems:          lineItems,
    Mode:               stripe.String("payment"),
    SuccessURL:         stripe.String("http://localhost:3000/success"),
    CancelURL:          stripe.String("http://localhost:3000/cancel"),
  }

  s, err := session.New(params)
  if err != nil {
    http.Error(w, "Stripe checkout error", http.StatusInternalServerError)
    return
  }

  json.NewEncoder(w).Encode(map[string]string{"sessionId": s.ID})
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/project1",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default Project1;
