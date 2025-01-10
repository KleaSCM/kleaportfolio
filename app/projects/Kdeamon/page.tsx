import ProjectPage from "@/components/ProjectPage";

const ProjectKdeamon = () => {
  return (
    <>
      <ProjectPage
        title="Kdeamon"
        description="Kdeamon is a lightweight application launcher for Linux, designed to streamline workflow with a fuzzy search and inline autocomplete. It runs as a daemon, offering quick and efficient app launching directly from a minimalistic GUI."
        details={[
          {
            name: "Go",
            reason: "Core backend logic for handling app launching and daemonization.",
            badge: "https://img.shields.io/badge/Go-00ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
          },
          {
            name: "Fyne",
            reason: "Used to create the lightweight, platform-independent GUI.",
            badge: "https://img.shields.io/badge/Fyne-GUI-blue?style=for-the-badge",
          },
          {
            name: "Linux System Programming",
            reason: "Integrated Linux-specific features like parsing .desktop files and daemonizing the application.",
            badge: "https://img.shields.io/badge/Linux-System%20Programming-yellowgreen?style=for-the-badge",
          },
          {
            name: "Fuzzy Search",
            reason: "Implemented fuzzy search to enhance app search and selection.",
            badge: "https://img.shields.io/badge/Fuzzy%20Search-Algorithm-brightgreen?style=for-the-badge",
          },
        ]}
        screenshot="/images/kdeamon.png"
        codeSnippet={`package main

import (
    "bufio"
    "fmt"
    "os"
    "sync"
    "fyne.io/fyne/v2"
    "fyne.io/fyne/v2/app"
    "fyne.io/fyne/v2/widget"
    "github.com/sahilm/fuzzy"
)

var (
    appList []string
    mu sync.Mutex
    input *widget.Entry
    suggestion string
)

func main() {
    Kapp := app.New()
    Kwindow := Kapp.NewWindow("Kdeamon")

    input = widget.NewEntry()
    input.SetPlaceHolder("Search Kdeamon!")

    input.OnChanged = func(s string) {
        go func() {
            mu.Lock()
            defer mu.Unlock()

            if s == "" {
                suggestion = ""
                return
            }
            matches := fuzzy.Find(s, appList)
            if len(matches) > 0 {
                suggestion = appList[matches[0].Index]
            } else {
                suggestion = ""
            }
        }()
    }

    content := widget.NewVBox(input)
    Kwindow.SetContent(content)
    Kwindow.ShowAndRun()
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/kdeamon",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default ProjectKdeamon;
