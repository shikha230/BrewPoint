import { useState } from "react";
import SettingsForm from "../../components/settings/SettingsForm";
import { defaultSettings } from "../../data/settingsData";

const Settings = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("cafeSettings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const handleSave = (data) => {
    setSettings(data);
    localStorage.setItem("cafeSettings", JSON.stringify(data));
    alert("Settings updated successfully!");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Cafe Settings ⚙️
        </h1>
        <p className="text-gray-500">
          Control branding, tax & invoice settings
        </p>
      </div>

      <SettingsForm
        data={settings}
        onSave={handleSave}
      />
    </div>
  );
};

export default Settings;