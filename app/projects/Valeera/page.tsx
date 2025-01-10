import ProjectPage from "@/components/ProjectPage";

const Project1 = () => {
  return (
    <>
      <ProjectPage
        title="Valeera"
        description="Valeera is a smart, AI-powered assistant designed to handle user queries dynamically, manage code snippets, and provide efficient interactions through a sleek Electron-based frontend integrated with a Go backend."
        details={[
          {
            name: "React",
            reason: "Used for building dynamic user interfaces.",
            badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
          },
          {
            name: "TypeScript",
            reason: "Ensures type safety and robust development.",
            badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
          },
          {
            name: "Go",
            reason: "Provides high-performance backend API handling and extensibility.",
            badge: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
          },
          {
            name: "Electron",
            reason: "Delivers a seamless desktop application experience.",
            badge: "https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white",
          },
        ]}
        screenshot="/images/valeera.png"
        codeSnippet={`func messageHandler(w http.ResponseWriter, r *http.Request) {
  log.Printf("Received %s request for %s", r.Method, r.URL.Path);

  if r.Method != http.MethodPost {
    log.Println("Method not allowed");
    http.Error(w, "Only POST method is allowed", http.StatusMethodNotAllowed);
    return;
  }

  var msg Message;
  err := json.NewDecoder(r.Body).Decode(&msg);
  if err != nil {
    log.Println("Error decoding message:", err);
    http.Error(w, "Bad request", http.StatusBadRequest);
    return;
  }

  log.Printf("Received message: %s", msg.Content);

  var reply string;
  if isQuestion(msg.Content) {
    if snippet, exists := Snippets[msg.Content]; exists {
      reply = snippet.Code;
    } else {
      reply, err = getOpenAIResponse(msg.Content);
      if err != nil {
        log.Println("Failed to get a response from OpenAI:", err);
        http.Error(w, "Failed to get a response from OpenAI", http.StatusInternalServerError);
        return;
      }
    }
  } else {
    reply = generateReply(msg.Content);
  }

  response := Response{
    Content: msg.Content,
    Reply:   reply,
  };

  w.Header().Set("Content-Type", "application/json");
  json.NewEncoder(w).Encode(response);
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/valeera",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default Project1;
