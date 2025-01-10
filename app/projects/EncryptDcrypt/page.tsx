import ProjectPage from "@/components/ProjectPage";

const Project1 = () => {
  return (
    <>
      <ProjectPage
        title="GipityLauncher"
        description="GipityLauncher is a desktop application that serves as a comprehensive productivity tool and AI-enhanced launcher. It combines cutting-edge technologies for smooth app launching, dynamic scripting, and natural AI interactions."
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
            name: "C++",
            reason: "Used for backend logic and performance-critical operations.",
            badge: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
          },
          {
            name: "Electron",
            reason: "Provides a seamless desktop application experience.",
            badge: "https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white",
          },
        ]}
        screenshot="/images/project.png"
        codeSnippet={`int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "Error: No command provided.\\n";
        displayHelp();
        return 1;
    }
    std::string command = argv[1];
    if (command == "LaunchAPP") {
        if (argc < 3) {
            std::cerr << "Error: No app path provided.\\n";
            displayHelp();
            return 1;
        }
        std::string appPath = argv[2];
        launchApp(appPath);
    } else if (command == "saveScript") {
        if (argc < 4) {
            std::cerr << "Error: No file path or content provided.\\n";
            displayHelp();
            return 1;
        }
        std::string filePath = argv[2];
        std::string content = argv[3];
        saveScript(filePath, content);
    } else if (command == "openFolder") {
        if (argc < 3) {
            std::cerr << "Error: No folder path provided.\\n";
            displayHelp();
            return 1;
        }
        std::string folderPath = argv[2];
        openFolder(folderPath);
    } else {
        std::cerr << "Error: Unrecognized command.\\n";
        displayHelp();
        return 1;
    }
    return 0;
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
