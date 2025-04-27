"use client";

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("**Hello world!!!**");

  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          list="categoryList"
          className="startup-form_input"
          required
          placeholder="Startup Category"
        />
        <datalist id="categoryList" className="w-[60%]">
          <option value="Health Tech" />
          <option value="Fin Tech" />
          <option value="Ed Tech" />
          <option value="Green Tech" />
        </datalist>
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <div>
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor value={pitch} onChange={(value) => setPitch(value as string)} />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
    </form>
  );
};

export default StartupForm;
