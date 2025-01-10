import ProjectPage from "@/components/ProjectPage";

const ProjectBlueFrog = () => {
  return (
    <>
      <ProjectPage
        title="BlueFrog"
        description="BlueFrog is a World of Warcraft addon designed to enhance combat feedback with customizable message frames, real-time event handling, and user-friendly settings."
        details={[
          {
            name: "Lua",
            reason: "Primary scripting language for World of Warcraft addons.",
            badge: "https://img.shields.io/badge/Lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white",
          },
          {
            name: "World of Warcraft API",
            reason: "Used for interacting with in-game events, UI, and combat logs.",
            badge: "https://img.shields.io/badge/World%20of%20Warcraft-%23F7A828.svg?style=for-the-badge&logo=world-of-warcraft&logoColor=white",
          },
          {
            name: "Observer Pattern",
            reason: "Implements modular and scalable event-handling architecture.",
            badge: "https://img.shields.io/badge/Observer%20Pattern-%231E90FF.svg?style=for-the-badge",
          },
          {
            name: "UI Customization",
            reason: "Includes sliders and toggles for user-configurable settings.",
            badge: "https://img.shields.io/badge/Customization-%234CAF50.svg?style=for-the-badge",
          },
        ]}
        screenshot="/images/bluefrog.png"
        codeSnippet={`-- Combat Log Event Handler
local eventHandler = CreateFrame("Frame")
eventHandler:RegisterEvent("COMBAT_LOG_EVENT_UNFILTERED")
eventHandler:SetScript("OnEvent", function(self, event)
    local _, subEvent, _, sourceGUID, _, _, _, destGUID, _, _, _, spellId, _, _, amount, _, _, _, critical = CombatLogGetCurrentEventInfo()

    local eventType = nil
    if subEvent == "SPELL_DAMAGE" or subEvent == "RANGE_DAMAGE" or subEvent == "SWING_DAMAGE" then
        eventType = sourceGUID == UnitGUID("player") and "damage" or "damageTaken"
    elseif subEvent == "SPELL_HEAL" or subEvent == "SPELL_PERIODIC_HEAL" then
        eventType = "healing"
    end

    if eventType and amount then
        CombatEventObserver.notify(eventType, sourceGUID, destGUID, spellId, amount, critical)
    end
end)

-- Frame Factory for Custom Message Frames
local function MessageFrameFactory(frameType, point, relativePoint, xOffset, yOffset)
    local settings = BlueFrogSettings.getInstance()
    local frame = CreateFrame("ScrollingMessageFrame", frameType, UIParent, "BackdropTemplate")

    frame:SetSize(250, settings.frameHeight)
    frame:SetPoint(point, UIParent, relativePoint, xOffset, yOffset)
    frame:SetFont(GameFontNormalLarge:GetFont(), settings.fontSize)
    frame:SetTextColor(unpack(settings.fontColor))
    frame:SetFading(true)
    frame:SetFadeDuration(settings.fadeDuration)
    frame:SetTimeVisible(settings.timeVisible)
    frame:SetMaxLines(settings.maxLines)
    frame:EnableMouse(true)
    frame:SetMovable(true)

    return frame
end
`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/bluefrog-addon",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
          {
            label: "CurseForge",
            link: "https://www.curseforge.com/wow/addons/bluefrog",
            icon: "https://img.icons8.com/windows/32/ffffff/download.png",
          },
        ]}
      />
    </>
  );
};

export default ProjectBlueFrog;
