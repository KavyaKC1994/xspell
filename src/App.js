import React, { useState } from "react";

const XSpellCheck = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const words = inputText.split(" ");
    for (const word of words) {
      const lowercaseWord = word.toLowerCase();
      if (customDictionary.hasOwnProperty(lowercaseWord)) {
        const correctedWord = customDictionary[lowercaseWord];
        setCorrection(`Did you mean: <strong>${correctedWord}</strong>?`);
        return;
      }
    }
    setCorrection("");
  };

  return (
    <div>
      <h1>Spell Check and Auto Correction</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
        rows="4"
        cols="50"
      />
      {correction && (
        <div
          style={{ position: "relative", top: "20px" }}
          dangerouslySetInnerHTML={{ __html: correction }}
        />
      )}
    </div>
  );
};

export default XSpellCheck;
