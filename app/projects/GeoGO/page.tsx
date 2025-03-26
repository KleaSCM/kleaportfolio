import ProjectPage from "@/components/ProjectPage";

const ProjectGeoGO = () => {
  return (
    <>
      <ProjectPage
        title="GeoGO"
        description="GeoGO is a high-performance meteorite tracking and geospatial API system built in Go. It integrates Redis caching, PostgreSQL with PostGIS, and OpenStreetMap’s Nominatim API to enable blazing-fast forward/reverse geocoding, dynamic spatial filtering, and rich frontend visualizations using Leaflet."
        details={[
          {
            name: "Go",
            reason: "The entire backend is written in Go for speed, concurrency, and maintainability.",
            badge: "https://img.shields.io/badge/Go-00ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
          },
          {
            name: "PostgreSQL + PostGIS",
            reason: "Stores and queries geospatial data using powerful PostGIS functions for location-based filtering.",
            badge: "https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
          },
          {
            name: "Redis",
            reason: "Caches geocoding results and query outputs for huge performance gains.",
            badge: "https://img.shields.io/badge/Redis-DC382D.svg?style=for-the-badge&logo=redis&logoColor=white",
          },
          {
            name: "Leaflet + Next.js",
            reason: "Frontend maps are interactive, dynamically rendered with Leaflet, and integrated into a sleek modern UI.",
            badge: "https://img.shields.io/badge/Leaflet-199900.svg?style=for-the-badge&logo=leaflet&logoColor=white",
          },
          {
            name: "OpenStreetMap",
            reason: "Reverse/forward geocoding powered by the Nominatim API.",
            badge: "https://img.shields.io/badge/OpenStreetMap-7EBC6F.svg?style=for-the-badge&logo=openstreetmap&logoColor=white",
          },
        ]}
        screenshot="/images/geogo.png"
        codeSnippet={`// Reverse geocode with Redis caching
func ReverseGeocode(lat, lon float64) (string, error) {
    redisKey := fmt.Sprintf("geo:%f,%f", lat, lon)
    cached, err := redisClient.Get(ctx, redisKey).Result()
    if err == nil && cached != "" {
        return cached, nil
    }

    url := fmt.Sprintf("https://nominatim.openstreetmap.org/reverse?format=json&lat=%f&lon=%f", lat, lon)
    resp, err := http.Get(url)
    if err != nil {
        return "Unknown", err
    }
    defer resp.Body.Close()

    var result struct { DisplayName string \`json:"display_name"\` }
    json.NewDecoder(resp.Body).Decode(&result)

    if result.DisplayName == "" {
        result.DisplayName = fmt.Sprintf("Coords: %.4f, %.4f", lat, lon)
    }
    redisClient.Set(ctx, redisKey, result.DisplayName, 24*time.Hour)
    return result.DisplayName, nil
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/geogo",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default ProjectGeoGO;
