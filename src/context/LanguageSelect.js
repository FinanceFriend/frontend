import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function LanguageSelect({ value, onChange }) {
  const languages = [
    { label: "English" },
    { label: "Croatian" },
    { label: "German" },
  ];

  return (
    <Autocomplete
      id="language-select-demo"
      sx={{ width: 247 }}
      options={languages}
      value={value} 
      onChange={(event, newValue) => {
        onChange({ name: 'preferredLanguage', value: newValue }); // Update parent state
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <img loading="lazy" width="20" alt="" />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Preferred Language"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
