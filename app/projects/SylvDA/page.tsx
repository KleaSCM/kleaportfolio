import ProjectPage from "@/components/ProjectPage";

const Project1 = () => {
  return (
    <>
      <ProjectPage
        title="SylvDA"
        description="SylvDA is an intelligent desktop assistant that combines natural language processing, API integrations, 3D model rendering, and a user-friendly interface for a versatile productivity and information tool."
        details={[
          {
            name: "Python",
            reason: "Core programming language for implementing logic and integrations.",
            badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
          },
          {
            name: "Tkinter",
            reason: "Used for building the graphical user interface (GUI).",
            badge: "https://img.shields.io/badge/Tkinter-%23e3e3e3.svg?style=for-the-badge",
          },
          {
            name: "OpenAI API",
            reason: "Provides natural language understanding and response generation.",
            badge: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white",
          },
          {
            name: "Pyglet",
            reason: "Handles 3D model rendering for enhanced visual capabilities.",
            badge: "https://img.shields.io/badge/Pyglet-4B8BBE?style=for-the-badge&logo=python&logoColor=white",
          },
        ]}
        screenshot="/images/sylvda.png"
        codeSnippet={`def process_input(self, event=None):
    user_input = self.input_box.get()
    self.output_box.insert(tk.END, f"User: {user_input}\n")
    self.input_box.delete(0, tk.END)

    response = self.handle_command(user_input.lower())
    self.output_box.insert(tk.END, f"Assistant: {response}\n")`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/sylvda",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default Project1;
