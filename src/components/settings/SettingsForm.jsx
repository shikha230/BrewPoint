import { useState } from "react";

const SettingsForm = ({ data, onSave }) => {
  const [form, setForm] = useState(data);
  const [preview, setPreview] = useState(
    data.logo || ""
  );

  // handle text inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle image upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);

        setForm({
          ...form,
          logo: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="md:col-span-2 bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          name="cafeName"
          value={form.cafeName}
          onChange={handleChange}
          placeholder="Cafe Name"
          className="w-full border p-3 rounded"
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
        />

        <input
          name="gst"
          value={form.gst}
          onChange={handleChange}
          placeholder="GST Number"
          className="w-full border p-3 rounded"
        />

        <input
          name="tax"
          type="number"
          value={form.tax}
          onChange={handleChange}
          placeholder="Tax %"
          className="w-full border p-3 rounded"
        />

        {/* Theme Color */}
        <div>
          <label className="text-sm text-gray-500">
            Theme Color
          </label>
          <input
            type="color"
            name="themeColor"
            value={form.themeColor}
            onChange={handleChange}
            className="w-full h-10"
          />
        </div>

        {/* Logo Upload */}
        <div>
          <label className="text-sm text-gray-500">
            Upload Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: form.themeColor,
          }}
          className="w-full text-white py-3 rounded-xl"
        >
          Save Settings
        </button>
      </form>

      {/* LIVE PREVIEW */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        {preview ? (
          <img
            src={preview}
            alt="logo"
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full" />
        )}

        <h2 className="text-xl font-bold">
          {form.cafeName}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {form.address}
        </p>

        <p className="text-gray-400 text-xs mt-2">
          GST: {form.gst}
        </p>

        <div
          className="mt-4 p-2 rounded text-white"
          style={{
            backgroundColor: form.themeColor,
          }}
        >
          Live Theme Preview
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;