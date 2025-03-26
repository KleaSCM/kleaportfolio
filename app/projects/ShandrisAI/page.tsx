import ProjectPage from "@/components/ProjectPage";

const ProjectShandrisAI = () => {
  return (
    <>
      <ProjectPage
        title="ShandrisAI"
        description="ShandrisAI is a personality-driven conversational AI system built in Go, integrated with PostgreSQL and DeepSeek LLM via Ollama. It features a custom identity engine, persistent memory, topic tracking, and dynamic personality rendering for rich, context-aware interactions."
        details={[
          {
            name: "Go",
            reason: "Backend language powering the HTTP API, topic switching, and identity logic.",
            badge: "https://img.shields.io/badge/Go-00ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
          },
          {
            name: "PostgreSQL",
            reason: "Stores chat history, personality profiles, and topic state persistently.",
            badge: "https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
          },
          {
            name: "LLM Integration (DeepSeek R1)",
            reason: "LLM response generation is handled via DeepSeek R1 running through Ollama.",
            badge: "https://img.shields.io/badge/LLM-DeepSeek_R1-ff69b4?style=for-the-badge",
          },
          {
            name: "Contextual Topic Tracking",
            reason: "Supports dynamic topic detection and switching with memory alignment.",
            badge: "https://img.shields.io/badge/Context-Aware-brightgreen?style=for-the-badge",
          },
        ]}
        screenshot="/images/shandrisai.png"
        codeSnippet={`func ChatHandler(w http.ResponseWriter, r *http.Request) {
  body, _ := io.ReadAll(r.Body)
  var req ChatRequest
  _ = json.Unmarshal(body, &req)

  newTopic := ClassifyPrompt(req.Prompt)
  currentTopic := GetCurrentTopic(req.SessionID)

  if currentTopic == "uncategorized" && newTopic != "uncategorized" {
    SetCurrentTopic(req.SessionID, newTopic)
  }

  personality, _ := GetPersonality(db)
  history, _ := GetChatHistoryByTopic(req.SessionID, newTopic)

  context := BuildPrompt(personality, history, req.Prompt, currentTopic, newTopic)
  rawResponse, _ := RunDeepSeek(context)

  SaveChatHistory(req.SessionID, req.Prompt, rawResponse, newTopic)
  json.NewEncoder(w).Encode(ChatResponse{Response: rawResponse})
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/shandris",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default ProjectShandrisAI;
