import ProjectPage from "@/components/ProjectPage";

const VulSCAN = () => {
  return (
    <>
      <ProjectPage
        title="VulSCAN"
        description="VulSCAN is a comprehensive vulnerability scanner designed for security assessments. It features port scanning, banner grabbing, HTTP header analysis, and vulnerability detection. The tool generates detailed JSON reports for actionable insights."
        details={[
          {
            name: "Go",
            reason: "Provides efficient and scalable performance for network operations and scanning.",
            badge: "https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
          },
          {
            name: "Networking",
            reason: "Implements robust port scanning, banner grabbing, and SSL/TLS checks for comprehensive assessments.",
            badge: "https://img.shields.io/badge/Networking-%2300CCBB.svg?style=for-the-badge&logo=internet-explorer&logoColor=white",
          },
          {
            name: "JSON Reporting",
            reason: "Generates detailed and structured reports for ease of analysis and actionable results.",
            badge: "https://img.shields.io/badge/JSON-%23000000.svg?style=for-the-badge&logo=json&logoColor=white",
          },
        ]}
        screenshot="/images/vulscan_project.png"
        codeSnippet={`func ScanPorts(host string, ports []int) map[int]bool {
  openPorts := make(map[int]bool)

  for _, port := range ports {
    address := fmt.Sprintf("%s:%d", host, port)
    conn, err := net.DialTimeout("tcp", address, 1*time.Second)
    if err == nil {
      openPorts[port] = true
      conn.Close()
    } else {
      openPorts[port] = false
    }
  }

  return openPorts
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/vulscan",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default VulSCAN;
