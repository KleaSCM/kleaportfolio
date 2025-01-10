import ProjectPage from "@/components/ProjectPage";

const Armanda = () => {
  return (
    <>
      <ProjectPage
        title="Armanda"
        description="Armanda is a stock trading application that provides real-time stock data and analytics."
        details={[
          {
            name: "Next.js",
            reason: "Used for building the frontend with dynamic components and server-side rendering.",
            badge: "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
          },
          {
            name: "TypeScript",
            reason: "Ensures type safety and scalable frontend development.",
            badge: "https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
          },
          {
            name: "Go",
            reason: "Used for creating backend APIs and handling stock market data processing.",
            badge: "https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
          },
          {
            name: "Alpha Vantage API",
            reason: "Provides real-time and historical stock market data.",
            badge: "https://img.shields.io/badge/Alpha%20Vantage-blue?style=for-the-badge&logo=chart.js&logoColor=white",
          },
          {
            name: "Gorilla WebSocket",
            reason: "Enables real-time updates for stock data using WebSocket connections.",
            badge: "https://img.shields.io/badge/Gorilla%20WebSocket-green?style=for-the-badge&logo=websocket&logoColor=white",
          },
          {
            name: "Dynamic Data Visualizations",
            reason: "Utilized libraries like Chart.js for rendering interactive charts and plots.",
            badge: "https://img.shields.io/badge/Data%20Visualization-red?style=for-the-badge&logo=chart.js&logoColor=white",
          },
          
        ]}
        screenshot="/images/project.png"
        codeSnippet={`
          // Fetch stock data from the backend (TypeScript)
          const fetchStockData = async (symbol: string) => {
            try {
              const response = await fetch(\`/api/stocks/\${symbol}\`);
              const data = await response.json();
              return data;
            } catch (error) {
              console.error("Error fetching stock data:", error);
            }
          };
          
          // UseEffect to fetch data and update the chart (React)
          useEffect(() => {
            const loadStockData = async () => {
              const data = await fetchStockData(selectedSymbol);
              setStockData(data);
            };
            loadStockData();
          }, [selectedSymbol]);
          
          // Render candlestick chart with fetched data
          <CandlestickChart data={stockData?.historical || []} title="Candlestick Chart" />
          
          // Handler for stock data in Go
          func stockDataHandler(w http.ResponseWriter, r *http.Request) {
            vars := mux.Vars(r)
            symbol := vars["symbol"]
          
            url := fmt.Sprintf("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=%s&interval=1min&apikey=%s", symbol, alphaVantageAPIKey)
            resp, err := http.Get(url)
            if err != nil {
              http.Error(w, "Failed to fetch stock data", http.StatusInternalServerError)
              return
            }
            defer resp.Body.Close()
          
            body, err := ioutil.ReadAll(resp.Body)
            if err != nil {
              http.Error(w, "Failed to read response body", http.StatusInternalServerError)
              return
            }
          
            var stockData interface{}
            if err := json.Unmarshal(body, &stockData); err != nil {
              http.Error(w, "Failed to parse stock data", http.StatusInternalServerError)
              return
            }
          
            respondWithJSON(w, stockData)
          }
          `}
          
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

export default Armanda;
